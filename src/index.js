import './style.css';
import {
  addTodo, displayTodos, getData, getIsEditing, saveEdit, clearCompleted,
} from './functions.js';

window.onload = () => {
  getData();
  displayTodos();
};

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => {
  window.location.reload();
});

const desc = document.querySelector('#add-todo');
desc.addEventListener('keyup', (event) => {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    if (!getIsEditing())addTodo();
    else saveEdit();
  }
});

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
  clearCompleted();
});
