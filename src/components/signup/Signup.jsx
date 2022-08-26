import './Signup.css'

export let SignUpPage = () => {
    return <div className='signUpContainer'>
        <div className='signUpTitleCont'>
        <h1>Страница регистрации</h1>
        </div>

        <div className='signUpInputCont'>
        <input type='text' placeholder='Логин'></input>
        <input type='email' placeholder='Адрес почты'></input>
        <input type='text' placeholder='Пароль'></input>
        <input type='text' placeholder='Повторите пароль'></input>

    
        <button>Регистрация</button>

        </div>
    </div>
}



