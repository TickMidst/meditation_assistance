import React, {useState} from "react";
import StartPauseBtn from "./StartPauseBtn";
import StopBtn from "./StopBtn";
import './TimeInput.css'

let TimeInput = function (props) {
    let [addedTime, setAddedTime] = useState('')

    let clickHandler = () => {
        let timesecs = addedTime;
        let time = timesecs * 60
        props.startPauseResume(time)
        setAddedTime('')
    }

    let onKeyUpHandler = (event) => {
        if (event.keyCode === 13) {
            clickHandler()
        }
    }

    return <div className="backing timeInputWrapper">
        <div>
            <input 
            className="timeInput"
            disabled={props.isDisabled}
            type='number' 
            onKeyUp={onKeyUpHandler} 
            onChange={(e) => {
                setAddedTime(e.target.value)}
            }
            min='1'
            placeholder='Введите цифру'></input>
        </div>

    <div className="buttons backing startStop">
        <div>
            <StartPauseBtn
                startPauseResume={props.startPauseResume}
                timerIsOn={props.timerIsOn}
                addedTime={addedTime}
                setAddedTime={setAddedTime}
            />
        </div>

        <div>
            <StopBtn
                openModal={props.openModal}
            />
        </div>
        </div>

    </div>
}


export default TimeInput