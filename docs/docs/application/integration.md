---
sidebar_position: 4
---


# Integração do Chatbot ao Robô

## Integração de chatbot para o ROS2

Em resumo, o arquivo **'gradio_pdf_stream.py'** ativa o nosso chatbot Alfred, desenvolvido com base no modelo 'dolphin2.2-mistral', que está localizado no diretório de modelos em './andevs/src/robot/LLM/terminal_way/LLM-Andev/modelfile'. Suas instruções essencialmente o definem como um assistente para a empresa, e sua resposta final é "Indo pegar [ao] "ferramenta"". Todas as respostas do LLM são submetidas a um filtro regex. No entanto, quando essa resposta específica é gerada, ela aciona uma função que busca o objeto em um dicionário contendo um valor (coordenadas), representando a localização daquele objeto.

**1. Importação de Bibliotecas:**
   - `gradio`: Biblioteca para criar interfaces de usuário interativas.
   - `langchain.llms.Ollama`: Importação de um modelo de linguagem (LLM) chamado Ollama.
   - `requests`: Biblioteca para realizar solicitações HTTP.
   - `json`, `re`: Bibliotecas para manipulação de JSON e expressões regulares.
   - `chatbot_actions`: Módulo contendo a função `chatbot_print`.

**2. Dicionário de Intenções (`intent_dict`):**
   - Define um dicionário mapeando padrões de intenções a funções específicas.
   - Exemplo: O padrão "Indo pegar [ao]?\s*([\w\s]+)" é associado à função `chatbot_print`.

**3. Função `send_request`:**
   - Realiza uma solicitação POST para um servidor local.
   - Envia um prompt para o modelo "Alfred" e recebe uma resposta.

**4. Função `generate_response`:**
   - Gera uma resposta usando o modelo GPT-3 com base no prompt fornecido.
   - Analisa a resposta em busca de padrões definidos em `intent_dict`.
   - Executa funções correspondentes se padrões são encontrados.

**5. Interface Gradio:**
   - Utiliza a biblioteca `gradio` para criar uma interface de chat interativa.
   - Permite a entrada de mensagens (`msg`) e exibe as respostas do chatbot (`chatbot`).
   - Possui um botão de limpar (`clear`) para reiniciar a conversa.

**6. Chamada à Interface:**
   - A interface Gradio é lançada quando o script é executado diretamente (`if _name_ == "_main_":`).


## Integração ROS2 para o Robô

O script apresenta um sistema de navegação para um robô utilizando a biblioteca `nav2_simple_commander`. Ele permite que o robô se mova para posições específicas no ambiente. Além disso, há uma função `chatbot_print` que simula um chatbot indicando a localização de objetos com base em um dicionário pré-definido.

### 1. Inicialização e Configuração da Navegação

O código começa com a inicialização do nó ROS (Robot Operating System) através do `rclpy.init()` e a criação de uma instância do `BasicNavigator` do pacote `nav2_simple_commander`. 

### 2. Geração de Poses e Configuração Inicial

A função `create_pose_stamped` cria uma pose inicial e a configura no `BasicNavigator`. Essa pose é utilizada como ponto de partida para as futuras navegações.

### 3. Navegação para Posições Específicas

A função `pose` recebe coordenadas e orientação como entrada, transformando-as em uma pose e instruindo o robô a navegar até essa posição.

### 4. Dicionário de Ferramentas (`dict_tool`)

Um dicionário chamado `dict_tool` mapeia nomes de ferramentas para suas respectivas coordenadas no ambiente.

### 5. Função `chatbot_print`

A função `chatbot_print` simula a interação de um chatbot que informa a posição de um objeto específico. Ela utiliza o dicionário de ferramentas para obter as coordenadas e chama a função `pose` para navegar até o local.

### 6. Execução Principal

O código verifica se está sendo executado como o programa principal (`if _name_ == "_main_":`) e chama a função `chatbot_print`, simulando o chatbot.git