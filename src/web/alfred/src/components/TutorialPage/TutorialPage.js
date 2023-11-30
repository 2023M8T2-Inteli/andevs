// TutorialPage.js
import React, { Fragment } from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const TutorialPage = ({ steps, currentStep, handleNext }) => {
  const { waveColor, imageUrl, text } = steps[currentStep];

  return (
    <Fragment>
      <svg width="100%" height="80%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="51%" x2="100%" y2="49%">
            <stop offset="5%" stop-color="#fcb900"></stop>
            <stop offset="95%" stop-color="#ffffe0"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,700 C 0,700 0,350 0,350 C 117.77033492822966,361.5406698564593 235.54066985645932,373.0813397129187 330,355 C 424.4593301435407,336.9186602870813 495.6076555023923,289.2153110047846 593,305 C 690.3923444976077,320.7846889952154 814.0287081339713,400.05741626794264 915,401 C 1015.9712918660287,401.94258373205736 1094.2775119617224,324.555023923445 1178,303 C 1261.7224880382776,281.444976076555 1350.8612440191387,315.7224880382775 1440,350 C 1440,350 1440,700 1440,700 Z"
          stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 350)"
        ></path>
      </svg>

      <div style={{ textAlign: 'center', padding: '50px', position: 'relative', zIndex: 2, height: '50vh' }}>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }} lg={{ span: 12, offset: 6 }}>
            {/* Imagem acima do fundo */}
            <img src={imageUrl} alt="Imagem" style={{ maxWidth: '100%', position: 'absolute', top: '-50px', left: 0, right: 0, margin: 'auto' }} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Title level={2}>Tutorial</Title>
            <Paragraph>{text}</Paragraph>
            <Button type="primary" shape="circle" icon={<PlayCircleOutlined />} size="large" onClick={handleNext} />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default TutorialPage;
