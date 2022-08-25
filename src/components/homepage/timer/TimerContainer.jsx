import React from 'react'
import { connect } from 'react-redux'
import TestNewTimer from './Timer'
import {chooseSongIndexAC, chooseCurrentSongAC, timerIsOnAC, setNewTimeLeftAC, pauseMusicAC, setNewSessionsHistoryAC, setAllTimeRecordingAC} from './../../../store/store'

const mapStateToProps = (state) => {
    return {
        timeLeft: state.timeLeft,
        sessionsHistory: [...state.sessionsHistory],
        currentSong: state.currentSong,
        rawSongNames: [...state.rawSongNames],
        songIndex: state.songIndex,
        autoplayIsOn: state.autoplayIsOn,
        allTimeRecording: state.allTimeRecording
    }
}


    const mapDispatchToProps = (dispatch) => {
    return {
        increaseIndex: (index) => {
            dispatch(chooseSongIndexAC(index))
        },

        chooseSong: (newSongIndex) => {
            dispatch(chooseCurrentSongAC(newSongIndex))
        },

        timerIsOn: (timer) => {
            dispatch(timerIsOnAC(timer))
        },
        
        setNewTimeLeft: (newTimeLeft) => {
            dispatch(setNewTimeLeftAC(newTimeLeft))
        },

        pauseMusic: (pause) => {
            dispatch(pauseMusicAC(pause))
        },

        setNewSessionsHistory: (newDuration, newDate) => {
            dispatch(setNewSessionsHistoryAC(newDuration, newDate))
        },

        setAllTimeRecording: (record) => {
            dispatch(setAllTimeRecordingAC(record))
        },
    }
}




const TimerContainer = connect(mapStateToProps, mapDispatchToProps)(TestNewTimer)



export default TimerContainer;