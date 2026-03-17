let contactForm = document.getElementById("contact-form");
let nameInput = document.querySelector(".contact-name");
let phoneInput = document.querySelector(".contact-phone");
let emailInput = document.querySelector(".contact-email");
let contactTableBody = document.getElementById("contact-tbody");

contactForm.addEventListener("click", (e) => {
  e.preventDefault();
  let nameValue = nameInput.value.trim();
  let phoneValue = phoneInput.value.trim();
  let emailValue = emailInput.value.trim();

  if (nameValue === "") {
    alert("Họ tên không được để trống!");
    return;
  }

  if (nameValue.length < 2) {
    alert("Họ tên phải có ít nhất 2 ký tự!");
    return;
  }

  if (phoneValue == "") {
    alert("Số điện thoại không được để trống!");
    return;
  }

  if (phoneValue.startsWith("0") == false) {
    alert(
      "Số điện thoại không hợp lệ! Vui lòng nhập số điện thoại bắt đầu bằng 0",
    );
    return;
  }

  if (phoneValue.length !== 10) {
    alert("Số điện thoại phải có đúng 10 chữ số!");
    return;
  }

  if (emailValue == "") {
    alert("Email không được để trống!");
    return;
  }

  if (emailValue.includes("@gmail.com") == false) {
    alert("Email không hợp lệ! Vui lòng sử dụng định dạng @gmail.com");
    return;
  }

  alert("THêm thông tin thành công)");
});
