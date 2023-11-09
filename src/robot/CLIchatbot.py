#! /usr/bin/env python3 
import rclpy
from nav2_simple_commander.robot_navigator import BasicNavigator
from geometry_msgs.msg import PoseStamped
from tf_transformations import quaternion_from_euler
from math import pi

def pose(pose_x, pose_y, pose_z):
    rclpy.init()
    nav = BasicNavigator()
    q_x, q_y, q_z, q_w = quaternion_from_euler(0.0, 0.0, pi/4)
    goal_pose = PoseStamped()
    goal_pose.header.frame_id = 'map'
    goal_pose.header.stamp = nav.get_clock().now().to_msg()
    goal_pose.pose.position.x = pose_x
    goal_pose.pose.position.y = pose_y
    goal_pose.pose.position.z = pose_z
    goal_pose.pose.orientation.x = q_x
    goal_pose.pose.orientation.y = q_y
    goal_pose.pose.orientation.z = q_z
    goal_pose.pose.orientation.w = q_w

    nav.waitUntilNav2Active()
    nav.goToPose(goal_pose)
    while not nav.isTaskComplete():
        print(nav.getFeedback())

    rclpy.shutdown()

dict_point = {
    "x": [1.0, 1.0, 0.0],
    "inicio": [0.0, 0.0, 0.0],
}

def clichat():
    user_input = input("\nPara onde o robô deve ir? ").lower()

    if user_input == "sair":
        print("Fechando a aplicação.")
        exit()
    if user_input in dict_point:
        print(f"Indo para o ponto {user_input} localizado em: {dict_point[user_input]}.")
        pose(dict_point[user_input][0], dict_point[user_input][1], dict_point[user_input][2])
        return
    else:
        print("Ponto não encontrado.")
        return

def main():
    while True:
        clichat()
    

if __name__ == "__main__":
    main()