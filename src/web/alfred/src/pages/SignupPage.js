// SignupPage.js
import React from 'react';
import { Form, Input, Button, Typography, Image } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import logo from '../styles/images/logo.png';

const { Title } = Typography;

const SignupPage = () => {
  const [form] = Form.useForm(); // Adicionei esta linha para criar a instância do formulário

  const onFinish = (values) => {
    // Lógica de cadastro ou envio dos dados
    console.log('Received values:', values);
  };

  const validatePassword = (_, value, callback) => {
    // Lógica de validação da senha
    const formValues = form.getFieldsValue(); // Adicionei esta linha para obter os valores do formulário
    if (value && value !== formValues.password) {
      callback('As senhas não coincidem.');
    } else {
      callback();
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      {/* Elemento de onda */}
      <Image
        width={200}
        src={logo}
        preview={false}
      />

      {/* Título da página */}
      <Title level={2} style={{fontFamily:'Manrope'}}>Cadastro</Title>

      {/* Formulário de Cadastro */}
      <Form
        name="signup-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ maxWidth: '300px', margin: 'auto' }}
      >
        {/* Nome Input */}
        <Form.Item name="name" rules={[{ required: true, message: 'Por favor, insira seu nome.' }]}>
          <Input style={{border: '2pt solid #001348', borderRadius: '50px'}} prefix={<UserOutlined />} placeholder="Nome" />
        </Form.Item>

        {/* Email Input */}
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Por favor, insira seu e-mail.' },
            { type: 'email', message: 'Por favor, insira um e-mail válido.' },
          ]}
        >
          <Input style={{border: '2pt solid #001348', borderRadius: '50px'}} prefix={<MailOutlined />} placeholder="E-mail" />
        </Form.Item>

        {/* Senha Input */}
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Por favor, insira sua senha.' }]}
        >
          <Input.Password style={{border: '2pt solid #001348', borderRadius: '50px'}} prefix={<LockOutlined />} placeholder="Senha" />
        </Form.Item>

        {/* Confirmação de Senha Input */}
        <Form.Item
          name="confirmPassword"
          rules={[
            { required: true, message: 'Por favor, confirme sua senha.' },
            { validator: validatePassword },
          ]}
        >
          <Input.Password style={{border: '2pt solid #001348', borderRadius: '50px'}} prefix={<LockOutlined />} placeholder="Confirme a senha" />
        </Form.Item>

        {/* Botão de Cadastro */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Cadastrar
          </Button>
        </Form.Item>

        {/* Texto e link para Login */}
        <Form.Item>
          Já tem um cadastro? <Link to="/login">Logar</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignupPage;
