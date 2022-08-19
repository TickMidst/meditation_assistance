import './TestCalendar.css'
import './../../backing.css'

let TestCalendar = (props) => {
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();

    let createCalendar = (selectedMonth, currentYear) => {

        let isMore = (selectedMonth) => {
            if (selectedMonth > 12) {
                return true
            } else {
                return false
            }
        }

        let monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
        let dayOfWeekArr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

        let year = currentYear

        let dayOfWeekEls = dayOfWeekArr.map((e) => {
            return <div className='dayOfWeek'>{e}</div>
        })

        const numberOfDays = (y, m) => new Date(y, m, 0).getDate();
        let numberOfDaysNew = numberOfDays(currentYear, isMore(selectedMonth) ? 1 : selectedMonth) // возвращает 31, как в январе 2022
        let CalElements = [] // 31 клетка

        for (let i = 1; i <= numberOfDaysNew; i++) {
            CalElements.push({day: i, month: selectedMonth, year: currentYear})
        }

        // делалась ли медитация в определённый день.
        let filterObj = (e) => {
            return props.sessionsHistory.some(function (obj) {
                let year = e.year
                let month = e.month;
                let day = e.day
                let lateDate = day + '.' + month + '.' + year
                return (obj.date === lateDate)
            })
        }

        const getDayOfWeek = (selectedMonth) => {
            let date = new Date(currentYear, selectedMonth);
            let dayOfWeek = date.getDay();
            return dayOfWeek; // цифра 6
        }

        let blankFirstDays = getDayOfWeek(isMore(selectedMonth) ? 0 : selectedMonth - 1)

        let monthName = monthNames[isMore(selectedMonth) ? 0 : selectedMonth - 1]

        for (let i = 1; i < blankFirstDays; i++) {
            CalElements.unshift('') // добавляет 5 пустых клеток
        }

        let elements = CalElements.map((e) => {
            return <div className={filterObj(e) ? 'el active' : 'el'}> {e.day}</div>
        })

        let oneMonth = <div>
           
            <h2>{monthName}</h2>
            <div className='one_Month'>
                {dayOfWeekEls}
                {elements}
            </div>
        </div>
        return oneMonth
    }

    // проверяет прошлый год
    let checkLastYear = (prevM) => {
        if (prevM < 1) {
            return true
        } else {
            return false
        }
    }
    let prevM = currentMonth - 1

    // проверяет следующий год
    let checkNextYear = (nextM) => {
        if (nextM > 12) {
            return true
        } else {
            return false
        }
    }
    let nextM = currentMonth + 1

    let prevMonth = createCalendar(checkLastYear(prevM) ? 12 : prevM, checkLastYear(prevM) ? currentYear - 1 : currentYear)
    let ongoingMonth = createCalendar(currentMonth, currentYear)
    let nextMonth = createCalendar(nextM, checkNextYear(nextM) ? currentYear + 1 : currentYear)

    return (
        <div>
            <div className='calendar_Header'>
                <h1>КАЛЕНДАЛЬ</h1>
            </div>
            <div className='calendar_container'>
                <div className='one_Month_container'>
                    {prevMonth}
                </div>

                <div className='one_Month_container'>
                    {ongoingMonth}
                </div>

                <div className='one_Month_container'>
                    {nextMonth}
                </div>
            </div>
        </div>
    )
}

export default TestCalendar