import React from 'react';
import { Table, Typography, Row, Col, Image, Button, Card, Space } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import JsPDF from 'jspdf';

import wave from '../images/wave.png';
import logo from '../styles/images/logo.png';

const { Title } = Typography;

const History = () => {
  const dataSource = [
    {
      key: '1',
      username: 'usuário1',
      area: 'Área 1',
      itemName: 'Peça A',
      quantity: 3,
      quantity_disp: 100,
      date: '2023-01-01',
      location: 'Sala 101',
      status: 'Concluído',
    },
    {
      key: '2',
      username: 'usuário2',
      area: 'Área 2',
      itemName: 'Peça B',
      quantity: 5,
      quantity_disp: 100,
      date: '2023-02-15',
      location: 'Sala 203',
      status: 'Pendente',
    },
    {
      key: '3',
      username: 'usuário3',
      area: 'Área 3',
      itemName: 'Peça C',
      quantity: 2,
      quantity_disp: 100,
      date: '2023-03-10',
      location: 'Sala 305',
      status: 'Concluído',
    },
    {
      key: '4',
      username: 'usuário3',
      area: 'Área 3',
      itemName: 'Peça C',
      quantity: 2,
      quantity_disp: 100,
      date: '2023-03-10',
      location: 'Sala 305',
      status: 'Concluído',
    },
    {
      key: '5',
      username: 'usuário3',
      area: 'Área 3',
      itemName: 'Peça C',
      quantity: 2,
      quantity_disp: 100,
      date: '2023-03-10',
      location: 'Sala 305',
      status: 'Concluído',
    },
    {
      key: '6',
      username: 'usuário3',
      area: 'Área 3',
      itemName: 'Peça C',
      quantity: 2,
      quantity_disp: 100,
      date: '2023-03-10',
      location: 'Sala 305',
      status: 'Concluído',
    },
  ];

  const columns = [
    {
      title: 'Funcionário',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Área',
      dataIndex: 'area',
      key: 'area',
    },
    {
      title: 'Peça',
      dataIndex: 'itemName',
      key: 'itemName',
    },
    {
      title: 'Qtd. Retirada',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Qtd. Disponível',
      dataIndex: 'quantity_disp',
      key: 'quantity_disp',
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

  function generatePDF() {
    const report = new JsPDF('portrait', 'pt', 'a4');

    // Obtenha o conteúdo HTML da tabela usando um ID
    const content = document.getElementById('my-table');

    // Adicione o conteúdo HTML ao relatório PDF
    report.html(content, {
      callback: () => {
        report.save('report.pdf');
      },
    });
  }

  const processDataForChart1 = () => {
    const totalQuantity = dataSource.reduce((acc, item) => acc + item.quantity, 0);
    const totalQuantityDisp = dataSource.reduce((acc, item) => acc + item.quantity_disp, 0);

    return [
      { name: 'Quantity', value: totalQuantity },
      { name: 'Quantity Disp', value: totalQuantityDisp },
    ];
  };

  const processDataForChart2 = () => {
    const areaData = {};
    dataSource.forEach(item => {
      if (areaData[item.area]) {
        areaData[item.area] += item.quantity;
      } else {
        areaData[item.area] = item.quantity;
      }
    });

    return Object.keys(areaData).map(area => ({
      area,
      quantity: areaData[area],
    }));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Row style={{ height: '8vh', backgroundColor: "#001348", color: '#fff', alignContent: 'center' }} align='middle'>
        <Col span={14} align='start'>
          <h1 style={{ marginLeft: '5%' }}>ALFRED</h1>
        </Col>
        <Col align='end'>
          <Button href='/record'>Solicitar Peça</Button>
        </Col>
      </Row>
      <Image src={wave} preview={false} style={{ width: '100%', maxWidth: '500px' }} />
      <Row>
        <Col xs={24} md={16} lg={12} xl={10}>
          <Title level={2}>Histórico de Peças</Title>
          <Table
            dataSource={dataSource}
            columns={columns}
            style={{ padding: 20 }}
            pagination={pagination}
            scroll={{ x: true }}
            id="my-table"
          />
        </Col>
      </Row>
      <Row justify='center'>
        <Button type='primary' onClick={generatePDF}>Exportar Tabela como PDF</Button>
      </Row>
      <Row justify='center'>
        <Card style={{ maxWidth: '90%', width: '90%' }}>
          <Title level={3}>Quantidade de Peças</Title>
          <PieChart width={300} height={300} responsive>
            <Pie
              data={processDataForChart1()}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              <Cell fill="#8884d8" />
              <Cell fill="#82ca9d" />
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Card>
      </Row>
      <Row justify='center'>
        <Card style={{ maxWidth: '90%', width: '90%' }}>
          <Title level={3}>Prevalência de Solicitações por Área</Title>
          <BarChart 
            width={350} 
            height={200} 
            data={processDataForChart2()}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="area" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="quantity" fill="#8884d8" />
          </BarChart>  
        </Card>
      </Row>
    </div>
  );
};

export default History;
