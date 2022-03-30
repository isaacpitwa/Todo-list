import {
  addTodo, displayTodos, getData, getIsEditing, saveEdit, clearCompleted,
} from './functions.js';

describe('Add function', () => {
  test('returns', () => {
    expect().toBe();
  });
});

describe('Remove function', () => {
  test('Add one new item to the list', () => {
    document.body.innerHTML = `
      <div>
       <ul id="list"></li>
        </div>`;
    addTodo();
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });
});