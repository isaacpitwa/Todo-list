import './style.css';

const listElement = document.getElementById('todos-list');

const todos = [
  {
    index: 1,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    completed: false,
  },
  {
    index: 2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    completed: false,
  },
  {
    index: 3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    completed: false,
  },
];

window.onload = () => {
  todos.forEach((todo) => {
    const todoHTML = `<li class="todo">
                          <div class="todo-content">
                              <input type="checkbox" name="checkbox"  value=${todo.index}/>
                              <p>${todo.description}</p>
                          </div>
                          <button type="button"><i class="fa fa-ellipsis-v"></i></button>
                        </li>`;
    listElement.insertAdjacentHTML('beforeend', todoHTML);
  });
};
