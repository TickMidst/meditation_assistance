import logo from './../../assets/images/logo.png'
import  './Header.css'
import { NavLink } from 'react-router-dom';
import HamburgerButton from './burgerMenu/HamburgerButton'

const Header = () => {

    return <header className='header'>

    <div className='headerHeader'>
      <div className='logoEl'>
      <NavLink to='/homepage/' ><img className='logoImg' src={logo}  /></NavLink>
      </div>

    <HamburgerButton />


      <div className='headerElements'>
      <div className='itemSU'>
        <NavLink to='/signup/'>Регистрация</NavLink>
        </div>
        <div className='itemSU'>
        <NavLink to='/homepage/' >Главная страница</NavLink>
        </div>

        <div className='itemSU'>
        <NavLink to='/historypage/' >Личный кабинет</NavLink>
        </div>
        </div>
        </div>

      </header> 
}


export default Header;