import gradio as gr
import openai
import os
import pyttsx3

openai.api_key = "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"  # Substitua com sua chave API do OpenAI

messages = [{"role": "system", "content": 'You are a therapist. Respond to all input in 25 words or less.'}]

def transcribe(audio, text):
    global messages
    if audio:
        audio_filename_with_extension = audio + '.wav'
        os.rename(audio, audio_filename_with_extension)
    
        audio_file = open(audio_filename_with_extension, "rb")
        transcript = openai.Audio.transcribe("whisper-1", audio_file)
    
        messages.append({"role": "user", "content": transcript["text"]})

        response = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=messages)

        system_message = response["choices"][0]["message"]
        messages.append(system_message)

        engine = pyttsx3.init()
        engine.setProperty('voice', 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech\Voices\Tokens\TTS_MS_PT-BR_MARIA_11.0')
        engine.say(system_message['content'])
        engine.runAndWait()

        chat_transcript = ""
        for message in messages:
            if message['role'] != 'system':
                chat_transcript += message['role'] + ": " + message['content'] + "\n\n"
        return chat_transcript
    else:
        messages.append({"role": "user", "content": text})
        response = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=messages)
        system_message = response["choices"][0]["message"]
        messages.append(system_message)
        engine = pyttsx3.init()
        engine.setProperty('voice', 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech\Voices\Tokens\TTS_MS_PT-BR_MARIA_11.0')
        engine.say(system_message['content'])
        engine.runAndWait()
        chat_transcript = ""
        for message in messages:
            if message['role'] != 'system':
                chat_transcript += message['role'] + ": " + message['content'] + "\n\n"
        return chat_transcript

    

ui = gr.Interface(fn=transcribe, inputs=[gr.Audio(type="filepath"), 'text'], outputs="text")
ui.launch()