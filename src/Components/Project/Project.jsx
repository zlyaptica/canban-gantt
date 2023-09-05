import classes from './Project.module.css'
import {SwitchType} from "./SwitchType/SwitchType";
import {GanttCharts} from "./GanttCharts/GanttCharts";
import {CanbanBoard} from "./CanbanBoard/CanbanBoard";
import {useState} from "react";

const Project = () => {
    const [type, setType] = useState("Gantt")

    const changeType = (type) => {
        setType(type.target.defaultValue)
    }
    return (
        <div className={classes.project}>
            <div className={classes.wrapper}>
                <div className={classes.SwitchType}>
                    <div className={classes.formToggle}>
                        <div className={classes.formToggleItem + ' ' + classes.itemFirst}>
                            <input id="fid-1" type="radio" name="radio" value="Gantt"
                                   checked={type === "Gantt"} onChange={changeType}/>
                            <label htmlFor="fid-1">Диаграмма Ганта</label>
                        </div>
                        <div className={classes.formToggleItem + ' ' + classes.itemSecond}>
                            <input id="fid-2" type="radio" name="radio" value="Canban"
                                   checked={type === "Canban"} onChange={changeType}/>
                            <label htmlFor="fid-2">Доска Канбан</label>
                        </div>
                    </div>
                </div>
                <div className={classes.area}>
                    {type === "Gantt" ? <GanttCharts/> : <CanbanBoard/>}
                </div>
            </div>
        </div>
    )
}

export {Project}