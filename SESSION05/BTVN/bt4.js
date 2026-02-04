let ids = [];
let names = [];
let status = [];
let n = Number(prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"));
for (let i = 0; i < n; i++) {
    let id = prompt("Nhập mã sách:");
    let name = prompt("Nhập tên sách:");
    let s = Number(prompt("Nhập tình trạng (1: Hỏng nhẹ, 2: Hỏng nặng, 3: Cần sửa gấp):"));  
    ids.push(id);
    names.push(name);
    if (s === 1) {
        status.push("Hỏng nhẹ");
    } else if (s === 2) {
        status.push("Hỏng nặng");
    } else {
        status.push("Cần sửa gấp");
    }
}
console.log("--- Danh sách ban đầu ---");
for (let i = 0; i < ids.length; i++) {
    console.log(`${i + 1}. ${ids[i]} - ${names[i]} - ${status[i]}`);
}
let choice;
do {
    choice = Number(prompt("1: Sửa tình trạng, 2: Xóa sách, 0: Kết thúc. Bạn chọn gì?"));
    if (choice === 1) {
        let findId = prompt("Nhập mã sách cần sửa:");
        let k = -1;
        for (let i = 0; i < ids.length; i++) {
            if (ids[i] === findId) {
                k = i;
                break;
            }
        }
        if (k !== -1) {
            let newS = Number(prompt("Chọn trạng thái mới (1: Hỏng nhẹ, 2: Hỏng nặng, 3: Cần sửa gấp, 4: Đã sửa xong, 5: Loại bỏ):"));
            if (newS === 1) status[k] = "Hỏng nhẹ";
            else if (newS === 2) status[k] = "Hỏng nặng";
            else if (newS === 3) status[k] = "Cần sửa gấp";
            else if (newS === 4) status[k] = "Đã sửa xong";
            else if (newS === 5) status[k] = "Loại bỏ";        
            console.log("--- Danh sách sau khi sửa ---");
            for (let i = 0; i < ids.length; i++) {
                console.log(`${i + 1}. ${ids[i]} - ${names[i]} - ${status[i]}`);
            }
        } else {
            alert("Không tìm thấy mã sách!");
        }
    } else if (choice === 2) {
        let delId = prompt("Nhập mã sách cần xóa:");
        let k = -1;
        for (let i = 0; i < ids.length; i++) {
            if (ids[i] === delId) {
                k = i;
                break;
            }
        }
        if (k !== -1) {
            ids.splice(k, 1);
            names.splice(k, 1);
            status.splice(k, 1);
            
            console.log("--- Danh sách sau khi xóa ---");
            for (let i = 0; i < ids.length; i++) {
                console.log(`${i + 1}. ${ids[i]} - ${names[i]} - ${status[i]}`);
            }
        } else {
            alert("Không tìm thấy mã sách để xóa!");
        }
    }
} while (choice !== 0);
console.log("--- BÁO CÁO CUỐI ---");
console.log(`Tổng số sách còn lại: ${ids.length}`);
let fixedCount = 0;
let discardCount = 0;
for (let i = 0; i < status.length; i++) {
    if (status[i] === "Đã sửa xong") {
        fixedCount++;
    }
    if (status[i] === "Loại bỏ") {
        discardCount++;
    }
}
console.log(`Số sách 'Đã sửa xong': ${fixedCount}`);
console.log(`Số sách 'Loại bỏ': ${discardCount}`);
console.log("Danh sách chi tiết:");
for (let i = 0; i < ids.length; i++) {
    console.log(`${ids[i]} - ${names[i]} - ${status[i]}`);
}