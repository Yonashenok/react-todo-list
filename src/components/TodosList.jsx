import TodoItem from './TodoItem';
import SetList from './Hook/SetList';
/* eslint-disable react/prop-types */

const TodosList = ({ items, onDeleteItem, onEditItem, onChecked }) => {
  SetList(items);
  return (
    <ul>
      {items.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onDeleteItem={onDeleteItem}
          onEditItem={onEditItem}
          onChecked={onChecked}
        />
      ))}
    </ul>
  );
};

export default TodosList;
