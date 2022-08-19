import React from "react";
import './StopBtn.css'
import stopBtn from './../../../assets/timer/stop-button.png'

        let StopBtn = function(props) {
               
                return <div>

                <img src={stopBtn} className="btn Stop" onClick={() => props.openModal()}></img>
                </div>      
            }


export default StopBtn