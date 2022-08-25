import logo from './../../assets/images/logo.png'
import  './Header.css'
import { NavLink } from 'react-router-dom';
import {useState} from "react";

const Header = () => {

  let [popupStatus, setPopupStatus] = useState('burgerPopUp')
  let [hamb__fieldStatus, setHamb__fieldStatus] = useState('hamb__field')

  let hambDivHandler =() => {
    switch (popupStatus) {
      case 'burgerPopUp':
        setPopupStatus('burgerPopUp open')
        setHamb__fieldStatus('hamb__field active')
        break;
      case 'burgerPopUp open':
        setPopupStatus('burgerPopUp')
        setHamb__fieldStatus('hamb__field')
    }
  }


    return <div>
      <nav className='header'>
        <div className='burgerContainer'>
          <div className='burgerNavbar__wrap'>
            <div className='hamb' onClick={hambDivHandler}>
              <div className={hamb__fieldStatus}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
              </div>
            </div>
            <NavLink to='/homepage/' ><img className='logoImg' src={logo}  /></NavLink>
            <ul className='burgerMenu' >
              <li><NavLink to='/signup/'>Регистрация</NavLink></li>
              <li><NavLink to='/homepage/' >Главная страница</NavLink></li>
              <li><NavLink to='/historypage/' >Личный кабинет</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={popupStatus}><ul className='burgerMenu' id='burgerMenu'>
        <li onClick={hambDivHandler}><NavLink to='/signup/'>Регистрация</NavLink></li>
        <li onClick={hambDivHandler}><NavLink to='/homepage/' >Главная страница</NavLink></li>
        <li onClick={hambDivHandler}><NavLink to='/historypage/' >Личный кабинет</NavLink></li>
      </ul></div>

  {/*<header className='header'>*/}
  {/*  <div className='headerHeader'>*/}
  {/*    <div className='logoEl'>*/}
  {/*    <NavLink to='/homepage/' ><img className='logoImg' src={logo}  /></NavLink>*/}
  {/*    </div>*/}
  {/*    <div className='headerElements'>*/}
  {/*    <div className='itemSU'>*/}
  {/*      <NavLink to='/signup/'>Регистрация</NavLink>*/}
  {/*      </div>*/}
  {/*      <div className='itemSU'>*/}
  {/*      <NavLink to='/homepage/' >Главная страница</NavLink>*/}
  {/*      </div>*/}

  {/*      <div className='itemSU'>*/}
  {/*      <NavLink to='/historypage/' >Личный кабинет</NavLink>*/}
  {/*      </div>*/}
  {/*      </div>*/}
  {/*      </div>*/}

  {/*    </header>*/}
    </div>
}


export default Header;