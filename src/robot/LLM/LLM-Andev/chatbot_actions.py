from nav2_simple_commander.robot_navigator import BasicNavigator
from geometry_msgs.msg import PoseStamped
from tf_transformations import quaternion_from_euler
import rclpy
from math import pi
import re

def create_pose_stamped():
    rclpy.init()
    nav = BasicNavigator()
    q_x, q_y, q_z, q_w = quaternion_from_euler(0.0, 0.0, 0.0)
    initial_pose = PoseStamped()
    initial_pose.header.frame_id = 'map'
    initial_pose.header.stamp = nav.get_clock().now().to_msg()
    initial_pose.pose.position.x = 0.0
    initial_pose.pose.position.y = 0.0
    initial_pose.pose.position.z = 0.0
    initial_pose.pose.orientation.x = q_x
    initial_pose.pose.orientation.y = q_y
    initial_pose.pose.orientation.z = q_z
    initial_pose.pose.orientation.w = q_w
    nav.setInitialPose(initial_pose)
    nav.waitUntilNav2Active()
    rclpy.shutdown()

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
    
    nav.goToPose(goal_pose)
    while not nav.isTaskComplete():
        print(nav.getFeedback())
    rclpy.shutdown()
    
dict_tool = {
    "inicio": [0.0, 0.0, 0.0],
    "martelo": [1.25, 0.51, 0.0],
    "chave de fenda": [0.97, 1.6],
    "serrote": [0.0, 0.0],
    "parafusadeira": [0.66, 0.22],
    "alicate": [1.3, 0.4],
    "marreta": (22, 17),
    "tesoura": (91, 12),
    "nível": (34, 78),
    "fita métrica": (50, 22),
    "furadeira": (18, 93),
    "chave inglesa": (67, 56),
    "pá": (39, 2),
    "seringa": (84, 71),
    "trena": (12, 45),
    "grampo": (97, 30),
}

def chatbot_print(objeto):
    pattern = re.compile("(-?\d+\.\d+)")
    point = pattern.findall(objeto[0])
    print(f"Entire obj: {objeto}")
    print(f"First element obj: {objeto[0]}")
    if point:
        print(f"Posição: {point}")
        print("Iniciando navegação")
        pose(float(point[0]), float(point[1]), 0.0)
    else:
        return print("Error")
    
    # waypoint.append(create_pose_stamped(nav, pos[0], pos[1], 0.0))

    # nav.goToWaypoints(waypoint)
    # while not nav.isTaskComplete():
    #     print(nav.getFeedback())
    
    # pos = dict_tool[objeto]
    # print(f"Posição: {pos}")
    # return f"Indo pegar {objeto}"

if __name__ == "__main__":
    chatbot_print()