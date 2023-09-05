import classes from './CreateProject.module.css'
const CreateProject = () => {
    return (
        <div>
            <div className={classes.wrapper}>
                Создание нового проекта
                TODO: групповой/одиночный(радио кнопка), если групповой, то выбор друзей, название
            </div>
        </div>
    )
}

export {CreateProject}