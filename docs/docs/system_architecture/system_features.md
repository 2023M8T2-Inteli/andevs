---
sidebar_position: 6
---

# Funcionalidades do Sistema

A solução como todo é composta por diversas funcionalidades, que quando estão funcionando em conjunto, permitem que o robô realize os procedimentos que nele foram programados para atender as necessidades do almoxarifado. Essas funcionalidades são:

## Mapeamento e Navegação Autônoma (ROS2 e NAV2)

Permite que o robô se movimente pelo almoxarifado de forma autônoma. Ele é capaz de se desviar de obstáculos e de outros robôs, além de seguir uma rota pré-definida. Tudo isso é possível graças ao uso de sensores (LIDAR) e algoritmos de navegação (NAV2), integrados ao ROS2.

O mapeamento é feito por meio de do sensor LIDAR, que é capaz de identificar obstáculos e paredes. A partir disso, o robô é capaz de criar um mapa do ambiente e se localizar nele. No setup do robô, é possível gerar o mapa utilizando a navegação manual em conjunto com o seguinte comando:

```bash
ros2 launch turtlebot3_cartographer cartographer.launch.py
```

Como o mapa do local gerado, para salvar o mapa, basta digitar o seguinte comando:

```bash
ros2 run nav2_map_server map_saver_cli -f ~/Documents/Maps/my-map
```

**Nota**: O mapa será salvo na pasta `~/Documents/Maps/` com o nome `my-map`.

Com o mapa salvo, já é possível utilizar a navegação autônoma devido o NAV2 conseguir se localizar no mapa por meio dos senosres. Para isso, basta digitar o seguinte comando para abrir o mapa gerado no RViz:


```bash
ros2 launch turtlebot3_navigation2 navigation2.launch.py use_sim_time:=True map:=my-map.yaml
```

Com isso, é possível visualizar o mapa, a localização do robô, consegue ver as coordenadas de posição e definir isso em um código.

## LLM

O ChatGPT é um modelo de linguagem de grande porte treinado pela OpenAI. Ele oferece uma capacidade avançada de entender e gerar texto natural. A solução agora incorpora o ChatGPT como modelo de LLM, proporcionando respostas mais sofisticadas e versáteis durante a interação com o usuário.

Para utilizar o ChatGPT como modelo de LLM, o código pode ser encontrado em src/robot/LLM/LLM-Andev/gradio_pdf_stream.py. Certifique-se de fornecer sua API Key da OpenAI no código para garantir o acesso ao ChatGPT.


### Integração LLM com o Robô

O código localizado em ~src/robot/LLM/LLM-Andev/ integra o ChatGPT com o robô. Ele recebe comandos, os interpreta e envia ao robô para execução. Execute o código com:

```python3 gradio_pdf_stream.py```

Em seguida será necessário acessar o servidor responsável pela interface de interação: 

```
 http://127.0.0.1:7860/
```

## Interface do Usuário

Além disso, está sendo desenvolvida uma interface de front-end para a interação do usuário com o sistema. 
Para acessar a interface do front-end desenvolvido em React.js é necessário: 

1. Acessar Pasta com Servidor da Interface: 
```
cd /src/web/alfred
```

2. Instalar as Dependências:
```
npm install
```

4. Iniciar o Servidor: 
```
npm start
```

3. Acessar Rota:
```
http://localhost:3000/
```

