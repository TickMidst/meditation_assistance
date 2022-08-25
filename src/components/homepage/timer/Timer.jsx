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
    let [extraTimerID, setExtraTimerID] = useState(0)
    let [timerIntervalID, setTimerIntervalID] = useState(0)
    let [forStory, setForStory] = useState(null)

    let extraTimer
    let notif = useRef()
    


    let nowDate = new Date();
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth() + 1;
    let day = nowDate.getDate();
    let lateDate = day + '.' + month + '.' + year




    let extraTimerStarter =()=> {
        const newExtraTimerID = setInterval(() => {
                setExtraTime(extraTime++)
                console.log(extraTime)
                
        }, 1000)

        setExtraTimerID(newExtraTimerID)
    }


    let startTimer = (timeLeft) => {
        if (!timerIntervalID) {
            
            props.setNewTimeLeft(timeLeft)
            setTimerIsOn(true)
            setForStory(timeLeft)
            let decreasingTimeLeft = timeLeft
            const newTimerID = setInterval(() => {
                decreasingTimeLeft = decreasingTimeLeft - 1;
                if (decreasingTimeLeft === 0) {
                    props.setNewTimeLeft(decreasingTimeLeft)
                    notif.current.play();
                    extraTimerStarter()
                clearInterval(newTimerID)
                setTimerIntervalID(0)
                }
                props.setNewTimeLeft(decreasingTimeLeft)
            }, 1000)

            setTimerIntervalID(newTimerID);
            return
        }
        
        clearInterval(timerIntervalID)
        setTimerIntervalID(0)

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
    }

    let openModal = () => {
        if (timerIsOn === true || timerIsPaused === true) {
            clearInterval(timerIntervalID)
            setTimerIntervalID(0)

            clearInterval(extraTimerID)
            setExtraTimerID(0)
    
            setModalActive(true)
        } else {
            alert('Таймер не включён')
        }
    }

    let stopTimer = () => {
        props.setNewTimeLeft(null)

        clearInterval(timerIntervalID)
        setTimerIntervalID(0)

        clearInterval(extraTimerID)
        setExtraTimerID(0)
    }

    let pauseTimer = () => {
        clearInterval(timerIntervalID)
        setTimerIntervalID(0)

        clearInterval(extraTimerID)
        setExtraTimerID(0)
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

            <div className='buttons'>
                <Button time='1'
                        isDisabled={timerIsOn}
                        startTimer={startTimer}
                        timer={timerIntervalID}
                        setNewTimeLeft={props.setNewTimeLeft}/>
                <Button time='10'
                        startTimer={startTimer}
                        timer={timerIntervalID}
                        isDisabled={timerIsOn}
                        setNewTimeLeft={props.setNewTimeLeft}/>
                <Button time='15'
                        startTimer={startTimer}
                        timer={timerIntervalID}
                        isDisabled={timerIsOn}
                        setNewTimeLeft={props.setNewTimeLeft}/>
            </div>
        </div>


        <div className='timeInputComponent'>
            <TimeInput
                timer={timerIntervalID}
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