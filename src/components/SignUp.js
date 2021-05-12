import React from 'react'
import Header from './Header'
import Form from './Form'

function SignUp() {
    return (
        <>
            <Header link='/sign-in' linkText='Войти'/>

            <Form title='Регистрация' buttonTitle='Зарегистрироваться'  linkText='Войти' />
        </>
    )
}
export default SignUp