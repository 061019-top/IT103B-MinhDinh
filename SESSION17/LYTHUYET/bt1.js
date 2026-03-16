let inputName = document.getElementById("name");
let buttonSubmit = document.getElementById("butonSubmit");
let body = document.getElementsByTagName("body")[0];
buttonSubmit.addEventListener("click", () => {
  localStorage.setItem("userName", inputName.value);
  let element = document.createElement("div");
  element.textContent = `Hello ${inputName.value}`;
  body.appendChild(element);
});
