import React, { memo } from 'react';
import Task from './task';
import CreateTask from './createTask';
import Label from './label';
import style from '../App.module.scss';

function Card({ data, length, editCard, editTask, deleteCard, handleDrop}){

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  return(
    <div 
      className={style.card} 
      onDragOver={(e) => handleDragOver(e)} 
      onDrop={e => handleDrop(e, data)}
      data-testid="card-container"
    >
      <Label
        name={data?.name}
        id={data?.id}
        editCard={editCard}
      />
      {data?.tasks?.map((item, index) => 
        <Task 
          key={item?.id}
          task={item}
          cardId={data?.id}
          Index={index}
          editTask={editTask}
        />
      )}
      <CreateTask 
        parentId={data?.id}
        editCard={editCard}
      />
      <div>
        <button 
          disabled={!!!length || length <= 1} 
          className={style.delete} 
          onClick={() => deleteCard(data?.id)}
          data-testid="deleteCard"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default memo(Card);