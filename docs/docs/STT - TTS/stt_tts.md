# Interações com LLM por Aúdio 

## Speech to Text 

Este pacote foi desenvolvido para implementar a funcionalidade de Speech to Text (STT) em um ambiente ROS 2. Ele possibilita a transcrição de áudio em texto, facilitando a interação com sistemas baseados em voz. O pacote utiliza a API do OpenAI para realizar a transcrição, sendo capaz de interpretar comandos de voz e convertê-los em mensagens compreensíveis pelo sistema.

## Text to Speech

Este pacote foi desenvolvido para implementar a funcionalidade de Text to Speech (TTS) em um ambiente ROS 2. Ele possibilita a conversão de mensagens de texto em fala, permitindo uma interação auditiva com o sistema. O pacote utiliza a API do OpenAI para gerar respostas de forma natural, que são então reproduzidas em áudio.


## Como Usar

1. Clonar o repositório do projeto: 
```
git clone https://github.com/2023M8T2-Inteli/andevs.git
```

2. Acessar a pasta que contem o sistema de STT/TTS: 
```
cd /src/STT
```

3. Por fim basta executar o seguinte comando: 
```
python3 stt.py
```

Isso irá iniciar uma interface com gradio que pode ser acessada por meio da rota: 
http://127.0.0.1:7860/

Nessa interface podemos gravar um audio por meio do microfone, e esse audio interage com o modelo por meio de um contexto, e podemos receber informações sobre o nosso sistema. 
Assim como apresentado na demonstração. 

## Requisitos

Para poder executar o sistema existem algumas bibliotecas que precisam ser instaladas:
- pyttsx3
- gradio
- openai

Além disso é necessário possuir uma chave de acesso para utilizar a API da OpenAI.Para obter essa chave você pode seguir o seguinte tutorial:


## Demonstração
<iframe width="560" height="315" src="https://www.youtube.com/embed/RStEpCzI9SE?si=G9uXJbvnUpPc5wha" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>