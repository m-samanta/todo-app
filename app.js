const list = document.querySelector(".list");
const input = document.querySelector("input");

let toDoItems = [];

let toDoInput = "";
let counter = 0;

function handleInput(event) {
  toDoInput = event.target.value;
}

function addTodoItem() {
  if (!toDoInput) {
    return;
  }

  toDoItems.push({ id: counter++, task: toDoInput });

  input.value = "";
  toDoInput = "";

  renderTodoItems();
}

function deleteTodoItem(id) {
  toDoItems = toDoItems.filter((item) => item.id !== id);
  renderTodoItems();
}

function renderTodoItems() {
  list.innerHTML = toDoItems
    .map(
      (item) =>
        `<li>
        ${item.task}
        <button class="todo__delete" onclick="deleteTodoItem(${item.id})">X</button>
        </li>`
    )
    .join("");
}
