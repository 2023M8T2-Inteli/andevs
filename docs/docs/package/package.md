# Pacote 

Este pacote do ROS 2 foi desenvolvido para facilitar a execução do ROS Navigation 2 (nav2) para mapeamento, juntamente com a simulação no Webots. Além disso, o pacote inclui um script Python que abre um novo terminal, permitindo o controle do robô utilizando o teleop.

## Como Usar

Para utilizar este pacote, siga as instruções abaixo:

2. Abra um terminal na pasta do repositório clonado.

3. Execute os seguintes comandos para compilar o pacote:

    ```bash
    colcon build
    ```

4. Execute o lançamento (launch) com o seguinte comando:

    ```bash
    ros2 launch my_package launch.py
    ```

Isso iniciará a execução do ROS Navigation 2 para mapeamento e abrirá a simulação no Webots. Além disso, um novo terminal será aberto para controle do robô usando o pacote teleop.

Lembre-se de encerrar todas as execuções quando necessário.

## Requisitos

Certifique-se de ter o ROS 2, NAV2 e o Webots instalados em sua máquina antes de utilizar este pacote.

## Controle do Robô (Setup)

Após a execução do lançamento, um novo terminal será aberto para controle do robô. Utilize o teleop para mover o robô de forma interativa.

**Observação:** O Robô já precisa estar configurado com um sistema operacinal e o ROS 2 instalado. Além disso, o robô precisa estar conectado à rede local, já com a ponte SSH configurada.

Após validar as configurações acima, siga as instruções abaixo:

### Opção 1: Controle por meio da ponte SSH

Esse passo só é necessário se a versão do Ubuntu instaldo no robô não possuir uma saída de vídeo. Caso contrário, pule para a opção 2.

A ponte SSH permite que o robô seja controlado remotamente por meio de um outro terminal, ou seja, de outro computador, desde que ambos estajam na mesma rede. Para isso, siga as instruções abaixo:

1. Abra um novo terminal no seu computador e digite o seguinte comando:

    ```bash
    ssh grupo3@grupo3.local
    ```

    **Observação:** O nome do usuário e o endereço IP do robô podem ser encontrados no arquivo `config.yaml` do pacote `my_package`.

2. Digite a senha do robô quando solicitado.

    ```bash
    123
    ```

3. Digite o seguinte comando para iniciar o ros2 no robô:

    ```bash
    ros2 launch turtlebot3_bringup robot.launch.py    
    ```
    **Nota:** Até aqui, o robô já consegue executar os procedimentos estabelecidos nos códigos dentro dos lançadores. Caso você queira executar o teleop (Comando manual), siga para o próximo passo

4. Digite o seguinte comando para iniciar o teleop em um novo terminal:

    ```bash
    ros2 run turtlebot3_teleop teleop_keyboard
    ```


### Opção 2: Controle por meio de um terminal no robô direto

Caso seja possível conectar um monitor ao robô, siga as instruções abaixo:

1. Digite o seguinte comando para iniciar o ros2 no robô direto no seu terminal:

    ```bash
    ros2 launch turtlebot3_bringup robot.launch.py
    ```
    **Nota:** Até aqui, o robô já consegue executar os procedimentos estabelecidos nos códigos dentro dos lançadores. Caso você queira executar o teleop (Comando manual), siga para o próximo passo

2. Digite o seguinte comando para iniciar o teleop em um novo terminal em um computador diferente:

    ```bash
    ros2 run turtlebot3_teleop teleop_keyboard
    ```