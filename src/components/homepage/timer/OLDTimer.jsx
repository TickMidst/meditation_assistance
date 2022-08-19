import React, { createRef } from 'react'
import sound from './../../../assets/sounds/sound.mp3'
import Button from '../Button/Button'
import Display from '../Display/Display'
import TimeInput from '../TimeInput/TimeInput'
import Modal from '../Modal/Modal'
import {setNewSessionsHistoryAC, setNewTimeLeftAC, timerIsOnAC, pauseMusicAC, setAllTimeRecordingAC} from './../../../store/store'
import s from './Timer.module.css'

    class TimerWrapper extends React.Component {
         constructor(props) {
          super(props)
          this.startTimer = this.startTimer.bind(this)
          this.stopTimer = this.stopTimer.bind(this)         
          this.stopSave = this.stopSave.bind(this)         
          this.stopNoSave = this.stopNoSave.bind(this)         
          this.openModal = this.openModal.bind(this)         
          this.pauseTimer = this.pauseTimer.bind(this)         
          this.resumeTimer = this.resumeTimer.bind(this)
          this.startPauseResume = this.startPauseResume.bind(this)
          this.state = {timerIsOn: false, modalActive: false, timerIsPaused: false, extraTime: 0}
          }

        timer = null
        extraTimer = null
        notif = React.createRef()
        forStory = null;
        

        nowDate = new Date();
        year = this.nowDate.getFullYear();
        month = this.nowDate.getMonth() + 1;
        day = this.nowDate.getDate();
        lateDate = this.day + '.' + this.month + '.' + this.year 

        startTimer (timeLeft) {
            const dispatch = this.props.dispatch
            dispatch(timerIsOnAC(true))
            clearInterval(this.timer)
            this.setState({timerIsOn: true})
            this.forStory = timeLeft;

            let extraTimerStarter = () =>{
                this.extraTimer = setInterval(() => {
                let addedTime = this.state.extraTime + 1;
                this.setState({extraTime: addedTime})
                }, 1000)}
            

            this.timer = setInterval(() => {
                let timeLeft = this.props.timeLeft - 1;
                if (timeLeft === 0) {
                                this.notif.current.play();
                                extraTimerStarter()
                                clearInterval(this.timer);
                } 
                dispatch(setNewTimeLeftAC(timeLeft))}, 1000) 
} 
                                
        stopNoSave () {
            this.stopTimer()
            this.props.dispatch(timerIsOnAC(false))
            this.props.dispatch(pauseMusicAC(true))
        }

        stopSave () {
            let forRecord = (this.forStory - this.props.timeLeft) + this.state.extraTime
            this.props.dispatch(setNewSessionsHistoryAC(forRecord, this.lateDate))
            this.props.dispatch(setAllTimeRecordingAC(forRecord))
            this.stopTimer()
            this.props.dispatch(timerIsOnAC(false))
            alert('История сохранена!')
            
        }

        openModal () {
            if (this.state.timerIsOn === true || this.state.timerIsPaused === true) {
                clearInterval(this.timer)
                clearInterval(this.extraTimer)
                this.timer = null
                this.extraTimer = null
            this.setState({modalActive: true}) } else {
                alert('Таймер не включён') }
        }

        stopTimer () {
            this.props.dispatch(setNewTimeLeftAC(null))
            clearInterval(this.timer) 
            clearInterval(this.extraTimer) 
            this.timer = null
            this.extraTimer = null
            this.setState({extraTime: 0})
        }

        pauseTimer () {
            clearInterval(this.timer) 
            this.timer = null
        }

        resumeTimer () {
            this.startTimer(this.props.timeLeft)
        }

        startPauseResume (time) {
            if (this.props.timeLeft == null) {
                if (time <= 0) {
                    return alert('Введите положительное число')}
                this.props.dispatch(setNewTimeLeftAC(time))
                this.startTimer(time)
                this.setState({timerIsOn: true})
            } else {
                if (this.state.timerIsOn == true) {
                    this.pauseTimer(this.props.timeLeft)
                    this.setState({timerIsOn: false})
                    this.setState({timerIsPaused: true})}
                else {
                    this.resumeTimer(this.props.timeLeft)
                    this.setState({timerIsOn: true})
                    this.setState({timerIsPaused: false})
                }
            }
        }

    render() {
         return   <div className={s.timer}>
                         <h2 className={s.title}>Timer</h2>
            <Button className={s.timeButton} time='0.1'
                        startTimer={this.startTimer}
                        timer={this.timer}
                        dispatch={this.props.dispatch}
                        setNewTimeLeftAC={setNewTimeLeftAC}/>
            <Button className={s.timeButton} time='1'
                        startTimer={this.startTimer}
                        timer={this.timer}
                        dispatch={this.props.dispatch}
                        setNewTimeLeftAC={setNewTimeLeftAC}/>
            <Button className={s.timeButton} time='10' 
                        startTimer={this.startTimer}
                        timer={this.timer}
                        dispatch={this.props.dispatch}
                        setNewTimeLeftAC={setNewTimeLeftAC}/>
            <Button className={s.timeButton} time='15' 
                        startTimer={this.startTimer}
                        timer={this.timer} 
                        dispatch={this.props.dispatch}
                        setNewTimeLeftAC={setNewTimeLeftAC}/>
            <TimeInput className={s.timeInput}
                        timer={this.timer} 
                        openModal={this.openModal}
                        startPauseResume={this.startPauseResume}
                        timeLeft={this.props.timeLeft}
                        timerIsOn={this.state.timerIsOn}
                        />
            <Display className={s.Display} timeLeft={this.props.timeLeft} extraTime={this.state.extraTime}/>
            <audio ref={this.notif} preload='auto' src={sound}> </audio>


            <Modal modalActive={this.state.modalActive} setState={this.setState.bind(this)} stopSave={this.stopSave} stopNoSave={this.stopNoSave} />    
                       </div> }
                }  

export default TimerWrapper;