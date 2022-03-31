import {
  addTodo, removeTodo, editTodo,
} from './functions.js';

import saveEdit from './__mocks__/editTodo.js';
import toggleTodoStatus from './__mocks__/toggleTodosStatus.js';

const fs = require('fs');

// const saveEdit = jest.fn();

let listBeforeAction;
let desc;
let listAfterAction;

describe('Add Todo functionality Tests', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('dist/index.html');
    listBeforeAction = document.querySelectorAll('#todos-list li');
    desc = document.getElementById('add-todo');
    desc.value = 'Test Description';
    addTodo();
  });
  test('Add one new item to the list (View)', () => {
    listAfterAction = document.querySelectorAll('#todos-list li');
    expect(listAfterAction).toHaveLength((listBeforeAction.length + 1));
  });
  test('Storage Todos is defined', () => {
    expect(localStorage.todos).toBeDefined();
  });
  test('Storage Todos  is not null', () => {
    expect(localStorage.todos).not.toBeNull();
  });
  test('Add one new item into Local Storage', () => {
    const arr = JSON.parse(localStorage.todos);
    expect(arr.length).toBe((listBeforeAction.length + 1));
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
  test('Remove one item to the list (View)', () => {
    listAfterAction = document.querySelectorAll('#todos-list li');
    expect(listAfterAction).toHaveLength((listBeforeAction.length - 1));
  });
  test('Remove one item from Local Storage', () => {
    const arr = JSON.parse(localStorage.todos);
    expect(arr).toHaveLength((listBeforeAction.length - 1));
  });
});

describe('Edit task description functionality Tests', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('dist/index.html');
    desc = document.getElementById('add-todo');
    desc.value = 'Test Description';
    addTodo();
    const arr = JSON.parse(localStorage.todos);
    editTodo(arr[0]);
  });
  afterAll(() => {
    removeTodo(1);
  });
  test('Description is not null', () => {
    expect(localStorage.todos[0].description).not.toBeNull();
  });
  test('Check description value before change in Local Storage', () => {
    const arr = JSON.parse(localStorage.todos);
    expect(arr[0].description).toEqual('Test Description');
  });
  test('Check description value after change in Local Storage', () => {
    saveEdit();
    const arr = JSON.parse(localStorage.todos);
    expect(arr[0].description).toEqual('Change test');
  });
});

describe('Update item status functionality Tests', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('dist/index.html');
    desc = document.getElementById('add-todo');
    desc.value = 'Status Test';
    addTodo();
  });
  test('Status is not null', () => {
    expect(localStorage.todos[0].completed).not.toBeNull();
  });
  test('Check status value before change in Local Storage', () => {
    const arr = JSON.parse(localStorage.todos);
    expect(arr[0].completed).toBe(false);
  });
  test('Check status value after change in Local Storage', () => {
    const arr = JSON.parse(localStorage.todos);
    toggleTodoStatus(arr[0]);
    const arr2 = JSON.parse(localStorage.todos);
    expect(arr2[0].completed).toBe(true);
  });
});