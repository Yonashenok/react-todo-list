import { useState } from 'react';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import classes from './TodoLogic.module.css';
import GetList from '../hooks/GetList';

const TodosLogic = () => {
  const [todo, setTodo] = useState(GetList());

  const handleAddListItem = (item) => {
    if (!item.title) return;
    setTodo((cur) => [...cur, item]);
  };

  const handleDeleteItem = (id) => {
    setTodo((cur) => cur.filter((item) => item.id !== id));
  };

  const handleEditItem = (id, newData) => {
    setTodo((cur) =>
      cur.map((item) => (item.id === id ? { ...item, title: newData } : item))
    );
  };

  const handleCheckBox = (id) => {
    setTodo((cur) =>
      cur.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className={classes.listContainer}>
      <InputTodo onAddList={handleAddListItem} />
      <TodosList
        items={todo}
        onDeleteItem={handleDeleteItem}
        onEditItem={handleEditItem}
        onChecked={handleCheckBox}
      />
    </div>
  );
};

export default TodosLogic;
