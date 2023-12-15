const notDone = document.querySelector("#notDone");
const done = document.querySelector("#done");
const listTodo = document.querySelector("#listTodo");

export function showTodoItem(newId, newDescription) {
  listTodo.insertAdjacentHTML(
    "beforeend",
    `<div class="todoItem" id="${newId}">
     <p>${newDescription}</p>
     <button>Not done</button>
     <button>remove</button>
      </div>`
  );
}

export function showNumberOfDone(numberOfDone) {
  done.textContent = `Number of Done: ${numberOfDone}`;
}

export function showNumberOfNotDone(numberOfNotDone) {
  notDone.textContent = `Number of Not Done: ${numberOfNotDone}`;
}

export function removeTodoItem(removeId) {
  const todo = document.getElementById(removeId);
  console.log(todo);
  if (todo) {
    todo.remove();
  }
}
