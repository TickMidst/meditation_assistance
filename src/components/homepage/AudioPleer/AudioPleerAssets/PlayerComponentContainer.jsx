import { connect } from 'react-redux'
import PlayerComponent from './PlayerComponent'
import {chooseSongIndexAC, chooseCurrentSongAC, setIsPlayingAC, turnAutoPlayOnOffAC} from './../../../../store/store'


const mapStateToProps = (state) => {
    return {
        currentSong: state.currentSong,
        rawSongNames: [...state.rawSongNames],
        songIndex: state.songIndex,
        isPlaying: state.isPlaying,
        autoplayIsOn: state.autoplayIsOn,
        timerIsOn: state.timerIsOn,
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
    }
}

const PlayerComponentContainer = connect(mapStateToProps, mapDispatchToProps)(PlayerComponent)


export default PlayerComponentContainer