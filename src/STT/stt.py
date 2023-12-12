import gradio as gr
import openai
import os
import pyttsx3

openai.api_key = "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"  # Substitute with your OpenAI API key

messages = [{"role": "system", "content": 'Você é um terapeuta. Responda a todas as entradas em 25 palavras ou menos.'}]


def transcribe(audio, text):
    global messages

    if audio:
        audio_filename_with_extension = audio + '.wav'
        os.rename(audio, audio_filename_with_extension)

        audio_file = open(audio_filename_with_extension, "rb")
        transcript = openai.Audio.transcribe("whisper-1", audio_file)
        messages.append({"role": "user", "content": transcript["text"]})

    messages.append({"role": "user", "content": text})

    response = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=messages)
    system_message = response["choices"][0]["message"]
    messages.append(system_message)

    # Initialize pyttsx3 with Portuguese language
    engine = pyttsx3.init()
    engine.setProperty('voice', 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech\Voices\Tokens\TTS_MS_PT-BR_MARIA_11.0')

    engine.say(system_message['content'])
    engine.runAndWait()

    chat_transcript = ""
    for message in messages:
        if message['role'] != 'system':
            chat_transcript += message['role'] + ": " + message['content'] + "\n\n"

    return chat_transcript


ui = gr.Interface(fn=transcribe, inputs=["audio", gr.Textbox(label="Texto")], outputs="text")
ui.launch()