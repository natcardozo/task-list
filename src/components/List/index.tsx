import { ITask } from "../../types/ITask"

import Item from "./Item";
import style from "./List.module.scss";

interface ListProps {
    tasks: ITask[]
    selectTask: (selectedTask: ITask) => void 
}

const List = ({ tasks, selectTask }: ListProps) => {    
    return (
        <aside className={style.listaTarefas}>
            <h2>Daily tasks</h2>
            <ul>
                {tasks.map((task) => (
                    <Item 
                        key={task.id} 
                        selectTask={selectTask}
                        {...task} 
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;
