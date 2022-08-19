import React from "react"


function Results (props) {
        let historyElement =props.sessionsHistory.map((el) => {return <div><div>Длительность: {el.duration}</div><div>Дата: {el.date}</div> </div>})
        return <div> 
            {historyElement}
          </div>
        
    
}


export default Results