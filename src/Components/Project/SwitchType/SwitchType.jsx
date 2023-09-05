import classes from './SwitchType.module.css';

const SwitchType = () => {
    return (
        <div className={classes.switchType}>
            <button className={classes.button}>Диаграмма Ганта</button>
            <button className={classes.button}>Доска Канбан</button>
        </div>
    )
}

export {SwitchType}