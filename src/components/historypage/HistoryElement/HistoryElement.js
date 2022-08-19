import React from "react"


function HistoryElement({sessionsHistory}) {
    let historyElement = sessionsHistory.map(
        (el) => {
            return (
                <div className="backing fields">
                    <div>Длительность: {el.duration}</div>
                    <div>Дата: {el.date}</div>
                </div>
            )
        })

    return (
        <div className="backing fields">
                    {historyElement === true
                        ? <div> {historyElement} </div>
                        : <h2>Вы ещё не медитировали</h2>
                    }
                </div>
)
}


export default HistoryElement