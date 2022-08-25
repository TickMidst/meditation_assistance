import React from "react"


function HistoryElement({sessionsHistory}) {
    let historyElement = sessionsHistory.map(
        (el) => {
            if (sessionsHistory.indexOf(el) >= sessionsHistory.length - 3) {
            return (                
                <div className="backing fields historyElements">
                    <div>Длительность: {el.duration}</div>
                    <div>Дата: {el.date}</div>
                </div>
            )}
        })


    return (
        <div className="backing fields historyElems">
                    {(historyElement.length === 0) 
                        ? <h3>Начните медитировать, чтобы получить доступ к статистике</h3>
                        : <div> {historyElement} </div> 
                    }
                </div>
)
}


export default HistoryElement