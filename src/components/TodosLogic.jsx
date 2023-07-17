import { useState } from 'react';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import classes from './TodoLogic.module.css';
import GetList from './Hook/GetList';

const TodosLogic = () => {
  const [todo, setTodo] = useState(GetList());

  const handleList = (item) => {
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

  return (
    <div className={classes.listContainer}>
      <InputTodo onAddList={handleList} />
      <TodosList
        items={todo}
        onDeleteItem={handleDeleteItem}
        onEditItem={handleEditItem}
      />
    </div>
  );
};

export default TodosLogic;