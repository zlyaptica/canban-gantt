
import React from 'react'
import classes from './Signin.module.css'
//import {NavLink, useHistory} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import {reduxForm} from 'redux-form'
import {SignInForm} from './SigninForm'
import {useDispatch, useSelector} from 'react-redux'
import {Input} from "../../Common/FormsControls/FormsControls";
//import {Login} from '../../redux/authReducer'

const SignIn = () => {
//    const dispatch = useDispatch()
//    const history = useHistory()
//    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)


   const signIn = ({email, password, rememberMe}) => {
//       dispatch(Login(email, password, rememberMe))
   console.log("signed in")
    }

//    if (isAuthenticated) {
//        history.push('/')
//    }
    return (
        <div className={classes.signIn}>
            <div className={classes.wrapper}>
                <div className={classes.header}>Войти</div>
                <form onSubmit={signIn}>
                    <input className={classes.input} name="email" type="text" placeholder="Почта" />
                    <input className={classes.input} name="password" type="password" placeholder="Пароль"/>
                    <input name="rememberMe" type="checkbox" component={Input}/> Запомнить меня <br></br>
                    <button className={classes.signInButton}>Войти</button>
                </form>
                <p>или</p>
                <NavLink to="/signup" className={classes.toSignUp}>Зарегистрироваться</NavLink>
            </div>
        </div>
    )
}

const SignInReduxForm = reduxForm({form: 'signIn'})(SignInForm)

export {SignIn}