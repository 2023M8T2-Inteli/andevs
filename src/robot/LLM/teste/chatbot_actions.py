from nav2_simple_commander.robot_navigator import BasicNavigator
from geometry_msgs.msg import PoseStamped
from tf_transformations import quaternion_from_euler
import rclpy
from math import pi

rclpy.init()
nav = BasicNavigator()

def create_pose_stamped():
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
    nav.waitUntilNav2Active()

def pose(pose_x, pose_y, pose_z):
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

dict_tool = {
    "parafuso": [0.25, 0.516],
    "chave de fenda": [1.1, 2.0],
    "serrote": [0.0, 0.0],
    "parafusadeira":[8, 88],
    "alicate":[75, 43],
    "marreta":[22, 17],
    "tesoura":[91, 12],
    "nível":[34, 78],
    "fita métrica": [0, 22],
    "furadeira":[18, 93],
    "chave inglesa":[67, 56],
    "pá":[39, 2],
    "seringa":[84, 71],
    "trena":[12, 45],
    "grampo":[97, 30],
}

create_pose_stamped()

def chatbot_print(objeto):
    waypoint = []
    print(f"Indo pegar {objeto}")
    pos = dict_tool[objeto.lower()]
    print(f"Posição: {pos[0]}, {pos[1]}")
    pose(float(pos[0]), float(pos[1]), 0.0)
    
    # waypoint.append(create_pose_stamped(nav, pos[0], pos[1], 0.0))

    # nav.goToWaypoints(waypoint)
    # while not nav.isTaskComplete():
    #     print(nav.getFeedback())
    
    # pos = dict_tool[objeto]
    # print(f"Posição: {pos}")
    # return f"Indo pegar {objeto}"

if __name__ == "__main__":
    chatbot_print()