import openai
import os
from datetime import datetime
import re
import gradio as gr
from dotenv import load_dotenv
from chatbot_actions import chatbot_print

load_dotenv() 

# Substitua 'sua-api-key' pela sua chave de API do OpenAI
openai.api_key = os.getenv("OPENAI_API_KEY")

intent_dict = {
    r"Indo pegar [ao]?\s*([\w\s]+)": chatbot_print
}

def send_request(user_prompt, context):
    # Combine o prompt do usuário com o contexto do arquivo de texto
    full_prompt = f"{context}\n\nPergunta: {user_prompt}"

    # Use a API da OpenAI para obter a resposta do modelo GPT-3.5
    response = openai.Completion.create(
        model="text-davinci-002",  # Use o modelo GPT-3.5 da OpenAI
        prompt=full_prompt,
        max_tokens=150  # Ajuste conforme necessário
    )

    return response.choices[0].text.strip()

def generate_response(prompt, chat_history):
    # Carregue o contexto do arquivo de texto
    with open("./objects.txt", "r", encoding="utf-8") as file:
        context = file.read()

    response = send_request(prompt, context)
    chat_history.append((prompt, response))
    for key, function in intent_dict.items():
        pattern = re.compile(key)
        point = pattern.findall(response)
        if point:
            function(point[0])

    return "", chat_history

with gr.Blocks() as demo:
    title = "LLM Chatbot"
    chatbot = gr.Chatbot()
    msg = gr.Textbox()
    clear = gr.ClearButton([msg, chatbot])

    msg.submit(generate_response, [msg, chatbot], [msg, chatbot])

# Execute a interface Gradio
if __name__ == "__main__":
    demo.launch()
