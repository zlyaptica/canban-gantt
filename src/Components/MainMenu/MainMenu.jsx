import classes from './MainMenu.module.css'
import {NavLink} from "react-router-dom";
const MainMenu = () => {
  return (
      <div>
        <div className={classes.wrapper}>
            <div className={classes.main}>
                <h1 className={classes.description}>
                    Используйте ToDOList для управления своими проектами с использованием досок Канбан и диаграмм Ганта. Общайтесь с коллегами во внутрипроектном чате.
                </h1>
                <h1 className={classes.linkToSignIn}>
                    <NavLink to={'/signin'}>Начать пользоваться</NavLink>
                </h1>
            </div>
        </div>

      </div>
  )
}

export {MainMenu}