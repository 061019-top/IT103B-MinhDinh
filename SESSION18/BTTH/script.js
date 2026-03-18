let todos = [
  { id: "P01", task: "Nghe nhac", isDone: true },
  { id: "P02", task: "Choi game", isDone: true },
  { id: "P03", task: "Hoc bai", isDone: false },
];

let listEmlementTask = document.getElementById("listTask");

let inputElement = document.getElementById("element");
let submit = document.getElementById("submit");

const renderData = () => {
    listEmlementTask.innerText=""
  localStorage.setItem("listTodo", JSON.stringify(todos)); // bắn dữ liệu trên local "phải định dạng sang Json"
  todos.forEach((todo) => {
    let itemElement = document.createElement("li");
    itemElement.innerText = todo.task;
    listEmlementTask.appendChild(itemElement);
  });
};
renderData();

submit.addEventListener("click", () => {
  let nameTask = inputElement.value.trim();
  let newTask = { id: Date.now(), task: nameTask, isDone: false };
  todos.push(newTask);
  renderData();
  inputElement.value=""// ĐƯA INPUT VỀ RỖNG SAU KHI SUBMIT
});
