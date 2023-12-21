---
sidebar_position: 1
---

# Prova de Conceito do Sistema

## Objetivo do Projeto 
Temos a necessidade de facilitar a rotina dos técnicos que acessam o almoxarifado de peças da cervejaria, facilitando através do robô tecnológico como encontrar dentro do almoxarifado as peças necessitadas. O robô tem por objetivo processar o pedido, dentro do contexto do almoxarifado da Ambev, e guiar o operador solicitante até o local onde o item está armazenado.

## Etapas do Sistema 
### 1. Mapeamento
Sistema que utiliza ROS2 e a Biblioteca de Navegação e Mapeamento "nav2" por meio da interface RViz para visualização do ambiente e obstáculos para o registro de um mapa. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/bXuKDN5mV2c?si=PLAIUttvRMEJJ5f3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 2. Navegação 
O sistema de navegação foi desenvolvido como parte integrante do mapeamento de área, proporcionando ao robô a capacidade de se movimentar de forma autônoma dentro do ambiente definido. Nesta seção, detalharemos o processo de implementação da navegação, desde a identificação da posição inicial até a inserção de pontos no mapa.

<iframe width="560" height="315" src="https://www.youtube.com/embed/NDvd92DEOpM?si=9Q32Ta1dhlkRPlDF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 3. Protótipo da Interface - Web
Com base nas necessidades do usuário, foi desenvolvida uma interface simples e intuitiva que pudesse auxiliar na interação e obtenção de peças de forma orientada. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/vXgNflB-Bok?si=tz68Emk-3ThKDqdb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 4. Desenvolvimento da Interface - Web
Com base no protótipo demonstrado acima e a validação tanto com os principais usuários quanto com os professores responsáveis pela disciplina de design/ux, foi desenvolvida uma interface web em react para a interação do usuário. 


<iframe width="560" height="315" src="https://www.youtube.com/embed/F-D8_3YRGio?si=ns35nABEFPXd5GUF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 5. Chatbot com Aplicação de Contexto

Passando para a etapa de desenvolvimento do Chatbot, criamos uma interface de interação para o usuário utilizando o sistema do Gradio integrado ao LLM da OpenAI. Esse sistema utiliza os conhecimentos do modelo com a referência de um arquivo pdf de instruções sobre as peças do almoxarifado. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/QN-Mr9t9FSQ?si=xhPSA6y7mPXFqZgr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 6. STT/TTS - Chatbot

Por fim, para a etapa final do projeto, o chatbot foi estruturado de forma que a comunicação pode ser realizada via audio. De modo que o usuário pode interagir com o sistema e vice versa de forma auditiva. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/RStEpCzI9SE?si=POn1R0fqt02RtFBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Integração Completa 
Com base no diagrama da arquitetura da solução demonstrado abaixo, finalizamos nossa construção da prova de conceito.

### Diagrama da Arquitetura
![Prova de Conceito da Solução](../system_architecture/img/arq2.png)

### Solução Final - POC 
<iframe width="900" height="450" src="https://www.youtube.com/embed/4GjtOcxbdUc?si=9oFUDCR2YAP-DMAW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>