import { createStore } from "redux";
import Infinitely from './../assets/sounds/infinitely.mp3'
import Spatium from './../assets/sounds/Spatium.mp3'
import green_tea from './../assets/sounds/green-tea.mp3'

const initialState = {
    autoplayIsOn: false,
    rawSongNames: [Infinitely, green_tea, Spatium ],
    currentSong: Infinitely,
    songIndex: 0,
    isPlaying: false,
}

const TURN_AUTOPLAY_ON_OFF_AC = 'TURN_AUTOPLAY_ON_OFF_AC'
const CHOOSE_CURRENT_SONG_AC = 'CHOOSE_CURRENT_SONG_AC'
const CHOOSE_SONG_INDEX_AC = 'CHOOSE_SONG_INDEX_AC'
const SET_IS_PLAYING_AC = 'SET_IS_PLAYING_AC'

const playerReducer = (state = initialState, action) => {
    switch (action.type) {  
        case TURN_AUTOPLAY_ON_OFF_AC:
        return {...state, autoplayIsOn: action.autoplayIsOn}

        case CHOOSE_CURRENT_SONG_AC:
        return {...state, currentSong: action.song}

        case CHOOSE_SONG_INDEX_AC:
        return {...state, songIndex: action.songIndex}

        case SET_IS_PLAYING_AC:
        return {...state, isPlaying: action.isPlaying}
    }
    return state;
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

export const chooseSongIndexAC = (songIndex) => {
    return {
        type: CHOOSE_SONG_INDEX_AC,
        songIndex: songIndex
    }
}

export const setIsPlayingAC = (isPlaying) => {
    return {
        type: SET_IS_PLAYING_AC,
        isPlaying: isPlaying
    }
}


const store = createStore(playerReducer)

export default store