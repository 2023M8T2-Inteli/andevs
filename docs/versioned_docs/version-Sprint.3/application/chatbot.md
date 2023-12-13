---
sidebar_position: 3
---

# Chatbot

A aplicação que criamos possui um sistema de chatbot para tornar o sistema mais didático e inclusivo. Essa implementação unifica duas tecnologias diferentes, proporcionando um grande potencial.

## Funcionalidades do Chatbot

O chatbot incorpora um modelo de LLM (Large Language Model), que permite interações mais avançadas com os usuários. Com esse modelo, os usuários podem fazer perguntas mais criativas, sem limitações específicas do contexto do almoxarifado, facilitando a localização e identificação de peças desejadas.

## Uso de Contexto e ChatGPT

Durante a Sprint 3, implementamos melhorias significativas no chatbot, integrando um modelo de linguagem maior (LLM) e o ChatGPT da OpenAI. Agora, o processo de trabalho do chatbot segue este fluxo:

1. O usuário faz um prompt (pergunta) ao chatbot.
2. O chatbot responde de acordo com a pergunta feita, incorporando o contexto do almoxarifado.
3. Expressões regulares (regex) pré-definidas são utilizadas para identificar se o chatbot deve executar uma função específica, proporcionando respostas mais precisas.

Para utilizar o ChatGPT e o contexto do almoxarifado, o código pode ser encontrado em [src/robot/LLM/LLM-Andev/gradio_pdf_stream.py](#). Não se esqueça de fornecer a API Key da OpenAI no código para garantir o acesso correto ao modelo ChatGPT.

## Execução do Chatbot

1. Clone do repositório: 
```
git clone 'https://github.com/2023M8T2-Inteli/andevs.git'
```

2. Acesse a pasta que contem a estrutura do chatbot: 

```
cd src/robot/LLM/LLM-Andev
```

3. Em seguida execute o código que se conecta com o nosso servidor: 
```
python3 gradio_pdf_stream.py

```
4. Por fim é possivel acessar a interface utilizando a rota fornecida, geralmente é a seguinte rota: 
http://127.0.0.1:7860/


## Demonstração 
<iframe width="560" height="315" src="https://www.youtube.com/embed/QN-Mr9t9FSQ?si=J2E6bNndiOnHVLG1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
