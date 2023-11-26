---
sidebar_position: 3
---

# Chatbot

A aplicação que criamos, possui um sistema de chatbot para deixar o sistema mais didático e inclusivo, além de unificar duas tecnologias diferentes que juntas tem um grande potencial.

<iframe width="100%" height="550rem" src="https://www.youtube.com/embed/P_rz3zpHaOo?si=GpMdaP5Vy9SkhK2-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

(video de apresentação do chatbot)

Durante o desenvolvimento da sprint 3, o chatbot passou a incorporar um modelo de LLM (Large Language Model), responsável por interagir com o usuário após a formulação de suas perguntas. Ao utilizar esse modelo, o usuário pode fazer perguntas mais criativas, sem limitações no contexto do almoxarifado, facilitando a localização e identificação da peça desejada. Atualmente, o processo de trabalho do chatbot segue o seguinte fluxo: inicialmente, o usuário faz um prompt (pergunta) ao nosso chatbot. Em seguida, o chatbot responde de acordo com a pergunta feita. Dependendo da resposta, o chatbot passa por expressões regulares(regex) pré-definidas para identificar se deve ou não executar uma função específica para o robô. Comparada à versão anterior que utilizava apenas expressões regulares, essa versão tornou-se significativamente mais avançada, oferecendo inúmeras possibilidades de perguntas e respostas para o usuário.

Para determinarmos como o chatbot deveria responder a cada pergunta, criamos um prompt de sistema que estabelece o contexto inicial necessário para o chatbot sempre que é ativado. Nesse caso, fornecemos ao chatbot toda a sua função como assistente de almoxarifado, identificamos as peças disponíveis no almoxarifado e definimos como o robô deveria responder a perguntas específicas, permitindo assim a detecção por meio de expressões regulares (regex).

Adicionalmente, almejamos a possibilidade de criar novos pontos, seja a partir de um arquivo de dados ou por meio do próprio chatbot, a fim de otimizar processos e tornar a aplicação verdadeiramente inclusiva para todos os usuários.