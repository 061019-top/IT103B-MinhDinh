console.log("Hello world");

let todos = [
    { id: 1, name: "Chơi game", isDone: true },
    { id: 2, name: "Nghe nhạc", isDone: false },
    { id: 3, name: "Xem phim", isDone: true }
];

// CRUD

// Read: Đổ hết dữ liệu tên công việc ra giao diện HTML
const renderData = () => {

    // Lấy element thẻ cha chứa dữ liệu
    let listElement = document.getElementsByClassName("listMenu")[0];

    // Clear dữ liệu cũ
    listElement.innerHTML = ``;

    todos.forEach((todo) => {
        // createElement: Tạo ra thẻ mới trong HTML
    let itemElement = document.createElement("li");

    // Thêm nội dung
    itemElement.innerHTML = `<div style = "padding: 20px">
                                ${todo.name}
                                <button onclick="handleUpdateTodo(${todo.id})">Chỉnh sửa</button>
                                <button>Xóa</button>
                            </div>`;

    // appendChild: Thêm vào DOM
    listElement.appendChild(itemElement);
    });
};

renderData();

// Create: Thêm công việc
const handleAddTodo = () => {
    let inputElement = document.getElementById("input_todo");
    let newName = inputElement.value.trim();

    let newTodo = {
        id: Date.now(),
        name: newName,
        isDone: false,
    };
    todos.push(newTodo);
    renderData();

    inputElement.value = "";
};

let buttonAddElement = document.getElementsByTagName("button")[0];

buttonAddElement.addEventListener("click", handleAddTodo);

let inputElement = document.getElementById("input_todo");

inputElement.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key == "Enter") {
        handleAddTodo();
    }
});

// Update

const handleUpdateTodo = (idTodo) => {
    let todo = todos.find((todo)=>{
        return todo.id === idTodo
    })
    inputElement.value = todo.name

}