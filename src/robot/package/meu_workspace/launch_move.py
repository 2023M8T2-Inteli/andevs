import subprocess
import os


cmd = "ros2 run turtlebot3_teleop teleop_keyboard"

terminal =subprocess.Popen(["xterm", "-e", f"{cmd} 2>&1"], stderr=subprocess.STDOUT)

terminal.wait()

print("Done")

cmd2 = 'ros2 run nav2_map_server map_saver_cli -f ./maps/my-map'

terminal = subprocess.Popen(["bash", "-c", f"{cmd2} 2>&1"], stderr=subprocess.STDOUT)

terminal.wait()

print("Saved")