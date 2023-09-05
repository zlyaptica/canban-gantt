import classes from './UserProjects.module.css'
import {NavLink} from "react-router-dom";
import {CreateProject} from "../Project/CreateProject/CreateProject";
import {useState} from "react";
const UserProjects = () => {

    return (
        <div>
            <div className={classes.wrapper}>

                <NavLink to={'/create_project'}>Новый проект</NavLink>

                <h2>МОИ ПРОЕКТЫ</h2>

                <NavLink to={'/project'}>Проект1</NavLink>
            </div>
        </div>
    )
}

export {UserProjects}