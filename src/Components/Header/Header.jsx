import {NavLink} from "react-router-dom";
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.wrapper}>
                <NavLink to={"/"}>На главную страницу(иконка проекта)</NavLink>
                <NavLink to={"/profile"}>В профиль(иконка челика)</NavLink>
                <NavLink to={"/signin"}>Войти/регистрация</NavLink>
            </div>
        </header>
    )
}

export {Header}