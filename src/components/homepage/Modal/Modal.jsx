import React from "react";
import './Modal.css'

        let Modal = function({modalActive, setModalActive, stopSave, stopNoSave}) {      
                let save = () => {
                        stopSave()
                        setModalActive(false)
                }

                let noSave = () => {
                        stopNoSave()
                        setModalActive(false)
                }
                
                return <div className={modalActive ? 'Modal active' : 'Modal'} onClick={() => {setModalActive(false)}}> 
                <div className='Modal__content' onClick={e => e.stopPropagation()}>
                        <h2>Сохранить результат?</h2>
                        <input type='button' name='saveOrNot' value='Да' onClick={save}/>
                        <input type='button' name='saveOrNot' value='Нет' onClick={noSave}/>
                </div>
                </div>      
            }


export default Modal