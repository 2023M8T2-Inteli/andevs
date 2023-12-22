---
sidebar_position: 3
---

# Requisitos 

### Requisitos Funcionais 
 
No contexto dinâmico e desafiador do projeto, é fundamental implementar um sistema que otimize as operações diárias dos funcionários. Os requisitos funcionais deste sistema são estruturados para garantir eficiência, precisão e interação intuitiva, visando melhorar significativamente a experiência no ambiente de trabalho, aprimorando a produtividade dentro da Ambev e agregando valor para a empresa.

| ID | Requisito | Descrição | Resultado esperado |
|----|-----------|-----------|------------|
| RF01 | Interação compreensível | O sistema deve incluir uma interface de comunicação clara e eficaz entre os robôs e os funcionários. Isso pode envolver feedbacks visuais, sonoros ou até mesmo o status das operações, como a localização encontrada.|  Uma comunicação potencialmente abrangente, utilizando múltiplos canais sensoriais, para garantir uma compreensão completa das operações do robô, promovendo uma experiência de usuário mais informada.| 
| RF02 | Autonomia de mapeamento | O objetivo principal desse requisito é considerar que o robô possa operar de forma eficiente dentro do ambiente do almoxarifado, identificando os locais onde as peças estão armazenadas. O robô deve ser capaz de navegar pelo espaço, reconhecendo obstáculos e localizando itens específicos requisitados pelos operadores. Assim, atuando  de forma independente no mapeamento do espaço do almoxarifado. | Um sistema autônomo capaz de se orientar com precisão dentro do almoxarifado, facilitando o processo de localização de peças.
| RF03 | Prova de conceito | Na "prova de conceito" envolve a implementação inicial do projeto em um ambiente reduzido, que simula o contexto real do almoxarifado. Esta fase é crucial para validar os conceitos fundamentais do robô, como sua capacidade de navegação, interação com os operadores, e eficácia na localização e identificação de peças. |  Nessa fase é essencial demonstrar a viabilidade do projeto, evidenciando a funcionalidade do robô em um ambiente simulado. O sucesso desta etapa é fundamental para avançar para implementações mais amplas no ambiente real do almoxarifado, garantindo que o robô atenda às necessidades operacionais e de segurança antes de sua implementação em larga escala. | 


### Requisitos Não Funcionais 

Para a concepção e desenvolvimento de um sistema de gerenciamento de estoque e localização de peças no almoxarifado, além dos requisitos funcionais, é crucial considerar os requisitos não funcionais. Estes parâmetros definem os critérios que não estão diretamente ligados às funcionalidades específicas do sistema, mas que desempenham um papel fundamental na qualidade, segurança e eficiência do projeto como um todo. 

| ID | Requisito | Descrição | Resultado esperado |
|----|-----------|-----------|------------|
| RNF01 | Segurança no almoxarifado  | O sistema deve reduzir significativamente o tempo gasto na busca de peças, para assim otimizar a produtividade no dia a dia dos funcionários no almoxarifado, contribuindo para um ambiente de trabalho mais eficiente, onde os funcionários podem contar com o auxílio do robô para agilizar e tornar mais precisa a localização das peças. | A expectativa é que a implementação deste sistema resulte em uma redução mensurável do tempo médio necessário para localizar peças no almoxarifado. Isso deve levar a um aumento na eficiência operacional, com os funcionários sendo capazes de completar suas tarefas de maneira mais rápida e com menos erros. |
|  RNF02  | Registros das requisições | Ter um sistema de registro que deve gerar arquivos CSV de operações diárias de forma confiável, podendo também ser visualizado pelo o usuário. | Maior confiabilidade é essencial para garantir a integridade e rastreabilidade das operações, fornecendo dados precisos para análise e auditoria.| 
| RNF03 |Acessibilidade visual | A aplicação web deve oferecer modos de visualização ajustáveis para atender às necessidades de pessoas daltônicas, proporcionando diferentes opções de esquemas de cores que melhoram a legibilidade e distinguibilidade de elementos na interface.| Depois da conclusão, teremos uma aplicação mais inclusiva, possibilitando uma experiência visual otimizada para usuários daltônicos, ao oferecer opções adaptáveis de cores que facilitem a identificação e compreensão dos elementos na interface.
| RNF04 | Estabilidade | O sistema deve demonstrar robustez, sendo capaz de processar 10 requisições sem apresentar falhas, assegurando uma alta disponibilidade do serviço. | Minimizar ocorrências de interrupções, para garantir uma operação contínua e confiável.
| RNF05 | Segurança no almoxarifado | O sistema de navegação autônoma deve garantir segurança e evitar colisões, realizando uma parada automática para evitar obstáculos, de modo que seja uma distância personalizada pelo espaço que o robô poderá se locomover dentro do almoxarifado. | Maior segurança no projeto, considerando que seja de forma prioritária prevenir acidentes e danos, garantindo uma operação segura para todos os funcionários no ambiente de trabalho. | 