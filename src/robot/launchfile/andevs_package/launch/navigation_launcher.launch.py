import os

from ament_index_python.packages import get_package_share_directory

from launch import LaunchDescription
from launch.actions import IncludeLaunchDescription, ExecuteProcess
from launch.launch_description_sources import PythonLaunchDescriptionSource
from launch_ros.actions import Node



def generate_launch_description():
   navigator_ros2 = ExecuteProcess(
            cmd=['ros2', 'launch', 'turtlebot3_navigation2', 'navigation2.launch.py', 'use_sim_time:=False', 'map:=c2-papel.yaml'],
            name='navigator_ros2',
            output='screen'
        )
   chatbot = ExecuteProcess(
            cmd=['gnome-terminal', '--', 'ros2', 'run', 'andevs_package', 'chatbot'],
            name='chatbot',
            output='screen'
        )

   return LaunchDescription([
      navigator_ros2,
      chatbot
   ])

if __name__ == "__main__":
   generate_launch_description()