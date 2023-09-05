import {NavLink} from "react-router-dom";
import classes from './Header.module.css'
import logo from './img/ToDoList.svg'
import profileIco from './img/ProfileIco.svg'
import {useState} from "react";

import {SignIn} from "../Login/SignIn/Signin";
const Header = (props) => {

    return (
        <header className={classes.header}>
            <div className={classes.wrapper}>
                <div className={classes.info}>
                    <NavLink to={"/"} className={classes.navLink}>
                        <img src={logo} alt="logo" className={classes.logo}/>
                    </NavLink>
                    {props.isAuthenticatedUser
                        ? <NavLink to={"/profile"} className={classes.navLink}>
                            <img src={profileIco} alt="profile ico" className={classes.profileIco}/>
                        </NavLink >
                        : <NavLink to={"/signin"} className={classes.navLink} >Войти</NavLink>
                    }


                </div>
            </div>
        </header>
    )
}

export {Header}