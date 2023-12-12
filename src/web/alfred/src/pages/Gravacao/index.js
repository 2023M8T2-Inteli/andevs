import React, { useState } from "react";
import { Button, Row, Input, Col, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import styles from "./styles.module.css";

import microphone from "../../images/microphone.png";
import text from "../../images/text.png";

const Gravacao = () => {
  const [thermsModalVisible, setThermsModalVisible] = useState(true);

  return (
    <div className={styles.container}>
      <Row justify='center' style={{ margin: '3%' }}>
        <Col span={20} style={{ margin: '3%' }}>
          <Input style={{ border: '2pt solid #001348', borderRadius: '50px', height: '5vh' }} placeholder="O que você procura?" />
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button className={styles.search_button} icon={<SearchOutlined style={{ fontSize: '18pt' }} />} style={{ color: "white", width: '50px', height: '50px' }} />
        </Col >
      </Row>
      <div className={styles.buttons_container}>
        <Row align="center" justify='center'>
          <Button className={styles.record} href="http://127.0.0.1:7860/">
            <img src={microphone} alt="Microfone" className={styles.buttonImage} />
          </Button>
        </Row>
        <Row justify='center'>
          <Button className={styles.write} href="http://127.0.0.1:7862/">
            <Row align="center" justify="center">
              <img src={text} alt="Texto" className={styles.buttonImage} />
            </Row>
          </Button>
        </Row>
      </div>
      <Row justify="center" align='middle'>
        <Button
          className={styles.button_history}
          href="/history"
        >
          Acessar Histórico
        </Button>
      </Row>
    </div>
  );
};

export default Gravacao;
