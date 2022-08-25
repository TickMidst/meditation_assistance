import React, {useRef, useState} from 'react'
import sound from './../../../assets/sounds/sound.mp3'
import Button from '../Button/Button'
import Display from '../Display/Display'
import TimeInput from '../TimeInput/TimeInput'
import Modal from '../Modal/Modal'
import './Timer.css'
import './../../backing.css'
import {setNewTimeLeftAC} from "../../../store/store";

let TestNewTimer = (props) => {
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState(0);

    let timer
  
    const handleClick = () => {
      if (timer) {
        clearInterval(timer);
        timer = 0;
        return;
      }
  
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    };
  
    return (
      <div>
        <h1>The component has been rendered for {count} seconds</h1>
        <button onClick={handleClick}>
          {intervalId ? "Stop counting" : "Start counting"}
        </button>
      </div>
    );
}

export default TestNewTimer;