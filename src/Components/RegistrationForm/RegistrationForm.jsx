import {Field} from "redux-form";
import classes from './RegistrationForm.module.css'
import {Input} from "../Common/FormsControls/FormsControls";


const RegistrationForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h3 className={classes.header}>Вход в аккаунт</h3>
            <p>E-mail</p>
            <input type="text" name="E-mail" />
            <p>Пароль</p>
            <input type="Password" name="Password"/>
            <p></p>
            <button>Войти</button>
        </form>
    )
}

export {RegistrationForm}