import React, { useState } from "react";
import TimerContainer from "./timer/TimerContainer";
import AudioPleerContainer from "./AudioPleer/AudioPleerContainer";
import './HomePage.css'
import './../btns.css'

let HomePage = function () {
    let [pleerIsOn, setPleerIsOn] = useState(true)


    return <div className='homePage'>
        <div className="timerComponent">
        <TimerContainer />
        </div>

        <div className="timerElementsWrapper">
        <div className="btn playerOpener">
            <button onClick={() => {
                pleerIsOn
                    ? setPleerIsOn(false)
                    : setPleerIsOn(true)
            }
            }>
                {pleerIsOn
                    ? 'Закрыть плеер'
                    : 'Открыть плеер'
                }
            </button>
        </div>

        <div>
            {pleerIsOn
                ? <div className="TIIMER"> <AudioPleerContainer setPleerIsOn={setPleerIsOn}  /> </div>
                : <div>Плеер закрыт</div>
            }
        </div>

        </div>

    </div>
}



export default HomePage