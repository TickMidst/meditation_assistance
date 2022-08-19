/*  import { createStore } from "redux";

const initialState = {
    timeLeft: null,
    sessionsHistory: [],
}

const SET_NEW_TIMELEFT_AC = 'SET_NEW_TIMELEFT_AC'
const SET_NEW_SESSIONS_HISTORY_AC = 'SET_NEW_SESSIONS_HISTORY_AC'

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_SESSIONS_HISTORY_AC: 
        return {...state, sessionsHistory: [...state.sessionsHistory, action.newRecord]}

        case SET_NEW_TIMELEFT_AC:
        return {...state, timeLeft: action.timeLeft}

        case CHOOSE_SONG_INDEX_AC:
        return {...state, songIndex: action.songIndex}

    }
    return state;
} 

export const setNewTimeLeftAC = (newTimeLeft) => {
    return {
        type: SET_NEW_TIMELEFT_AC,
        timeLeft: newTimeLeft
    }
}

 
export const setNewSessionsHistoryAC = (newDuration, newDate) => {
    return {
        type: SET_NEW_SESSIONS_HISTORY_AC,
        newRecord: {duration: newDuration, date: newDate}
    }
}


export const chooseSongIndexAC = (songIndex) => {
    return {
        type: CHOOSE_SONG_INDEX_AC,
        songIndex: songIndex
    }
}


const store = createStore(timerReducer)

export default store */