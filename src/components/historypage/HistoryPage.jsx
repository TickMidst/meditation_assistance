import React from "react"
import AllTimeRecording from "./AllTimeRecording/AllTimeRecording"
import CalendarContainer from "./calendar/CalendarContainer"
import HighScoreMeditation from "./HighScoreMeditation/HighScoreMeditation"
import HistoryElement from "./HistoryElement/HistoryElement"
import './HistoryPage.css'
import TestCalendarContainer from "./calendar/TestCalendarContainer";

function HistoryPage( {sessionsHistory, allTimeRecording} ) {
        let currentMonth = new Date().getMonth() + 1;
        let currentYear = new Date().getFullYear();


        return (
        <div>

            <div className="infoDate">
            <div className='topPageElement'>
            <HistoryElement sessionsHistory = {sessionsHistory} />
            </div>

                <div className='topPageElement'>
            <HighScoreMeditation sessionsHistory = {sessionsHistory} />
            </div>

                <div className='topPageElement'>
            <AllTimeRecording allTimeRecording = {allTimeRecording} />
            </div>
            </div>

            <div>
            <TestCalendarContainer currentMonth={currentMonth} currentYear={currentYear} />
            </div>
        </div>)
}

export default HistoryPage