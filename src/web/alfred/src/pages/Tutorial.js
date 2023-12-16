// Tutorial.js
import React, { useState } from "react";

import mic from "../images/microphone.svg";
import text from "../images/text.svg";
import check from "../images/check.svg";
import wave from "../images/bg-wave.svg";

import style from "./tutorial.module.css";

const Tutorial = () => {
  const steps = [
    {
      waveColor: "#FFD700",
      icon: mic,
      text: "Para gravação, clique no íncone do microfone e pressione até terminar de falar.",
    },
    {
      waveColor: "#00CED1",
      icon: text,
      text: "Para a digitalização, clique no ícone de texto e digite a peça desejada.",
    },
    {
      waveColor: "#00CED1",
      icon: check,
      text: "Quando a informação for processada, selecione o check para a confirmação da informação indicada.",
    },
    // Adicione mais etapas conforme necessário
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Se for a última etapa, pode navegar para a próxima rota ou fazer o que for necessário
      console.log("Final do tutorial");
    }
  };

  return (
    <>
      <div
        className={style.container}
        style={{
          backgroundImage: `url(${wave})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={style.bullets}>
          {[0, 1, 2].map((e) => (
            <span className={currentStep > e ? style.active : ""}></span>
          ))}
        </div>

        <div className={style.circle}>
          <img alt="" src={steps[currentStep].icon} />
        </div>
        <footer>
          <h4>{steps[currentStep].text}</h4>
          <button onClick={handleNext}>Próximo</button>
        </footer>
      </div>
    </>
  );
};

export default Tutorial;
