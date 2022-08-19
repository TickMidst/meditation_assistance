import React from "react";
import './StartPauseBtn.css'
import StartBtn from './../../../assets/timer/play-button.png'
import PauseBtn from './../../../assets/timer/pause-button.png'

let StartPauseBtn = function (props) {

    let clickHandler = () => {
        let timesecs = props.addedTime; // c props.inputWindow.current.value могут быть проблемы
        let time = timesecs * 60
        props.startPauseResume(time)
        props.setAddedTime('')
    }

    return <div> <img className="btn PauseStart" src={props.timerIsOn
        ? PauseBtn
        : StartBtn
    }
    onClick={clickHandler}></img>

    </div>
}


export default StartPauseBtn