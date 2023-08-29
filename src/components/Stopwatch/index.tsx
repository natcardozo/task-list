import { useEffect, useState } from "react";

import Button from "../Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss";

import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/ITask";

interface StopwatchProps {
    selected: ITask | undefined
    finishTask: () => void
}

const Stopwatch = ({ selected, finishTask }: StopwatchProps) => {
    const [time, setTime] = useState<number>();

    const countdown = (count: number = 0) => {
        setTimeout(() => {
            if(count > 0) {
                setTime(count - 1)
                return countdown(count - 1)
            } else {
                finishTask()
            }
        }, 1000)
    }

    useEffect(() => {
        if(selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Choose a card and start the stopwatch</p>
            <div className={style.relogioWrapper}>
                <Watch time={time} />
            </div>
            <Button onClick={() => countdown(time)}>
                Start
            </Button>
        </div>
    )
}

export default Stopwatch;
