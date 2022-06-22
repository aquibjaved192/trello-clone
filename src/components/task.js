import React, { useState, memo } from 'react';
import style from '../App.module.scss';

function Task({ task, cardId, Index, editTask }) {
  const [ showEditTaskInput, setShowEditTaskInput ] = useState(false);
  const [taskText, setTaskText] = useState(task?.taskName);

  const handleTaskText = () => {
    if(taskText) {
      editTask({...task, taskName: taskText}, cardId, Index);
      setShowEditTaskInput(false);
    }
  }

  const handleDeleteTask = () => {
    editTask(null, cardId, Index);
  }

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("task", JSON.stringify({...task, Index}));
  }

  return(
    <div 
      className={style.task} 
      draggable 
      onDragStart={(e => handleDragStart(e, task))}
    >
      {showEditTaskInput ? 
        <input 
          type='text'
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
          autoFocus
          className={style.inputTask}
          onBlur={handleTaskText}
        /> : 
        <p className={style.taskName} data-testid="taskName">
          {task?.taskName}
        </p>
      }
      <div>
        <button data-testid="editTask" className={style.taskBtn} onClick={() => setShowEditTaskInput(true)}>&#9998;</button>
        <button data-testid="deleteTask" className={`${style.taskBtn} ${style.close}`} onClick={handleDeleteTask}>&#10060;</button>
      </div>
    </div>
  )
}

export default memo(Task);