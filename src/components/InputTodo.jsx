import { useState } from 'react';
import PlusIcon from '../assets/PlusIcon';
import classes from './InputTodo.module.css';
/* eslint-disable react/prop-types */

const InputTodo = ({ onAddList }) => {
  const [userData, setUserData] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: crypto.randomUUID(),
      title: userData,
      completed: false,
    };
    onAddList(data);
    setUserData('');
  };
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <input
        type="text"
        value={userData}
        onChange={(e) => setUserData(e.target.value)}
        className={classes.inputTodo}
        placeholder="Add todo..."
      />
      <PlusIcon onClick={handleSubmit} />
    </form>
  );
};

export default InputTodo;
