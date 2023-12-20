import React, { Fragment } from "react";
import { Form, Input, Button, Typography, Image, Col, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import logo from "../styles/images/logo.png";
import wave from "../images/wave.png";

const { Title } = Typography;

const LoginPage = () => {
  const onFinish = (values) => {
    // Lógica de autenticação ou envio dos dados
    console.log("Received values:", values);
  };

  return (
    <>
      <Image src={wave} preview={false} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "65vh",
        }}
      >
        <Col>
          <Row justify='center'>
            <Image width={200} src={logo} preview={false} />
          </Row>
          <Row justify='center'>
            <Title level={2} style={{ fontFamily: "Manrope" }}>
              Login
            </Title>
          </Row>
          <Form
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            style={{ maxWidth: "300px", margin: "auto" }}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Por favor, insira seu e-mail." },
                {
                  type: "email",
                  message: "Por favor, insira um e-mail válido.",
                },
              ]}
            >
              <Input
                style={{ border: "2pt solid #001348", borderRadius: "50px" }}
                prefix={<UserOutlined />}
                placeholder="E-mail"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Por favor, insira sua senha." },
              ]}
            >
              <Input.Password
                style={{ border: "2pt solid #001348", borderRadius: "50px" }}
                prefix={<LockOutlined />}
                placeholder="Senha"
              />
            </Form.Item>
            <Row justify='center'>
              <Form.Item>
                <Button type="primary" htmlType="submit" href="/tutorial">
                  Entrar
                </Button>
              </Form.Item>
            </Row>
            <Form.Item>
              Ainda não tem um cadastro? <Link to="/signup">Cadastre-se</Link>
            </Form.Item>
          </Form>
        </Col>
      </div>
    </>
  );
};

export default LoginPage;
