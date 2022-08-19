import { connect } from 'react-redux'
import HistoryPage from './HistoryPage'


const mapStateToProps = (state) => {
    return {
        sessionsHistory: [...state.sessionsHistory],
        allTimeRecording: state.allTimeRecording,
        
    }
}

const HistoryPageContainer = connect(mapStateToProps)(HistoryPage)



export default HistoryPageContainer;