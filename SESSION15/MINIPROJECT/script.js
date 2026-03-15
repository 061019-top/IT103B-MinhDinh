let arrayToDos = [];
// Chức năng 1: Thêm công việc mới
// Người dùng nhập tên công việc vào ô input
// Click nút "Thêm" hoặc nhấn phím Enter để thêm công việc
// Validate: Không cho phép thêm công việc rỗng (hiển thị thông báo lỗi)
// Sau khi thêm thành công:
// Xóa nội dung trong ô input
// Tự động focus vào ô input để tiếp tục nhập
// Cập nhật danh sách công việc

let addInput = document.getElementById("taskInput");
let idOrigin = 0;
const createNewToDo = () => {
  let toDo = addInput.value;
  if (addInput.value == "") {
    alert("Công việc không thể rỗng");
    return;
  }
  let newToDo = {
    id: idOrigin,
    name: addInput.value,
    isDone: false,
  };
  arrayToDos.push(newToDo);
  addInput.value = "";
  idOrigin++;
  renderToDos();
  totalTaskComplete();
};
// event click
let addButton = document.getElementById("addBtn");
addButton.addEventListener("click", createNewToDo);
// event enter
addInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    createNewToDo();
  }
});

// Chức năng 2: Hiển thị danh sách công việc
// Render danh sách công việc từ mảng dữ liệu
// Mỗi công việc hiển thị đầy đủ: checkbox, tên, nút sửa, nút xóa
// Áp dụng style khác nhau cho công việc đã hoàn thành và chưa hoàn thành
const renderToDos = () => {
  let main = document.getElementById("taskList");
  main.innerHTML = "";
  let noneTask = document.getElementsByClassName("empty-state")[0];
  if (arrayToDos.length == 0) {
    noneTask.style.display = "block";
  } else {
    noneTask.style.display = "none";
  }

  arrayToDos.forEach((el, index) => {
    let divTaskItem = document.createElement("div");
    divTaskItem.classList.add("task-item");
    divTaskItem.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${el.isDone ? "checked" : ""} onclick="completeTask(${el.id})" /><span style="${el.isDone ? "text-decoration: line-through" : "text-decoration: none"}" class="task-text"
            >${el.name}</span>
            
          <div class="task-actions">
            <button class="btn-edit" onclick="updateTask(${el.id})">✏️ Sửa</button
            ><button class="btn-delete" onclick="deleteTask(${el.id})">🗑️ Xóa</button>
            <button class="btn-save" style="display: none">💾 Lưu</button
            ><button class="btn-cancel" style="display: none">❌ Hủy</button>
          </div>`;

    main.appendChild(divTaskItem);
  });
};

// Chức năng 3: Đánh dấu hoàn thành
// Click vào checkbox để đánh dấu công việc đã hoàn thành hoặc chưa hoàn thành
// Khi đánh dấu hoàn thành:
// Tên công việc bị gạch ngang
// Cập nhật trạng thái trong mảng dữ liệu
// Cập nhật số đếm ở footer

const completeTask = (id) => {
  let itemComplete = arrayToDos.findIndex((el, i) => {
    return el.id == id;
  });
  if (arrayToDos[itemComplete].isDone == true) {
    arrayToDos[itemComplete].isDone = false;
    renderToDos();
    totalTaskComplete();
    return;
  }
  arrayToDos[itemComplete].isDone = true;
  renderToDos();
  totalTaskComplete();
};

// Chức năng 4: Sửa công việc
// Click nút "Sửa" để chuyển sang chế độ chỉnh sửa
// Hiển thị ô input với nội dung hiện tại của công việc
// Hiển thị 2 nút: "Lưu" và "Hủy"
// Cho phép nhấn Enter để lưu, Escape để hủy
// Validate: Không cho phép lưu nội dung rỗng
// Sau khi lưu: Cập nhật tên công việc trong mảng và render lại

const updateTask = (id) => {
  let itemUpdate = arrayToDos.findIndex((el, i) => {
    return el.id == id;
  });
  let buttonSave = document.getElementsByClassName("btn-save")[itemUpdate];
  let buttonCancel = document.getElementsByClassName("btn-cancel")[itemUpdate];
  let buttonUpdate = document.getElementsByClassName("btn-edit")[itemUpdate];
  let buttonDel = document.getElementsByClassName("btn-delete")[itemUpdate];
  buttonSave.style.display = "inline";
  buttonCancel.style.display = "inline";
  buttonUpdate.style.display = "none";
  buttonDel.style.display = "none";

  let spanTask = document.getElementsByClassName("task-text")[itemUpdate];
  let inputUpdate = document.createElement("input");
  inputUpdate.classList.add("input-update");
  spanTask.replaceWith(inputUpdate);
  inputUpdate.value = arrayToDos[itemUpdate].name;
  inputUpdate.focus();
  inputUpdate.select();
  // ấn save
  buttonSave.addEventListener("click", () => {
    arrayToDos[itemUpdate].name = inputUpdate.value;
    renderToDos();
  });
  let input = document.getElementsByClassName("input-update")[0];
  input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      arrayToDos[itemUpdate].name = inputUpdate.value;
      renderToDos();
    }
  });
  // ấn hủy
  buttonCancel.addEventListener("click", () => {
    renderToDos();
  });
};

// Chức năng 5: Xóa công việc
// Click nút "Xóa" để xóa công việc
// Hiển thị hộp thoại xác nhận trước khi xóa
// Sau khi xác nhận: Xóa công việc khỏi mảng và render lại danh sách
const deleteTask = (id) => {
  let itemDelete = arrayToDos.findIndex((el, i) => {
    return el.id == id;
  });
  if (confirm(`Bạn có chắc muốn xóa "${arrayToDos[itemDelete].name}" không?`)) {
    arrayToDos.splice(itemDelete, 1);

    renderToDos();
  } else {
    alert("Đã hủy xóa");
  }
  totalTaskComplete();
};

// Chức năng 6: Cập nhật Footer
// Tự động đếm và hiển thị số công việc đã hoàn thành / tổng số công việc
// Khi tất cả công việc đã hoàn thành:
// Hiển thị badge "Hoàn thành tất cả" với icon check màu xanh
// Áp dụng animation khi badge xuất hiện
const totalTaskComplete = () => {
  // completed
  let completedCount = arrayToDos.reduce((acc, cur) => {
    return cur.isDone ? acc + 1 : acc;
  }, 0);
  let spanCompletedCount = document.getElementById("completedCount");
  spanCompletedCount.innerText = completedCount;
  // total
  let totalCount = arrayToDos.length;
  let spanTotalCount = document.getElementById("totalCount");
  spanTotalCount.innerText = totalCount;

  let spanPerfect = document.getElementById("perfect");
  if (completedCount == totalCount && totalCount > 0) {
    spanPerfect.style.display = "inline";
  } else {
    spanPerfect.style.display = "none";
  }
};
