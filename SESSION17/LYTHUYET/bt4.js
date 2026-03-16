let savedProfile = localStorage.getItem("myProfile");
let flase = document.getElementById("flaseInfor");
let divItem = document.createElement("div");
let submit = document.getElementById("submit");
let inputName = document.getElementById("name");
let inputAge = document.getElementById("age");
let divContainer = document.getElementById("showInfor");
if (savedProfile) {
  divItem.innerText = `Tên: [${JSON.parse(localStorage.getItem("myProfile")).name}] | Tuổi: [${JSON.parse(localStorage.getItem("myProfile")).age}]`;
  flase.style.display = "none";
  divContainer.appendChild(divItem);
} else {
  flase.style.display = "block";
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  flase.style.display = "none";
  let obj = {
    name: inputName.value,
    age: inputAge.value,
  }
  localStorage.setItem("myProfile", JSON.stringify(obj));
  divItem.innerText = `Tên: [${JSON.parse(localStorage.getItem("myProfile")).name}] | Tuổi: [${JSON.parse(localStorage.getItem("myProfile")).age}]`;
  divContainer.appendChild(divItem);
});
