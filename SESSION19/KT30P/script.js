// 1. Kiểm tra dữ liệu đầu vào (validation):
//   - Tất cả các ô không được để trống
//   - Tên đăng nhập phải có ít nhất 4 ký tự
//   - Mật khẩu phải có ít nhất 6 ký tự
//   - Mật khẩu và Xác nhận mật khẩu phải giống nhau
// 2. Nếu có lỗi → hiển thị thông báo lỗi (dùng alert() để hiển thị thông báo lỗi).
// 3. Nếu dữ liệu hợp lệ :
//   - Lưu thông tin người dùng vào LocalStorage.
//   - Key lưu trong localStorage là: "users"
//   - Value là một mảng các object (dạng JSON), mỗi object có cấu trúc:

let nameUser = document.getElementById("name");
console.log(nameUser);


let nameLogin = document.getElementById("name-login");

let passUser = document.getElementById("pass");

let comPass = document.getElementById("com-pass");

let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  let nameValue = nameUser.value.trim();
  console.log(nameValue);
  let nameLoginValue = nameLogin.value.trim();
  console.log(nameLoginValue);
  
  let passUserValue = passUser.value.trim();
  let comPassVlue = comPass.value.trim();

  if (nameValue === "") {
    alert("Họ và tên không dược để trống");
  }
  if (nameValue.length < 4) {
    alert("Họ và tên phải có ít nhất 4 kí tự");
  }

  if (nameLoginValue === "") {
    alert("Tên đăng nhập không dược để trống");
  }
  if (passUserValue === "") {
    alert("Mật khẩu không dược để trống");
  }
  if (comPassVlue === "") {
    alert("Ô xác nhận mật khẩu không dược để trống");
  }
  if (passUserValue !== comPassVlue) {
    alert("Mật khẩu và xác nhận mật phẩi phải giống nhau");
  }

  let dataUser ={
      fullname: nameValue,  username: nameLoginValue,  password:comPassVlue 
  }
    localStorage.setItem("dataUser", JSON.stringify(dataUser));
    alert('Bạn đã đăng ký thành công ')
});
