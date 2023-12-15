import { Todo } from "./todo.js";
function todoListManament() {
  let todos = [];

  function addTodo(desc, id, done) {
    const todo = new Todo(desc, id, done);
    console.log(todo);
    todos.push(todo);
    return todo.id;
  }

  function findTodo(searchId) {
    return todos.find((el) => el.id == searchId);
  }

  function findIndexTodo(searchId) {
    return todos.findIndex((el) => el.id == searchId);
  }

  function removeTodo(searchId) {
    todos.splice(todos.indexOf(searchId), 1);
  }

  function getTodo() {
    return todos;
  }

  function getNumberOfDone() {
    return todos.filter((el) => el.done == true).length;
  }

  function getNumberOfNotDone() {
    return todos.filter((el) => el.done == false).length;
  }

  function clearTodo() {
    todos = [];
  }

  function loadTodos(userTodos) {
    todos = userTodos.sort((a, b) => a.id - b.id);
  }

  function setItemToDone(doneId) {
    todos.find((el) => el.id == doneId).setDone(true);
  }
  return {
    addTodo,
    findTodo,
    findIndexTodo,
    clearTodo,
    getNumberOfDone,
    getNumberOfNotDone,
    removeTodo,
    getTodo,
    setItemToDone,
    loadTodos,
  };
}
export { todoListManament };
