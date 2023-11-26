---
sidebar_position: 2
---

# Design Patterns
Design Patterns (Padrões de Projeto) são soluções reutilizáveis para problemas comuns que surgem ao projetar software. Eles são abordagens testadas e aprovadas para resolver desafios específicos de design, oferecendo diretrizes e estruturas que podem ser adaptadas a diferentes situações. Esses padrões não são códigos prontos, mas sim modelos conceituais que ajudam os desenvolvedores a projetar sistemas de software de forma mais eficiente e com maior qualidade.

## Aplicação do Projeto
#### 1. Padrão de Comunicação Publisher-Subscriber: 
Aplicado para a comunicação via tópicos com o ROS. Os nós do robô podem ser publishers (publicadores) que enviam informações sobre sensores e status, enquanto os nós que controlam a lógica do robô podem ser subscribers (assinantes) que recebem e processam essas informações. Isso permite uma comunicação eficaz entre os componentes do robô.

#### 2. Padrão de Navegação SLAM Baseado em Estratégia:
Padrão de estratégia para a navegação SLAM no Turtlebot Burger. Isso permite usar diferentes algoritmos de mapeamento e localização de acordo com as condições do ambiente. Por exemplo, escolher entre SLAM baseado em Laser ou visão computacional, dependendo da situação, tornando o sistema mais flexível.

#### 3. Padrão de Processamento de Linguagem Natural para Interação com o Usuário:
Para o Large Language Model (LLM) que lida com o processamento de fala e interação com os operadores, podemos aplicar padrões de design para criar uma interface de usuário conversacional eficaz. Isso pode incluir o padrão Command para representar comandos de voz, ou o padrão Interpreter para analisar e processar a linguagem natural dos operadores.

#### 4. Padrão de Estado para a Navegação Autônoma:
Para gerenciar o estado do robô durante a navegação autônoma, é possível aplicar o padrão State. Isso pode ajudar a definir estados como "Mapeamento", "Navegação" e "Aguardando Comando" e permitir que o robô mude entre esses estados de forma eficiente.

#### 5. Padrão de Controle de Acesso para Garantir Privacidade de Dados:
Dado que a privacidade e proteção de dados são preocupações importantes, consideramos aplicar um padrão de controle de acesso para garantir que apenas pessoal autorizado tenha acesso às informações registradas pelo robô. Isso ajudará a manter a confidencialidade dos dados.

#### 6. Padrão de Controle de Transição para a Navegação Autônoma:
Podemos aplicar o padrão de design State Machine para controlar as transições de estados do robô durante a navegação autônoma. Isso pode ajudar a definir as regras para quando o robô deve mudar de um estado para outro.