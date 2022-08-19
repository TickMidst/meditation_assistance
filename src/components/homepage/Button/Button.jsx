import React, {useState} from "react"
import { useEffect } from "react"
import './Button.css'

let Button = (props) => {

        let buttonHandler = () => {
            let timesecs = props.time
            let time = timesecs * 60
            props.setNewTimeLeft(time)
            props.startTimer(time)
            }
        return <button disabled={false} className='btn timerDigit' onClick={buttonHandler} > {props.time}</button>

}


export default Button