import React from "react";
import './HighScoreMeditation.css'

function HighScoreMeditation(props) {
    // Ваш рекорд медитации
    const regDay = /(\d{1,2})\.[\.0-9]+/

    let toShtoNuzhno = ['18.1.2022', '21.1.2022', '22.1.2022', '25.1.2022', '26.1.2022', '28.1.2022', '29.1.2022', '30.1.2022', '31.1.2022', '32.1.2022', '33.1.2022', '34.1.2022', '35.1.2022', '36.1.2022', '13.1.2022', '14.1.2022', '39.1.2022', '40.1.2022', '41.1.2022', '42.1.2022',]


    let history = props.sessionsHistory.map(e => {return e.date})

    // Возвращает массив в формате [18, 21, 22, 25, 26, 29, 30, 31]
    let testComparisom = history
        .map((e) => {
            let a = e.match(regDay)
            let rawNum = a[1]
            let num = Number(rawNum)
            return num
        })

    // выбирает подходящие элементы, а затем удаляет пустые массивы. Это массив состоящий из массивов подходящих дней
    let newTry = testComparisom
        .map(function (firstDay, index, array) {
            let pushh = [[1]]
            let skipNumber = 0
            index += skipNumber
            for (let m = 1, i = array[index]; !pushh[pushh.length - 1].includes(firstDay) && firstDay === array[index + m] - 1;) {
                let secondDay = array[index + m]
                pushh.push(firstDay)
                pushh.push(secondDay)
                for (let y = 1, nextDays = array[index + y]; nextDays === array[index + y + 1] - 1; y++, nextDays++) {
                    pushh.push(array[index + y + 1])
                    skipNumber = y
                }
                return pushh
            }
        }
        )
        .filter(function (value, index, self) {
            return self.indexOf(value) === index;
        })
        .filter(function (firstDay) {
            return firstDay !== undefined
        })

    const arrLengths = []

    for (let i = 0; i < newTry.length; i++) {
        arrLengths.push(newTry[i].length)
    }

    let theGreatest = 0

    for (let i = 0; i < arrLengths.length; i++) {
        if (arrLengths[i] > theGreatest) {
            theGreatest = arrLengths[i]
        }
    }



    return history.length !== 0 ? <div className="backing fields historyElems">
        <h3>Ваш рекорд медитации:</h3>
        <h2> {theGreatest} дней </h2>
    </div> 
    :
    <div></div>

}




export default HighScoreMeditation