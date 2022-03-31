import {
  addTodo, removeTodo,
} from './functions.js';

const fs = require('fs');

let listBeforeAction;
let desc;
let listAfterAction;

describe('Add Todo functionality Tests', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('dist/index.html');
    listBeforeAction = document.querySelectorAll('#todos-list li');
    desc = document.getElementById('add-todo');
    desc.value = 'Test Description';
  });
  test('Add one new item to the list', () => {
    addTodo();
    listAfterAction = document.querySelectorAll('#todos-list li');
    expect(listAfterAction).toHaveLength((listBeforeAction.length + 1));
  });
  test('Todos is defined', () => {
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
    desc = document.getElementById('add-todo');
    desc.value = 'Test Description';
  });
  beforeEach(() => {
    addTodo();
    listBeforeAction = document.querySelectorAll('#todos-list li');
    removeTodo(1);
  });
  test('Remove one item to the list', () => {
    listAfterAction = document.querySelectorAll('#todos-list li');
    expect(listAfterAction).toHaveLength((listBeforeAction.length - 1));
  });
  test('Remove one item from Local Storage', () => {
    const arr = JSON.parse(localStorage.todos);
    expect(arr).toHaveLength((listBeforeAction.length - 1));
  });
});