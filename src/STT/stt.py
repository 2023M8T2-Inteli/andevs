import gradio as gr
import openai
import os
import pyttsx3

openai.api_key = "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"  # Substitua com sua chave API do OpenAI
messages = [{"role": "system", "content": 'Your name is Alfred, you are a guidance robot for a warehouse at the Ambev brewery. Based on this, you know the location of parts and tools within the warehouse. And it is willing to help the user in the search for parts.Ferramentas Manuais:Caixa de Chaves de Fenda: (10, 5) Jogo de Alicates: (12, 6) Martelos: (11, 4) Equipamentos Eletrônicos: Multímetros: (15, 8) Osciloscópios: (14, 10) Fontes de Alimentação: (13, 7) Peças Mecânicas:Rolamentos: (5, 5)Engrenagens: 6, 7) Molas: (4, 6)Fios e Cabos:Caixas de Cabos Elétricos: (18, 9)Carretéis de Fios: (17, 8)Ferramentas de Soldagem:Máquinas de Solda: (8, 11)Eletrodos de Solda: (9, 12)Peças Eletrônicas:Resistores e Capacitores: (16, 5)Circuitos ntegrados: (16, 7)EPIs (Equipamentos de Proteção Individual):Capacete: (2, 2)Luvas de Segurança: (3, 3)Óculos de Proteção: (1, 2)'}]

def transcribe(audio):
    global messages

    audio_filename_with_extension = audio + '.wav'
    os.rename(audio, audio_filename_with_extension)
    
    audio_file = open(audio_filename_with_extension, "rb")
    transcript = openai.Audio.transcribe("whisper-1", audio_file)

    messages.append({"role": "user", "content": transcript["text"]})

    response = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=messages)

    system_message = response["choices"][0]["message"]
    messages.append(system_message)

    engine = pyttsx3.init()
    engine.say(system_message['content'])
    engine.runAndWait()

    chat_transcript = ""
    for message in messages:
        if message['role'] != 'system':
            chat_transcript += message['role'] + ": " + message['content'] + "\n\n"

    return chat_transcript

ui = gr.Interface(fn=transcribe, inputs=gr.Audio(type="filepath"), outputs="text")
ui.launch()