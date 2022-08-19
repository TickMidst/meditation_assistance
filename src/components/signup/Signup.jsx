import './Signup.css'

export let SignUpPage = () => {
    return <div className='signUpContainer'>
        <div className='signUpTitleCont'>
        <h1>Страница регистрации</h1>
        </div>

        <div className='signUpInputCont'>
        <input type='text' placeholder='Имя'></input>
        <input type='text' placeholder='Фамилия'></input>
        <input type='email' placeholder='Адрес почты'></input>
        <input type='text' placeholder='Пароль'></input>

    
        <button>Регистрация</button>

        </div>
    </div>
}



