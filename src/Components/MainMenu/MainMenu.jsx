import classes from './MainMenu.module.css'
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {Popup} from "../Common/Popup/Popup";
import {SignIn} from "../Login/SignIn/Signin";
import {SignUp} from "../Login/SignUp/SignUp";

const MainMenu = () => {
    const [popupSigninActive, setPopupSigninActive] = useState(false)
    const [popupSignUpActive, setPopupSignUpActive] = useState(false)
    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.main}>
                    <h1 className={classes.description}>
                        Используйте ToDOList для управления своими проектами с использованием досок Канбан и диаграмм
                        Ганта. Общайтесь с коллегами во внутрипроектном чате.
                    </h1>
                    <h1 className={classes.linkToSignIn}>
                        <button className={classes.linkToSignIn} onClick={() => setPopupSigninActive(true)}>Начать пользоваться</button>
                    </h1>
                </div>
            </div>
            <Popup active={popupSigninActive} setActive={setPopupSigninActive}>
                <SignIn popupSignUpActive={popupSignUpActive} setPopupSignUpActive={setPopupSignUpActive} setPopupSigninActive={setPopupSigninActive}/>
            </Popup>
            <Popup active={popupSignUpActive} setActive={setPopupSignUpActive}>
                <SignUp/>
            </Popup>
        </div>
    )
}

export {MainMenu}