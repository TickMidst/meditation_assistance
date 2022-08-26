import './AudioPleer.css'
import './../../backing.css'
import React, { useEffect, useRef, useState } from 'react'
import btnPlay from './../../../assets/player/play-button.png'
import btnNext from './../../../assets/player/next-button.png'
import btnPrev from './../../../assets/player/back-button.png'
import btnPause from './../../../assets/player/pause-button.png'
import btnStop from './../../../assets/player/stop-button.png'
import btnReload from './../../../assets/player/reload.png'


let AudioPleer = (props) => {
    useEffect(() => {
        document.title = 'Медитация'
    })

    useEffect(() => {
        if (props.timerIsOn === true && props.autoplayIsOn === true) {
            audioP.current.play();
        } else {
            audioP.current.pause();
        }
    }, [props.timerIsOn]);

    useEffect(() => {
        audioP.current.addEventListener('timeupdate', updateProgress)
    });
    useEffect(() => {
        audioP.current.addEventListener('loadeddata', updateProgress)
    });

    useEffect(() => {
        audioP.current.addEventListener('loadeddata', getFullDuration)
    });

    useEffect(() => {
        prgrsCont.current.addEventListener('click', setProgress)
    });

    let [currentTime, setCurrentTime] = useState('0:00')
    let [fullDuration, setFullDuration] = useState('0:00')
    let [chosenSong, setChosenSong] = useState(null)

    let audioP = useRef()
    let btn = useRef()
    let prgrs = useRef()
    let prgrsCont = useRef()

    let playMusic = () => {
        props.setIsPlaying(true)
        audioP.current.play()
    }

    let pauseMusic = () => {
        props.setIsPlaying(false)
        audioP.current.pause()
    }

    let stopMusic = () => {
        props.setIsPlaying(false)
        audioP.current.pause()
        audioP.current.currentTime = 0
    }

    let restartMusic = () => {
        props.setIsPlaying(true)
        audioP.current.pause()
        audioP.current.currentTime = 0
        audioP.current.play()
    }

    function playPause() {
        if (!props.isPlaying) {
            playMusic()
            return
        } 
        pauseMusic()   
    }

    const propersSongNames = props.rawSongNames.map((el) => {
        let final = el.match(/[\s\S]+media\/([^\.]+)\.[0-9a-zA-Z\ ]+\.mp3/)
        let s = final[1]
        return s
    })

    let prevSong = function () {
        if (props.songIndex > 0) {        

            let a = props.songIndex
            props.increaseIndex(a - 1)
            props.chooseSong(props.rawSongNames[a - 1])
            stopMusic()
            return
        }
        return false
    }

    let nextSong = function () {
        
        if (props.songIndex < 2) {
            let a = props.songIndex
            props.increaseIndex(a + 1)
            props.chooseSong(props.rawSongNames[a + 1])
            stopMusic()
            return
        }
        
        return false
    }

    let autoplay = () => {
        if (props.autoplayIsOn) {
            props.turnAutoPlayOnOff(false)
        } else {
            props.turnAutoPlayOnOff(true)
        }
    }

    // поменяй название reskinTime
    function reskinTime(secs) {
        var hr = Math.floor(secs / 3600);
        var min = Math.floor((secs - (hr * 3600)) / 60);
        var sec = Math.floor(secs - (hr * 3600) - (min * 60));
        if (sec < 10) {
            sec = "0" + sec;
        }
        return min + ':' + sec;
    }

    // получает полную длительность
    function getFullDuration(e) {
        let durationRaw = e.target.duration
        let duration = reskinTime(durationRaw);
        setFullDuration(duration)
    }

    // обновляет текущую позицию (время)
    function updateProgress(e) {
        const { duration, currentTime } = e.target
        const progressPercent = (currentTime / duration) * 100
        prgrs.current.style.width = `${progressPercent}%`
        let carrTime = reskinTime(audioP.current.currentTime.toString());
        setCurrentTime(carrTime)
    }

    // установить позицию на прогрессбаре
    function setProgress(e) {
        const width = this.clientWidth
        const clickX = e.offsetX
        const duration = audioP.current.duration;
        audioP.current.currentTime = (clickX / width) * duration
    }

    return (<div className='backing pleerWrapper'>
        <div className='titleAndSwitcherWrapper'>
            <h4 className='title'>Плеер</h4>
        </div>
        <div>
            <h3 className='songName'>{propersSongNames[props.songIndex]}</h3>
        </div>
        <div className='buttons PrevNext'>
            <img src={btnPrev} className='btn Prev' onClick={prevSong}></img>
            <img src={btnNext} className='btn Next' onClick={nextSong}></img>
        </div>

        <audio ref={audioP} src={props.currentSong} preload loop></audio>


        <div className='timeAndProgress'>
            <div className='timeInfoWrapper'>
                <div className="time current">{currentTime}</div>
                <div className="time duration">{fullDuration}</div>
            </div>
            <div ref={prgrsCont} className='progressContainer'>
                <div ref={prgrs} className='progress' /* style={{width: 60 + '%'}} */></div>
            </div>
        </div>
        <div className='buttons PSR'>
            <img src={props.isPlaying ? btnPause : btnPlay} className='btn Play' ref={btn} onClick={playPause}></img>
            <img src={btnStop} className='btn Stop' onClick={stopMusic}></img>
            <img src={btnReload} className='btn Restart' onClick={restartMusic}></img>
        </div>

        <div className='autoplaySwitch'> <h3 className={props.autoplayIsOn ? 'switcherText on' : 'switcherText off'} onClick={autoplay}>Автопроигрывание</h3>

        </div>

    </div>)
}


export default AudioPleer