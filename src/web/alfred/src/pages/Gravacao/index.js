import React, { useState } from 'react';

import styles from './styles.module.css';
import microphone from '../../images/microphone.png';
import text from '../../images/text.png';
import search from '../../images/search.png';
import { Button, Modal, Space } from 'antd';

const Gravacao = () => {

  const [ thermsModalVisible, setThermsModalVisible ] = useState(true);

  return (
    <div className={styles.container}>
        <div className={styles.search_container}>
          <p>O que você procura?</p>
          <img className={styles.search_button} src={search} />
        </div>
        <div className={styles.buttons_container}>
          <button className={styles.record}>
            <img src={microphone} />
          </button>
          <button className={styles.write}>
            <img src={text} />
          </button>
        </div>
        <div className={styles.next_container}>
          <button className={styles.next}>
            {">"}
          </button>
        </div>
    </div>
  )
}

export default Gravacao;
