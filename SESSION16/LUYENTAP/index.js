const formElement = document.getElementsByClassName('form')[0];
const emailInput = document.getElementsByClassName('mail')[0];
const passwordInput = document.getElementsByClassName('pass')[0];
const rePasswordInput = document.getElementsByClassName('repass')[0];

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