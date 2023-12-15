class Todo {
  static runningId = 1;
  constructor(description, id, done = false) {
    this.description = description;
    this.id = id ?? Todo.runningId++;
    this.done = done;
  }

  getTodo() {
    return this;
  }

  setDescription(newDescription) {
    this.description = newDescription;
  }
  setDone(value) {
    this.done = value;
  }
}
export { Todo };
