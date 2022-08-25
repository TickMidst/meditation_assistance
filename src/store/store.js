import { createStore } from "redux";
import Infinitely from './../assets/sounds/infinitely.mp3'
import Spatium from './../assets/sounds/Spatium.mp3'
import green_tea from './../assets/sounds/green-tea.mp3'

const initialState = {
    timeLeft: null,
    sessionsHistory: [],
    allTimeRecording: 0,
    autoplayIsOn: false,
    rawSongNames: [Infinitely, Spatium, green_tea],
    currentSong: Infinitely,
    songIndex: 0,
    timerIsOn: false,
    isPlaying: false,
    pauseMusic: false
}

const SET_NEW_TIMELEFT_AC = 'SET_NEW_TIMELEFT_AC'
const SET_NEW_SESSIONS_HISTORY_AC = 'SET_NEW_SESSIONS_HISTORY_AC'
const TURN_AUTOPLAY_ON_OFF_AC = 'TURN_AUTOPLAY_ON_OFF_AC'
const CHOOSE_CURRENT_SONG_AC = 'CHOOSE_CURRENT_SONG_AC'
const CHOOSE_SONG_INDEX_AC = 'CHOOSE_SONG_INDEX_AC'
const SET_IS_PLAYING_AC = 'SET_IS_PLAYING_AC'
const TIMER_IS_ON_AC = 'TIMER_IS_ON_AC'
const PAUSE_MUSIC_AC = 'PAUSE_MUSIC_AC'
const SET_ALL_TIME_RECORDING_AC = 'SET_ALL_TIME_RECORDING_AC'

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_SESSIONS_HISTORY_AC: 
        return {...state, sessionsHistory: [...state.sessionsHistory, action.newRecord]}

        case SET_NEW_TIMELEFT_AC:
        return {...state, timeLeft: action.timeLeft}
        
        case TURN_AUTOPLAY_ON_OFF_AC:
        return {...state, autoplayIsOn: action.autoplayIsOn}

        case CHOOSE_CURRENT_SONG_AC:
        return {...state, currentSong: action.currentSong}

        case CHOOSE_SONG_INDEX_AC:
        return {...state, songIndex: action.songIndex}
    
        case SET_IS_PLAYING_AC:
        return {...state, isPlaying: action.isPlaying}

        case TIMER_IS_ON_AC:
        return {...state, timerIsOn: action.timerIsOn}
    
        case PAUSE_MUSIC_AC:
        return {...state, pauseMusic: action.pauseMusic}
    
        case SET_ALL_TIME_RECORDING_AC:
        return {...state, allTimeRecording: state.allTimeRecording + action.newRecord}
    

    }
    return state;
} 

export const setNewTimeLeftAC = (newTimeLeft) => {
    return {
        type: SET_NEW_TIMELEFT_AC,
        timeLeft: newTimeLeft
    }
}

export const chooseSongIndexAC = (newSongIndex) => {
    return {
        type: CHOOSE_SONG_INDEX_AC,
        songIndex: newSongIndex
    }
}

 
export const setNewSessionsHistoryAC = (newDuration, newDate) => {
    return {
        type: SET_NEW_SESSIONS_HISTORY_AC,
        newRecord: {duration: newDuration, date: newDate}
    }
}


export const turnAutoPlayOnOffAC = (autoplayStatus) => {
    return {
        type: TURN_AUTOPLAY_ON_OFF_AC,
        autoplayIsOn: autoplayStatus
    }
}

export const chooseCurrentSongAC = (song) => {
    return {
        type: CHOOSE_CURRENT_SONG_AC,
        currentSong: song
    }
}

export const setIsPlayingAC = (isPlaying) => {
    return {
        type: SET_IS_PLAYING_AC,
        isPlaying: isPlaying
    }
}

export const pauseMusicAC = (pause) => {
    return {
        type: PAUSE_MUSIC_AC,
        pauseMusic: pause
    }
}

export const timerIsOnAC = (timer) => {
    return {
        type: TIMER_IS_ON_AC,
        timerIsOn: timer
    }
}

export const setAllTimeRecordingAC = (record) => {
    return {
        type: SET_ALL_TIME_RECORDING_AC,
        newRecord: record
    }
}


const store = createStore(timerReducer)

export default store