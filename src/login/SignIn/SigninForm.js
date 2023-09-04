
import classes from "./Signin.module.css";
import {Field} from "redux-form";
import {Input} from "../../Components/Common/FormsControls/FormsControls";
import {maxLength, minLength, required} from "../../utils/validators/validators";

const minLengthPassword8 = minLength(8)
const maxLengthPassword30 = maxLength(30)

const SignInForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input className={classes.input} name="email" type="text" placeholder="Почта" />
            <input className={classes.input} name="password" type="password" placeholder="Пароль"/>
            <input name="rememberMe" type="checkbox" component={Input}/> Запомнить меня <br></br>
            <button className={classes.signInButton}>Войти</button>
        </form>
    )
}

export {SignInForm}