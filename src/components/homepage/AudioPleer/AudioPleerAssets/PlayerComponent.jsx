import React from "react"

const PlayerComponent = (props) => {  
    let audioP = React.createRef()
    return <div>
        <audio ref={audioP} src={props.currentSong} preload controls loop></audio>
    </div>
}

export default PlayerComponent