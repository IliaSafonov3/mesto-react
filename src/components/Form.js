import React from "react"
import {Link} from "react-router-dom"



function Form(props) {
    const[emailValue,setEmailValue]= React.useState('')
    const [passwordValue, setPasswordValue] = React.useState('');

    function handleChangeEmail(e) {
        setEmailValue(e.target.value)
    }
    function handleChangePassword(e) {
        setPasswordValue(e.target.value)
    }
    return(
        <form className="form"> 
            <h2 className ='form__title'>{props.title}</h2>
                <div className='form__inputs'>
                    <input placeholder='Email' value={emailValue} onChange={handleChangeEmail} className='form__input'></input>
                    <input placeholder='Пароль' value={passwordValue} onChange={handleChangePassword} className='form__input'></input>
                </div>
                <button >{props.buttonTitle}</button>
           { props.isLoged && <p className='form__link'>Уже зарегестрированны? <Link className='form__link' to='/sign-in'>Войти</Link></p>}
        </form>

    )
}

export default Form