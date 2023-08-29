import { useState } from "react";
import { ITask } from "../../types/ITask"
import { v4 as uuidv4 } from "uuid";

import Button from "../Button"
import style from "./Form.module.scss";


const Form = ({ setTasks }: { setTasks: React.Dispatch<React.SetStateAction<ITask[]>> }) => {
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00:00")

    const adicionarTarefa = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newTask = { 
            task, 
            time,
            selected: false,
            finished: false,
            id: uuidv4(),
        }

        setTasks(currentTasks => [...currentTasks, newTask])
        setTask("")
        setTime("00:00:00")
    }

    return (
        <form className={style.novaTarefa} onSubmit={(e) => adicionarTarefa(e)}>
            <div className={style.inputContainer}>
                <label htmlFor="task">
                    New task
                </label>
                <input 
                    type="text" 
                    name="task" 
                    id="task" 
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">
                    Time
                </label>
                <input 
                    type="time" 
                    name="time" 
                    id="time" 
                    step="1"
                    min="00:00:00"
                    max="01:30:00"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
            </div>
            <Button type="submit">
                Add
            </Button>
        </form>
    )
}

export default Form;
