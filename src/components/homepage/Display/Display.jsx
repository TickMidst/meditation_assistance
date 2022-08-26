import React, { useEffect, useRef } from 'react' 
import { useState } from 'react'
import './Display.css'

        let Display = (props) => {

            useEffect (() => {
            
                if (props.timeLeft === 0) {
                    setIsTimeLeftOrExtraTime(true)
                } else {
                    setIsTimeLeftOrExtraTime(false)
                }
            })
            
            let [isTimeLeftOrExtraTime, setIsTimeLeftOrExtraTime] = useState(false)


            let toMinAndSecs = function(digit) {
                
                        let rawHours = Math.floor(digit/60/60)
                        let rawMins = Math.floor(digit/60) - (rawHours*60);
                        let rawSecs = digit % 60
                        if (rawSecs === 0) {
                            rawSecs = '00'
                        }
                        if (rawHours === 0) {
                            rawHours = ''
                        }
                        let rawDigit = rawHours + ' ' + rawMins + ' ' + rawSecs;
                        
                        return rawDigit
                    } 


                if (props.timeLeft === null) {
                    return <div className='display'> 
                    <div className='timerText'>
                    <h1>Введите время</h1>
                    </div>
                    </div>
                }
                return <div className='display'> 
                <div className='timerText'>
                <h1>Осталось времени:</h1> 
                </div>
                {(isTimeLeftOrExtraTime) 
                ? <div className='timeLeft'><h2>+{toMinAndSecs(props.extraTime)}</h2> </div>   
                : <div className='timeLeft'><h2> {toMinAndSecs(props.timeLeft)} </h2> </div>
                } 
                </div>
            
        }

export default Display