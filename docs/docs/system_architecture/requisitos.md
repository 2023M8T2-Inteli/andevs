---
sidebar_position: 1
---

# Requisitos 

### Requisitos Funcionais 
 
No contexto dinâmico e desafiador do projeto, é fundamental implementar um sistema que otimize as operações diárias dos funcionários. Os requisitos funcionais deste sistema são estruturados para garantir eficiência, precisão e interação intuitiva, visando melhorar significativamente a experiência no ambiente de trabalho, aprimorando a produtividade dentro da Ambev e agregando valor para a empresa.

##### Localização: 


Agilidade na atividade operacional: o sistema deve reduzir significativamente o tempo gasto na busca de peças, para assim otimizar a produtividade no dia a dia dos funcionários no almoxarifado, contribuindo para um ambiente de trabalho mais eficiente, onde os funcionários podem contar com o auxílio do robô para agilizar e tornar mais precisa a localização das peças.


Redução de erros: minimizar erros humanos na localização de peças, diminuindo a probabilidade de perdas de tempo e de inventário.


##### Interação Compreensível:


Comunicação assertiva: garantir que os funcionários se sintam apoiados e seguros, quando forem auxiliados pelo robô durante as operações de busca.


Facilidade de treinamento: toda a solução deve ser  intuitiva, facilitando o treinamento de novos funcionários, reduzindo o tempo necessário para familiarização com o processo de busca.



### Requisitos Não Funcionais 

Para a concepção e desenvolvimento de um sistema de gerenciamento de estoque e localização de peças no almoxarifado, além dos requisitos funcionais, é crucial considerar os requisitos não funcionais. Estes parâmetros definem os critérios que não estão diretamente ligados às funcionalidades específicas do sistema, mas que desempenham um papel fundamental na qualidade, segurança e eficiência do projeto como um todo. 

##### (Requisito de Desempenho) 
O sistema robótico deve ser capaz de realizar o mapeamento com  
Precisão - Métrica relacionada à proximidade da localização até encontrar a peça.
Rapidez - Identificar o local da peça e indicar em até 15min. 

##### (Requisito de Eficiência) 
O chatbot deve ser capaz de compreender e responder às solicitações dos usuários de forma eficiente
Eficiente - Abordar corretamente as duas métricas de precisão e rapidez.


##### (Requisito de Segurança)
O sistema de navegação autônoma deve garantir segurança e evitar colisões
Sensor de proximidade - Realizar uma parada automática a uma distância de 1m do robô até um obstáculo.

##### (Requisito de Confiabilidade) 
O sistema de registro deve gerar arquivos CSV de operações diárias de forma confiável

##### (Requisito de Tempo) 
O projeto deve atender a um prazo específico para a realização da prova de conceito
Definição de data limite: Desenvolver o projeto até uma data limite, que pode ser representado durante as entregas das Sprints até a entrega do protótipo final.

##### (Requisito de Estabilidade) 
Estabilidade:
O sistema deve ser robusto, ou seja, que consiga processar um número elevado de requisições para que ele não trave.
Um sistema resistente a falhas, ou seja, que ele quase nunca falhe para que sempre tenha o serviço disponível.


##### (Requisito de Acessibilidade) 
O robô deve emitir um sinal sonoro a cada meio minuto para sinalizar de alguma forma sua atividade e posição.
