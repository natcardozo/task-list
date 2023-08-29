import { useState } from "react";
import { ITask } from "../types/ITask";

import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  const selectTask = (selectedTask: ITask) => {
    setSelected(selectedTask)
    setTasks(currentTasks => currentTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  const finishTask = () => {
    if(selected) {
      setSelected(undefined)
      setTasks(currentTasks => currentTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            finished: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List 
        tasks={tasks} 
        selectTask={selectTask} 
      />
      <Stopwatch 
        selected={selected} 
        finishTask={finishTask} 
      />
    </div>
  );
}

export default App;
