for (let index = 1; index <= 10; index++) {
  // thân của vòng lặp
  console.log("hello lần thứ: ", index);
}

// cú pháp viết tắt của for
let i = 1;
for (; i <= 10; ) {
  console.log("index vị trí thứ: ", i);

  i++;
}

// vòng lặp không biết trước số lần lặp (while, do-while)
let min = 1;
while (min<=10) {
    console.log(min);
    min++;
}

// yêu cầu người dùng nhập mật khẩu cho đến khi đúng thì dừng
let pass ="1234"
let input;
while (input!==pass) {
     input = prompt("mời bạn nhập mật khẩu").trim();   
}
 console.log("đăng nhập thành công");

 // Logic thực hiện
// 1. Lấy mật khẩu từ người dùng
// 2. Kiểm tra mật khẩu có sẵn với mật khẩu người dùng nhập vào
// 2.1 Nếu đúng => In ra thông báo thành công
// 2.2. Nếu sai => tăng count lên 1 lần và yêu cầu nhập lại
// 2.3 (nếu có): nếu count = 3 thì in thông báo "Nhập quá số lần"

do {
    password = prompt("Nhập mật khẩu");

    if (password !== "1234") {
        count++;
    } else {
        console.log("Đăng nhập thành công");
    }
} while (password != "1234" && count <= 3);
