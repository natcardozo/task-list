import { ITask } from "../../../types/ITask";
import style from "./Item.module.scss";

interface ItemProps extends ITask {
    selectTask: (selectedTask: ITask) => void 
}

const Item = ({task, time, selected, finished, id, selectTask}: ItemProps) => {
    return (
        <li 
            className={`${style.item} ${selected ? style.itemSelecionado : ""} ${finished ? style.itemCompletado : ""}`} 
            onClick={() => !finished && selectTask({
                task,
                time,
                selected,
                finished,
                id
            })}
        >
            <h3>{task}</h3>
            <span>{time}</span>
            {finished && <span className={style.concluido} aria-label="finished task"></span>}
        </li>
    )
}

export default Item;
