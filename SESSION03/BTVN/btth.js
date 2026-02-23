let password = "";
let count = 0;
let isLoginSuccessfull = false;
let totalPrice = 0;

do {
  password = prompt("Nhap mat khau");
  if (password !== "admin123") {
    count++;
    if (count === 3) {
      console.log("Tai khoan bi kkhoa");
    }
  } else {
    alert("Dang nhap thanh cong");
    isLoginSuccessfull = true;
    break;
  }
} while (password !== "admin123" && count < 3);

if (isLoginSuccessfull === true) {
  let choice;
  let quantity;
  let totalPrice = 0;

  do {
    choice = +prompt("Vui long nhap lua chon");
    switch (choice) {
      case 1:
        quantity = +prompt("Nhap so luong sach");
        for (let i = 1; i <= quantity; i++) {
          let price = +prompt("nhap gia tien cua cuon sach thu ", i, ": ");
          if (price <= 0 || isNaN(price)) {
            console.log("So tien k hop le");
            continue;
          }
          totalPrice += price;
          console.log("Tong so tien: ", totalPrice);
        }
        break;

      case 2:
        for (let i = 1; i <= 3; i++) {
          for (let j = 1; j <= 5; j++) {
            if (i === 2 && j === 3) {
              console.log("Dang sua chưa");
              continue;
            }
            console.log(`Khu vuc ${i} - Ke sach so ${j}`);
          }
        }

        break;

      case 3:
        console.log("Thoat chuonh trinh");

        break;

      default:
        console.log("Lua chon khong hop le");

        break;
    }
  } while (choice !== 3);
}
