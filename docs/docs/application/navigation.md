---
sidebar_position: 2
---

# Navegação 
O sistema de navegação foi desenvolvido como parte integrante do mapeamento de área, proporcionando ao robô a capacidade de se movimentar de forma autônoma dentro do ambiente definido. Nesta seção, detalharemos o processo de implementação da navegação, desde a identificação da posição inicial até a inserção de pontos no mapa.

### 1. Identificação da Pose Inicial
Antes de iniciar a navegação, é crucial determinar a posição inicial do robô no ambiente. Para facilitar essa tarefa, foi desenvolvido o script initialPosition.py. Para executar este script, siga os passos abaixo:

```
cd src/robot
python initialPosition.py
```

Observação: Certifique-se de que a máquina está conectada ao robô via SSH antes de executar o script.

Este script utiliza métodos específicos para capturar e registrar a posição inicial do robô, fornecendo informações cruciais para a correta inicialização do sistema de navegação.

### 2. Início da Navegação
Uma vez identificada a posição inicial, o próximo passo é iniciar a navegação do robô no mapa previamente estabelecido. Para isso, utilize o seguinte comando:

```
# Inicia a navegação no mapa "c2-papel"
ros2 launch turtlebot3_navigation2 navigation2.launch.py use_sim_time:=False map:=c2-papel.yaml
```

### 3. Inserção de Pontos para Navegação
Para possibilitar a inserção de pontos no mapa, o script CLIchatbot.py foi desenvolvido. Este script permite que o usuário insira pontos específicos para a navegação do robô. Execute o seguinte comando em um terminal separado:

```
# Inicia a inserção de pontos - Deve ser executado em outro terminal.
cd src/robot
python CLIchatbot.py
```
Com este script em execução, você poderá interagir com o sistema, inserindo pontos de destino para o robô. Esses pontos serão considerados na rota de navegação, permitindo uma personalização flexível do percurso do robô dentro do ambiente mapeado.

### Sistema de Navegação no Mapa Desenvolvido 

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ezelf2W-h5s?si=AMTc1iST_gfWI7bv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>