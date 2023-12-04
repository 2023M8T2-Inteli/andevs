from langchain.document_transformers import BeautifulSoupTransformer
from langchain.document_loaders import AsyncHtmlLoader
from langchain.vectorstores import FAISS
from langchain.embeddings import GPT4AllEmbeddings
from langchain.prompts import ChatPromptTemplate
from langchain.llms import Ollama
from langchain.schema.runnable import RunnablePassthrough
import gradio as gr
from langchain.llms import Ollama
import re
from chatbot_actions import chatbot_print
from langchain.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import Chroma
from langchain.embeddings.sentence_transformer import SentenceTransformerEmbeddings
from datetime import datetime

intent_dict = {
    r"Indo pegar [ao]?\s*([\w\s]+)": chatbot_print
}

def send_request(user_prompt):
    # load the document and split it into chunks
    loader = TextLoader("./objects.txt")
    documents = loader.load()

    # split it into chunks
    text_splitter = CharacterTextSplitter(chunk_size=100, chunk_overlap=0)
    docs = text_splitter.split_documents(documents)

    # create the open-source embedding function
    embedding_function = SentenceTransformerEmbeddings(model_name="all-MiniLM-L6-v2")

    # load it into Chroma
    vectorstore = Chroma.from_documents(docs, embedding_function)

    retriever = vectorstore.as_retriever(search_kwargs={"k": 1})

    print(retriever)

    template = """Responda a pergunta a seguir com a seguinte lista de ferramentas de contexto:
    {context}

    Pergunta: {question}
    """

    prompt = ChatPromptTemplate.from_template(template)

    model = Ollama(model="Alfred")

    chain = (
        {"context": retriever, "question": RunnablePassthrough()}
        | prompt
        | model
    )

    print("\nModel answer:\n")
    last_string = ""
    for s in chain.stream(user_prompt):
        last_string += s
    print(last_string)
    return last_string

def generate_response(prompt, chat_history):
    response = send_request(prompt)
    chat_history.append((prompt, response))
    for key, function in intent_dict.items():
        pattern = re.compile(key)
        point = pattern.findall(response)
        if point:
            function(point[0])
    
    return "", chat_history

with gr.Blocks() as demo:
    title="LLM Chatbot"
    chatbot = gr.Chatbot()
    msg = gr.Textbox()
    clear = gr.ClearButton([msg, chatbot])

    msg.submit(generate_response, [msg, chatbot], [msg, chatbot])

# Execute a interface Gradio
if __name__ == "__main__":
    demo.launch()

