import React, { useState } from "react";
import { Button, Steps, Row, Col, Image, Space, Card } from "antd";
import { AudioOutlined, FormOutlined, CheckOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import style from "./tutorial.module.css";
import microphone from "../images/microphone.png";
import text from "../images/text.png";
import check from "../images/check.png";

const Tutorial = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      waveColor: "#FFD700",
      image: <Image src={microphone} preview='false' width={80} />,
      description: "Clique no ícone do microfone e pressione até terminar de falar.",
    },
    {
      waveColor: "#00CED1",
      image: <Image src={text} preview='false' width={100} />,
      description: "Clique no ícone de texto e digite a peça desejada.",
    },
    {
      waveColor: "#00CED1",
      image: <Image src={check} preview='false' width={100} />,
      description: "Se estiver tudo correto, selecione o check para a confirmação.",
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/record");
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className={style.container}>

      <Steps current={currentStep} responsive={false} style={{ padding: 30 }}>
        {steps.map((step, index) => (
          <Steps.Step key={index} />
        ))}
      </Steps>

      <Row justify='center'>
        <div className={style.circle} style={{ borderColor: steps[currentStep].waveColor }} >
          {steps[currentStep].image}
        </div>
      </Row>
      <div style={{ padding: 24 }}>
        <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
          <h4 style={{ fontFamily: 'Poppins', fontWeight: 400 }}>{steps[currentStep].description}</h4>
        </Card>
      </div>
      <Row justify='end' style={{ justifyContent: 'space-evenly' }}>
        <Space size={10}>
          <Col>
            <Button type="default" onClick={handlePrev} disabled={currentStep === 0}>
              Voltar
            </Button>
          </Col>
          <Col>
            <Button type="primary" onClick={handleNext}>
              {currentStep === steps.length - 1 ? "Finalizar" : "Próximo"}
            </Button>
          </Col>
        </Space>
      </Row>
    </div>
  );
};

export default Tutorial;
