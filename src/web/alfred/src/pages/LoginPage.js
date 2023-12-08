import React from 'react';
import { Form, Input, Button, Typography, notification, Image } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import logo from '../styles/images/logo.png';

const { Title } = Typography;

const LoginPage = () => {
  const onFinish = (values) => {
    // Lógica de autenticação ou envio dos dados
    console.log('Received values:', values);
  }
  
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <Image
        width={200}
        src={logo}
        preview={false}
      />
      <Title level={2} style={{fontFamily:'Manrope'}}>Login</Title>
      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ maxWidth: '300px', margin: 'auto' }}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Por favor, insira seu e-mail.' },
            { type: 'email', message: 'Por favor, insira um e-mail válido.' },
          ]}
        >
          <Input style={{border: '2pt solid #001348', borderRadius: '50px'}} prefix={<UserOutlined />} placeholder="E-mail" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Por favor, insira sua senha.' }]}
        >
          <Input.Password style={{border: '2pt solid #001348', borderRadius: '50px'}} prefix={<LockOutlined />} placeholder="Senha" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" href="/gravacao">
            Entrar
          </Button>
        </Form.Item>
        <Form.Item>
          Ainda não tem um cadastro? <Link to="/signup">Cadastre-se</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
