import {
  getTodos, setTodos, displayTodos, saveData, setIsEditing, getEditTodo, setEditTodo,
} from '../functions.js';

const saveEdit = () => {
  const desc = document.querySelector('#add-todo');
  if (desc.value) {
    const todos = getTodos().map((todo) => {
      if (todo.index === getEditTodo().index) {
        return { ...todo, description: 'Change test' };
      } return todo;
    });
    setTodos(todos);
    displayTodos();
    saveData();
    desc.value = null;
    setIsEditing(false);
    setEditTodo(null);
  }
};

export default saveEdit;