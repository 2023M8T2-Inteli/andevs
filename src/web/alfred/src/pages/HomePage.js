import React from 'react';
import { Form, Input, Button, Typography, notification, Image, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import logo from '../styles/images/logo.png';
import wave from '../images/wave.png'

const { Title } = Typography;

const HomePage = () => {

  return (
    <div style={{ textAlign: 'center', margin:0, padding:0 }}>
      <Image
       src={wave}
       preview={false}
      />
      <Row justify= 'center'>
      <Image
        width={500}
        src={logo}
        preview={false}
      />
      </Row>
      <Button style={{backgroundColor: "#FFD840", border: '2pt solid #001348', borderRadius:'20px', width:"200px", height: "50px", fontSize: 24}} href="/login">Iniciar</Button>
    </div>
  );
};

export default HomePage;
