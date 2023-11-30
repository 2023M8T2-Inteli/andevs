// Tutorial.js
import React, { useState } from 'react';
import { Button, Typography } from 'antd';
import TutorialPage from '../components/TutorialPage/TutorialPage';

const { Title, Paragraph } = Typography;

const Tutorial = () => {
  const steps = [
    { waveColor: '#FFD700', imageUrl: 'url_da_sua_imagem_1', text: 'Texto da etapa 1' },
    { waveColor: '#00CED1', imageUrl: 'url_da_sua_imagem_2', text: 'Texto da etapa 2' },
    // Adicione mais etapas conforme necessário
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Se for a última etapa, pode navegar para a próxima rota ou fazer o que for necessário
      console.log('Final do tutorial');
    }
  };

  return (
    <div>
      {/* Você pode adicionar um cabeçalho aqui, se necessário */}
      <TutorialPage steps={steps} currentStep={currentStep} handleNext={handleNext} />
    </div>
  );
};

export default Tutorial;
