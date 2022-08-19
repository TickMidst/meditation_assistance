import { connect } from 'react-redux'
import Calendar from './Calendar'
import {chooseSongIndexAC, chooseCurrentSongAC} from './../../../store/store'


const mapStateToProps = (state) => {
    return {
        sessionsHistory: [...state.sessionsHistory],
        currentSong: state.currentSong,
        rawSongNames: [...state.rawSongNames],
        songIndex: state.songIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseIndex: (index) => {
            dispatch(chooseSongIndexAC(index))
        },

        chooseSong: (newSongIndex) => {
            dispatch(chooseCurrentSongAC(newSongIndex))
        }
    }
}

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar)


export default CalendarContainer