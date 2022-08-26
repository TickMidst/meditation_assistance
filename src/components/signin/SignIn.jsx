import './SignIn.css'

export let SignInPage = () => {
    return <div className='signUpContainer'>
        <div className='signUpTitleCont'>
        <h1>Страница входа</h1>
        </div>

        <div className='signUpInputCont'>
        <input type='text' placeholder='Логин'></input>
        <input type='email' placeholder='Адрес почты'></input>
        <input type='text' placeholder='Пароль'></input>

    
        <button>Войти</button>

        </div>
    </div>
}



