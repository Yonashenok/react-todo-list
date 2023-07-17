import TrashIcon from '../assets/TrashIcon';
import EditIcon from '../assets/EditIcon';
import classes from './TodoItem.module.css';
import { useState } from 'react';
/* eslint-disable react/prop-types */

const TodoItem = ({ todo, onDeleteItem, onEditItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  let viewMode = {};
  let editMode = {};
  if (isEditing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleStartEditing = () => {
    setIsEditing(true);
  };

  const handleEndEditing = () => {
    setIsEditing(false);
  };
  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  const handleCheckBox = () => {
    setIsComplete((cur) => !cur);
  };

  return (
    <li className={classes.listItem}>
      <input
        type="checkbox"
        name="checkbox"
        className={classes.checkbox}
        onClick={handleCheckBox}
        style={viewMode}
      />

      <div
        className={isComplete ? classes.complete : classes.text}
        style={viewMode}
      >
        {todo.title}
      </div>
      <input
        type="text"
        className={classes.textInput}
        value={todo.title}
        style={editMode}
        onBlur={handleEndEditing}
        onKeyDown={handleUpdatedDone}
        onChange={(e) => onEditItem(todo.id, e.target.value)}
      />
      <EditIcon onClick={handleStartEditing} style={viewMode} />
      <TrashIcon onClick={() => onDeleteItem(todo.id)} style={viewMode} />
    </li>
  );
};

export default TodoItem;
