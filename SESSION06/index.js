let count = 0;
let isLogin = false;

while (count < 3) {
  let user = prompt("Tên đăng nhập:");
  let pass = prompt("Mật khẩu:");

  if (user === "admin" && pass === "12345") {
    alert("Đăng nhập thành công!");
    isLogin = true;
    break;
  } else {
    count++;
    if (user !== "admin") {
      alert(`Sai tài khoản! Còn ${3 - count} lần thử.`);
    } else {
      alert(`Sai mật khẩu! Còn ${3 - count} lần thử.`);
    }
  }
}
if (isLogin === true) {
  let books = ["Toán", "Văn", "Anh"];
  let choice;

  do {
    let menu = `--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN 4.0 ---
1. Nhập thêm lô sách mới
2. Hiển thị danh sách sách
3. Tìm kiếm sách
4. Cập nhật tên sách
5. Đảo ngược thứ tự kệ sách
6. Nhập kho từ nguồn khác
7. Thoát chương trình
Vui lòng chọn (1-7):`;

    choice = Number(prompt(menu));

    switch (choice) {
      case 1:
        let input = prompt("Nhập danh sách tên sách (cách nhau bởi dấu phẩy):");
        if (input) {
          let list = input.split(",");
          let added = 0;
          for (let i = 0; i < list.length; i++) {
            let name = list[i].trim();
            if (name !== "") {
              books.push(name);
              added++;
            }
          }
          alert(`Đã thêm thành công ${added} cuốn sách mới.`);
        }
        break;

      case 2:
        console.clear();
        console.log("--- DANH SÁCH SÁCH HIỆN CÓ ---");
        if (books.length === 0) {
          console.log("Thư viện hiện đang trống.");
        } else {
          let number = 1;
          for (let item of books) {
            console.log(`${number}. ${item}`);
            number++;
          }
        }
        alert("Danh sách đã được in ra console (F12).");
        break;

      case 3:
        let find = prompt("Nhập tên cuốn sách cần tìm:");
        if (books.includes(find)) {
          let index = books.indexOf(find);
          alert(
            `Sách "${find}" được tìm thấy tại vị trí số ${index} trong mảng.`,
          );
        } else {
          alert(`Không tìm thấy sách "${find}" trong kho.`);
        }
        break;

      case 4:
        let oldBook = prompt("Nhập tên sách cần sửa:");
        let index = books.indexOf(oldBook);

        if (index !== -1) {
          let newBook = prompt(`Tìm thấy sách "${oldBook}". Nhập tên mới:`);
          if (newBook) {
            books[index] = newBook;
            alert("Cập nhật thành công!");
          }
        } else {
          alert("Sách không tồn tại để sửa.");
        }
        break;

      case 5:
        books.reverse();
        console.clear();
        console.log("--- KỆ SÁCH SAU KHI ĐẢO NGƯỢC ---");
        for (let i in books) {
          console.log(`Vị trí index [${i}]: ${books[i]}`);
        }
        alert("Thứ tự trên kệ đã thay đổi. Kiểm tra console.");
        break;

      case 6:
        let other = ["Sách Kỹ Năng", "Truyện Tranh"];
        books = books.concat(other);
        alert("Đã gộp kho sách từ chi nhánh khác thành công.");
        break;

      case 7:
        alert("Hẹn gặp lại!");
        break;

      default:
        alert("Lựa chọn không hợp lệ!");
        break;
    }
  } while (choice !== 7);
} else {
  alert("Tài khoản đã bị khóa!");
}