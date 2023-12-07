#! /bin/env python3
import rclpy
from rclpy.node import Node
from std_msgs.msg import Float32MultiArray, String
import re

from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.schema.runnable import RunnablePassthrough
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.embeddings.openai import OpenAIEmbeddings
from dotenv import load_dotenv
from langchain.llms import Ollama

import gradio as gr


class LLMNode(Node):

    load_dotenv()

    def __init__(self):
        super().__init__('llm_node')
        
        self.publisher_ = self.create_publisher(
            msg_type = String,
            topic = '/output',
            qos_profile=10)
        
        self.load()

        self.run()

        self.get_logger().info("LLM Node created successfully")

    def load(self):

        model = Ollama(model="mistral")

        loader = PyPDFLoader("/home/gabriela/Documents/GitHub/andevs/src/robot/LLM/teste/data/points.pdf")
        pages = loader.load_and_split()

        text_splitter = CharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=0
        )

        vectorstore = FAISS.from_documents(pages, OpenAIEmbeddings())

        retriever = vectorstore.as_retriever()

        prompt = ChatPromptTemplate.from_template(
        """Answer the question based on the following context:
        {context}

        Question: {question}
        """)

        self.chain = (
            {"context": retriever, "question": RunnablePassthrough()}
            | prompt
            | model
        )
    
    def send_points(self, response):
        output = String()
        output.data = response

        self.publisher_.publish(output)

    def respond(self, text, audio, chat_history=[]):
        response = ''
        if text:
            for s in self.chain.stream(text):
                response += s.content
            
            self.send_points(response)

            chat_history.append((text, audio))

        elif audio:
            response = "Audio"
            chat_history.append(("audio", response))

    def run(self):
        with gr.Blocks() as demo:
            chatbot = gr.Chatbot()
            with gr.Row():
                msg = gr.Textbox()
                mic = gr.Microphone()
            btn = gr.Button(value='Submit')
            btn.click(self.respond, inputs=[msg, mic], outputs=[chatbot])

        demo.launch()

def main(args=None):
    rclpy.init(args=args)
    llm_node = LLMNode()

    rclpy.spin(llm_node)

    llm_node.destroy_node()
    rclpy.shutdown()


if __name__ == "__main__":
    main()