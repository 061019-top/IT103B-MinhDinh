const squad = [
  ["Nguyen Van A", 10, "FW"],

  ["Tran Van B", 5, "MF"],

  ["Le Van C", 2, "DF"],

  ["Pham Van D", 12, "FW"],

  ["Hoang Van E", 0, "GK"],

  ["Dang Van F", 7, "MF"],
];
let choice;
do {
  choice = +prompt(`
 Mời bạn nhập lựa chọn!
--- QUẢN LÝ ĐỘI BÓNG ---

1. Xem danh sách
2. Tìm kiếm (Find)
3. Lọc vị trí (Filter)
4. Tổng bàn thắng (Reduce)
5. Kiểm tra hiệu suất (Some/Every)
0. Thoát
 Mời bạn nhập lựa chọn!
`);

  switch (choice) {
    case 1:
        alert('minh minh ')
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;

    default:
      break;
  }
} while (choice != 6);
