import { connect } from 'react-redux'
import AudioPleer from './AudioPleer'
import {chooseSongIndexAC, chooseCurrentSongAC, setIsPlayingAC, turnAutoPlayOnOffAC, pauseMusicAC} from './../../../store/store'


const mapStateToProps = (state) => {
    return {
        currentSong: state.currentSong,
        rawSongNames: [...state.rawSongNames],
        songIndex: state.songIndex,
        isPlaying: state.isPlaying,
        autoplayIsOn: state.autoplayIsOn,
        timerIsOn: state.timerIsOn,
        pauseMusic: state.pauseMusic,
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

        setIsPlaying: (isPlaying) => {
            dispatch(setIsPlayingAC(isPlaying))
        },

        turnAutoPlayOnOff: (autoplayStatus) => {
            dispatch(turnAutoPlayOnOffAC(autoplayStatus))
        },

        pauseMusic: (pause) => {
            dispatch(pauseMusicAC(pause))
        },
    }
}

const AudioPleerContainer = connect(mapStateToProps, mapDispatchToProps)(AudioPleer)


export default AudioPleerContainer