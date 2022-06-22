import React, { useState, memo } from 'react';
import style from '../App.module.scss';

function CreateTask({ parentId, editCard }) {
  const [taskName, setTaskName] = useState('');

  const handleTask = (e) => {
    e.preventDefault();
    const task = {
      parentId,
      id: Date.now(),
      taskName,
    }
    editCard(task, parentId, 'addTask');
    setTaskName('');
  }

  return(
    <form onSubmit={handleTask}>
      <input 
        type='text'
        placeholder='Add Task'
        className={style.inputTask}
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
        data-testid="taskInput"
      />
      <button data-testid="addTask" className={style.addTask} type="submit">+</button>
    </form>
  )
}

export default memo(CreateTask);