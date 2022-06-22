import React, { useState, useCallback } from 'react';
import Card from './components/card';
import style from './App.module.scss';

function App() {
  const [cards, setCards] = useState([{id: Date.now() ,name: "Enter Card Name", tasks: []}]);

  const handleSubmit = () => {
    const card = { 
      id: Date.now(),
      name: "Enter Card Name",
      tasks: [],
    }
    setCards((cards) => [...cards, card]);
  }

  const editCard = useCallback((data, id, operation) => {
    const newCards = [...cards]
    newCards.forEach(item => {
      if(item.id === id) {
        if(operation === 'name') {
          item.name = data
        } else if(operation === 'addTask') {
          item.tasks.push(data);
        }
      }
    })
    setCards(newCards);
  },[cards]);

  const editTask = useCallback((data, cardId, taskIndex) => {
    const newCards = [...cards]
    newCards.forEach(item => {
      if(item.id === cardId) {
        if(data === null) {
          item.tasks.splice(taskIndex, 1);
        } else {
          item.tasks.splice(taskIndex, 1, data);
        }
      }
    })
    setCards(newCards);
  },[cards]);

  const deleteCard = useCallback((id) => {
    const oldCards = [...cards];
    const newCards = oldCards.filter(item => item.id !== id);
    setCards(newCards);
  },[cards]);

  const handleDrop = useCallback((e, data) => {
    let task = JSON.parse(e.dataTransfer.getData("task"));
    if(task.parentId !== data.id) {
      let newCards = [...cards];
    
      newCards.forEach((card) => {   
        if (card.id === task.parentId) {    
          let newTasks = Object.assign(card.tasks);           
          newTasks.splice(task.Index, 1);  
          card.tasks = newTasks;              
        } 
        
        if(card.id === data.id) {
          const newTasks = Object.assign(card.tasks);
          const pushTask = { parentId : data.id, id: task.id, taskName: task.taskName }
          newTasks.push(pushTask);
          card.tasks = newTasks;
        }
      });
      
      setCards(newCards)
    }  
  },[cards])

  return (
    <div className={style.App}>
      {cards.map((item) => 
        <Card
          key={item?.id}
          data={item}
          editCard={editCard}
          editTask={editTask}
          deleteCard={deleteCard}
          handleDrop={handleDrop}
          length={cards.length}
        />  
      )}
      <div>
        <button data-testid="addCard" onClick={handleSubmit} className={style.addCard}>+</button>
      </div>
    </div>
  );
}

export default App;
