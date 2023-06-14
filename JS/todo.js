const todoForm = document.querySelector("#todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("#todo-list")

const TODOS_KEY = "todos"
let todos = [];

function todoDel (event) {
  const delli = event.target.parentElement;
  renewedTodos = localStorage.getItem(TODOS_KEY)
  parsedTodos = JSON.parse(renewedTodos);
  newTododata = parsedTodos.filter((todo) => todo.id !== parseInt(delli.id));
  localStorage.setItem(TODOS_KEY, JSON.stringify(newTododata))
  delli.remove();
}

function saveTodo () {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function paintTodo (newTodo) {
  const li = document.createElement("li"); // this is a tag of li
  li.id = newTodo.id;
  const span = document.createElement("span");
  const delButton = document.createElement("button")
  delButton.innerText = "Del";
  li.appendChild(span); // attach under of li tag. not to whole HTML
  li.appendChild(delButton);
  span.innerText = newTodo.content;
  todoList.appendChild(li);
  delButton.addEventListener("click", todoDel)
}

function handletodoSubmit (event) {
  event.preventDefault();
  const newTodo = todoInput.value; // newTodo is not blank
  todoInput.value = "";
  const newTodoObj = {
    content : newTodo,
    id : Date.now(),
  }
  todos.push(newTodoObj);
  saveTodo();
  paintTodo(newTodoObj);
}


todoForm.addEventListener("submit", handletodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY)

if (savedTodos === null) {
  handletodoSubmit();
} else {
  const parsedTodos = JSON.parse(savedTodos)
  todos = parsedTodos;
  parsedTodos.forEach((item) => paintTodo(item)); // this is same with forEach(paintTod);
}