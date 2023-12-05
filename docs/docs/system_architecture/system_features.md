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

O "Large Language Model" (LLM) refere-se a modelos de linguagem de grande porte que são treinados em vastos conjuntos de dados para compreender e gerar texto de maneira natural. Esses modelos são uma forma de inteligência artificial projetada para entender e produzir linguagem humana.
A solução utiliza o modelo dolphin2.2-mistral, diponibilizado pelo Ollama. Um modello local onde utiliza recursos computacionais da própria máquina para realizar a inferência.
O documento que gera o modelo já configurado é o Modelfile localizado em: `~/src/LLM/modelfile`. Para executar o documento, basta digitar o seguinte comando:

```bash
ollama create <nome para o seu modelo> -f Modelfile
```
 e para utilizar o modelo, basta digitar o seguinte comando:

```bash
ollama run <nome do modelo>
```

## Integração LLM com o Robô

O código localizado em `~/src/........` é responsável por integrar o LLM com o robô. Ele é responsável por receber o comandos, interpretar o comando e enviar o comando para o robô executar. Para executar o código, basta digitar o seguinte comando:

```bash