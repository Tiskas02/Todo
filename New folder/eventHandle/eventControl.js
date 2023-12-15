import { todoListManament } from "../lib/todoManagement.js";
import {
  showTodoItem,
  showNumberOfDone,
  showNumberOfNotDone,
  removeTodoItem,
} from "../UI/todoListUI.js";

const add = document.querySelector("#addTodo > input");
const submit = document.querySelector("#addBtn");
const todoM = todoListManament();

export function addTodoHandler() {
  const description = add.value;
  if (description.length == 0) {
    return;
  }
  let id;
  const todos = todoM.getTodo();
  if (todos.length != 0) {
    const lastTodoId = todos[todos.length - 1].id;
    id = todoM.addTodo(description, lastTodoId + 1);
  } else {
    id = todoM.addTodo(description);
  }
  const todoObj = todoM.findTodo(id);

  // TODO:
  showTodoItem(todoObj.id, todoObj.description);
  countTodo();
  addButtonHandler(todoObj.id);
}

const addButtonHandler = (todoId) => {
  document
    .getElementById(todoId)
    .children[1].addEventListener("click", notDoneButtonHandler);
  document
    .getElementById(todoId)
    .children[2].addEventListener("click", removeButtonHandler);
  document.querySelector("input").value = "";
};

export function notDoneButtonHandler(e) {
  let parentNode = e.target.parentNode;
  if (e.target.textContent == "Not done") {
    e.target.textContent = "Done";
    e.target.style.color = "green";
  }
  todoM.setItemToDone(parentNode.getAttribute("id"));
  countTodo();
}

export function removeButtonHandler(e) {
  const todoId = e.target.parentNode.getAttribute("id");
  console.log(todoId);
  removeTodoItem(todoId);
  todoM.removeTodo(todoId);
  console.log(todoM.getTodo());
  countTodo();
}

function countTodo() {
  showNumberOfDone(todoM.getNumberOfDone());
  showNumberOfNotDone(todoM.getNumberOfNotDone());
}

export function loadHandler() {
  console.log("was call");
  const array = localStorage.getItem("todos");
  if (array) {
    const newtodos = JSON.parse(array);
    console.log(newtodos);
    if (newtodos.length != 0) {
      todoM.loadTodos(newtodos);
    }
  }

  const todos = todoM.getTodo();
  todos.forEach((el) => {
    showTodoItem(el.id, el.description);
    addButtonHandler(el.id);
    if (el.done) {
      const todoElement = document.getElementById(el.id);
      todoElement.children[1].style.color = "green";
      todoElement.children[1].textContent = "Done";
    }
  });

  countTodo();
  submit.addEventListener("click", () => addTodoHandler());
}

export function beforeUnloadHandler(event) {
  event.preventDefault();
  localStorage.setItem("todos", JSON.stringify(todoM.getTodo()));
  todoM.clearTodo();
}

submit.addEventListener("click", () => addTodoHandler());
