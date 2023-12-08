import React, { useState } from "react";

import styles from "./styles.module.css";
import microphone from "../../images/microphone.png";
import text from "../../images/text.png";
import search from "../../images/search.png";
import { Button, Modal, Space, Col, Row } from "antd";
import {
  UserOutlined,
  LockOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

const Gravacao = () => {
  const [thermsModalVisible, setThermsModalVisible] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.search_container}>
        <p>O que você procura?</p>
        <img className={styles.search_button} src={search} />
      </div>
      <div className={styles.buttons_container}>
        <Button className={styles.record} href="http://127.0.0.1:7860/">
          <img src={microphone} style={{ marginTop: "30px" }} />
        </Button>
        <Button className={styles.write} href="http://127.0.0.1:7862/">
          <Row justify="center">
            <img src={text} style={{ marginTop: "30px" }} />
          </Row>
        </Button>
      </div>
      <Row justify="end">
        <Button
          style={{
            backgroundColor: "#FFD840",
            border: "2pt solid #001348",
            justifyContent: "center",
            alignItems: "center",
          }}
          href="/history"
        >
          Acessar Histórico
        </Button>
      </Row>
    </div>
  );
};

export default Gravacao;
