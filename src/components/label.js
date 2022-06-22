import React, { useState, memo } from 'react';
import style from '../App.module.scss';

function Label({ name, id, editCard }) {
  const [ showEditLabelInput, setShowEditLabelInput ] = useState(false);
  const [labelText, setLabelText] = useState(name);

  const handleLabelText = () => {
    if(labelText) {
      editCard(labelText, id, 'name');
      setShowEditLabelInput(false);
    }
  };

  const handleDoubleClick = () => {
    setShowEditLabelInput(true);
    setLabelText('');
  }

  return(
    <div className={style.label}>
      {showEditLabelInput ? 
        <input 
          type='text'
          onChange={(e) => setLabelText(e.target.value)}
          value={labelText}
          autoFocus
          className={style.labelInput}
          onBlur={handleLabelText}
          data-testid="label-input"
        /> : 
        <label 
          className={style.editLabel}
          onDoubleClick={handleDoubleClick}
          data-testid="label"
        >
          {name}
        </label>
      }
    </div>
  )
}

export default memo(Label);