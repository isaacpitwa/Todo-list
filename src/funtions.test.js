import {
  addTodo,
} from './functions.js';


describe('Todo functionality Tests', () => {
  test('Add one new item to the list', () => {
    const listBeforeAdd = document.querySelectorAll('#todos-list li');
    const desc = document.querySelector('#add-todo');
    desc.value = 'Test Description';
    addTodo();
    const listAfterAdd = document.querySelectorAll('#todos-list li');
    expect(listAfterAdd).toHaveLength((listBeforeAdd.length + 1));
  });
});