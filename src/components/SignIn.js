import React from 'react'
import Header from './Header'
import Form from './Form'

function Signin() {
    return (
        <>
            <Header link='/sign-up' linkText='Регистрация'/>

            <Form title='Регистрация' buttonTitle='Зарегистрироваться' />
        </>
    )
}
export default Signin