import {
  saveData, getTodos, setTodos,
} from '../functions.js';

const toggleTodoStatus = (todot) => {
  const todos = getTodos().map((todo_) => {
    if (todo_.index === todot.index) {
      return { ...todot, completed: !todo_.completed };
    }
    return todo_;
  });
  setTodos(todos);
  saveData();
};

export default toggleTodoStatus;