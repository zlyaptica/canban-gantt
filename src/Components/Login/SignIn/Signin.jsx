import React from 'react'
import classes from './Signin.module.css'
//import {NavLink, useHistory} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import {reduxForm} from 'redux-form'
import {SignInForm} from './SigninForm'
import {Popup} from "../../Common/Popup/Popup";
import {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {Input} from "../../Common/FormsControls/FormsControls";
//import {Login} from '../../redux/authReducer'

const SignIn = (props) => {

    const signIn = () => {
        console.log("signed in")
    }
    const popupHandle = () => {
        props.setPopupSigninActive(false)
        props.setPopupSignUpActive(true)
    }
    return (
        <div className={classes.signIn}>
                <div className={classes.wrapper}>
                    <div className={classes.header}>Войти</div>
                    <form onSubmit={signIn}>
                        <input className={classes.input} name="email" type="text" placeholder="Почта"/>
                        <input className={classes.input} name="password" type="password" placeholder="Пароль"/>
                        <input name="rememberMe" type="checkbox" component={Input}/> Запомнить меня <br></br>
                        <button className={classes.signInButton}>Войти</button>
                    </form>
                    <p>или</p>
                    <button className={classes.toSignUp} onClick={() => popupHandle()}>Зарегистрироваться</button>
                </div>
        </div>
    )
}

const SignInReduxForm = reduxForm({form: 'signIn'})(SignInForm)

export {SignIn}