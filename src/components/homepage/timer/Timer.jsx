import React, {useRef, useState} from 'react'
import sound from './../../../assets/sounds/sound.mp3'
import Button from '../Button/Button'
import Display from '../Display/Display'
import TimeInput from '../TimeInput/TimeInput'
import Modal from '../Modal/Modal'
import './Timer.css'
import './../../backing.css'
import {setNewTimeLeftAC} from "../../../store/store";

let TimerWrapper = (props) => {

    let [timerIsOn, setTimerIsOn] = useState(false)
    let [modalActive, setModalActive] = useState(false)
    let [timerIsPaused, setTimerIsPaused] = useState(false)
    let [extraTime, setExtraTime] = useState(0)
    let [timerInterval, setTimerInterval] = useState(null)

    let extraTimer
    let notif = useRef()
    let forStory = null;


    let nowDate = new Date();
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth() + 1;
    let day = nowDate.getDate();
    let lateDate = day + '.' + month + '.' + year



    let timer


    let startTimer = (timeLeft) => {
        if (!timer) {
            props.setNewTimeLeft(timeLeft)
            setTimerIsOn(true)
            forStory = timeLeft;
            let decreasingTimeLeft = timeLeft
            timer = setInterval(() => {
                decreasingTimeLeft = decreasingTimeLeft - 1;
                // if (decreasingTimeLeft === 0) {
                //     notif.current.play();
                //      extraTimerStarter()
                //     clearInterval(timer);
                //  }
                props.setNewTimeLeft(decreasingTimeLeft)
            }, 1000)
        }  else {timer = clearInterval(timer)}
        }

    let copy = (timeLeft) => {
        if (!timer) {
            props.setNewTimeLeft(timeLeft)
            setTimerIsOn(true)
            forStory = timeLeft;
            let decreasingTimeLeft = timeLeft
            timer = setInterval(() => {
                decreasingTimeLeft = decreasingTimeLeft - 1;
                // if (decreasingTimeLeft === 0) {
                //     notif.current.play();
                //      extraTimerStarter()
                //     clearInterval(timer);
                //  }
                props.setNewTimeLeft(decreasingTimeLeft)
            }, 1000)
        }  else {timer = clearInterval(timer)
        }
    }

    let decreasingTimeLeft

    let chann = () => {
        console.log(decreasingTimeLeft)
}

    let preChann = (timeLeft) => {
        props.setNewTimeLeft(timeLeft)
        setTimerIsOn(true)
        forStory = timeLeft;
        decreasingTimeLeft = timeLeft
    }


    function showAlert (){
        timer = setInterval(chann, 1000)
    }

    function disableAlert(){
        clearInterval(timer)
        setTimerIsOn(false)
    }


    let stopNoSave = () => {
        stopTimer()
        props.timerIsOn(false)
        props.pauseMusic(true)
    }

    let stopSave = () => {
        let forRecord = (forStory - props.timeLeft) + extraTime
        props.setNewSessionsHistory(forRecord, lateDate)
        props.setAllTimeRecording(forRecord)
        stopTimer()
        props.timerIsOn(false)
        alert('История сохранена!')

    }

    let openModal = () => {
        if (timerIsOn === true || timerIsPaused === true) {
            setTimerInterval(null)
            clearInterval(extraTimer)
            extraTimer = null
            setModalActive(true)
        } else {
            alert('Таймер не включён')
        }
    }

    let stopTimer = () => {
        props.setNewTimeLeft(null)
        clearInterval(timer)
        clearInterval(extraTimer)
        extraTimer = null
        setExtraTime(0)
    }

    let pauseTimer = () => {
        clearInterval(timer)
        timer=setInterval(()=>{console.log('s')}, 1000)
    }

    let resumeTimer = () => {
        startTimer(props.timeLeft)
    }

    let startPauseResume = (time) => {
        if (props.timeLeft === null) {
            if (time <= 0) {
                return alert('Введите положительное число')
            }
            props.setNewTimeLeft(time)
            startTimer(time)
            setTimerIsOn(true)
        } else {
            if (timerIsOn === true) {
                pauseTimer(props.timeLeft)
                setTimerIsOn(false)
                setTimerIsPaused(true)
            } else {
                resumeTimer(props.timeLeft)
                setTimerIsOn(true)
                setTimerIsPaused(false)
            }
        }
    }

    return <div className='timerWrapper'>

        <div className='backing timerDisplayAndButtons'>
            <div>
                <Display timeLeft={props.timeLeft} extraTime={extraTime}/>
            </div>

            <button onClick={()=> {
                preChann(10)
                showAlert()
            }}>Включить</button>
            <button onClick={disableAlert}>Выключить</button>
            <div className='buttons'>
                <Button time='1'
                        isDisabled={timerIsOn}
                        startTimer={startTimer}
                        timer={timer}
                        setNewTimeLeft={props.setNewTimeLeft}/>
                <Button time='10'
                        startTimer={startTimer}
                        timer={timer}
                        isDisabled={timerIsOn}
                        setNewTimeLeft={props.setNewTimeLeft}/>
                <Button time='15'
                        startTimer={startTimer}
                        timer={timer}
                        isDisabled={timerIsOn}
                        setNewTimeLeft={props.setNewTimeLeft}/>
            </div>
        </div>


        <div className='timeInputComponent'>
            <TimeInput
                timer={timer}
                isDisabled={timerIsOn}
                startPauseResume={startPauseResume}
                timeLeft={props.timeLeft}
                timerIsOn={timerIsOn}
                openModal={openModal}
            />
        </div>

        <div className='modalWindowComponent'>
            <Modal modalActive={modalActive} setModalActive={setModalActive} stopSave={stopSave}
                   stopNoSave={stopNoSave}/>

        </div>
        <audio ref={notif} preload='auto' src={sound}></audio>
    </div>
}

export default TimerWrapper;