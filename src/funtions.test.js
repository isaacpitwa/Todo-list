import {
  addTodo, removeTodo,
} from './functions.js';

const fs = require('fs');

describe('Add Todo functionality Tests', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('dist/index.html');
    const desc = document.getElementById('add-todo');
    desc.value = 'Test Description';
    addTodo();
  });
  test('Add one new item to the list', () => {
    const listAfterAdd = document.querySelectorAll('#todos-list');
    expect(listAfterAdd).toHaveLength(1);
  });
  test('Todos is define', () => {
    expect(localStorage.todos).toBeDefined();
  });
  test('Todos is not null', () => {
    expect(localStorage.todos).not.toBeNull();
  });
  test('Add one new item to the array', () => {
    const arr = localStorage.todos;
    expect(arr.length).toBe(64);
  });
});

describe('Remove Todo functionality Tests', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('dist/index.html');
    const desc = document.getElementById('add-todo');
    desc.value = 'Test Description';
  });
  beforeEach(() => {
    addTodo();
    removeTodo(1);
  });
  test('Remove one item to the list', () => {
    const listAfterAdd = document.querySelectorAll('.todo');
    expect(listAfterAdd).toHaveLength(1);
  });
  test('Remove one item to the array', () => {
    const arr = localStorage.todos;
    expect(arr.length).toBe(2);
  });
});