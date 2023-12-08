import React from 'react';
import { Table, Typography, Row, Col, Image, Button } from 'antd';

import wave from '../images/wave.png';
import logo from '../styles/images/logo.png';

const { Title } = Typography;

const History = () => {
  const dataSource = [
    {
      key: '1',
      username: 'usuário1',
      itemName: 'Peça A',
      quantity: 3,
      date: '2023-01-01',
      location: 'Sala 101',
      status: 'Concluído',
    },
    {
      key: '2',
      username: 'usuário2',
      itemName: 'Peça B',
      quantity: 5,
      date: '2023-02-15',
      location: 'Sala 203',
      status: 'Pendente',
    },
    {
      key: '3',
      username: 'usuário3',
      itemName: 'Peça C',
      quantity: 2,
      date: '2023-03-10',
      location: 'Sala 305',
      status: 'Concluído',
    },
    {
      key: '4',
      username: 'usuário3',
      itemName: 'Peça C',
      quantity: 2,
      date: '2023-03-10',
      location: 'Sala 305',
      status: 'Concluído',
    },
    {
      key: '5',
      username: 'usuário3',
      itemName: 'Peça C',
      quantity: 2,
      date: '2023-03-10',
      location: 'Sala 305',
      status: 'Concluído',
    },
    {
      key: '6',
      username: 'usuário3',
      itemName: 'Peça C',
      quantity: 2,
      date: '2023-03-10',
      location: 'Sala 305',
      status: 'Concluído',
    },
    
  ];

  const columns = [
    {
      title: 'Nome de Usuário',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Nome da Peça Retirada',
      dataIndex: 'itemName',
      key: 'itemName',
    },
    {
      title: 'Quantidade',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Data',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  const pagination = {
    pageSize: 4,
  };

  return (
    <div style={{ textAlign: 'center'}}>
      <Image src={wave} preview={false} style={{ width: '100%', maxWidth: '500px' }} />
      <Image
        width={200}
        src={logo}
        preview={false}
      />
      <Row justify="center">
        <Col xs={24} md={16} lg={12} xl={10}>
          <Title level={2}>Histórico</Title>
          <Table dataSource={dataSource} columns={columns} style={{padding:20}} pagination={pagination} scroll={{ x: true }}/>
        </Col>
      </Row>
      <Row justify='start' style={{padding:20}}>
      <Button style={{backgroundColor: "#FFD840", border: '2pt solid #001348'}} href="/gravacao">
            {"<"}
          </Button>
      </Row>
      
    </div>
  );
};

export default History;
