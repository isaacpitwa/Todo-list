import {
  addTodo, removeTodo, editTodo,
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
    const descAfter = 'Change test';
    addTodo();
    const arr = JSON.parse(localStorage.todos);
    editTodo(arr[0]);
  });
  beforeEach(() => {
    addTodo();
    listBeforeAction = document.querySelectorAll('#todos-list li');
    removeTodo(1);
  });
  test('Check description value in Local Storage', () => {
    const arr = JSON.parse(localStorage.todos);
    expect(arr[0].description).toEqual('Test Description');
  });
  

});