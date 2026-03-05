let form = document.getElementById("product-form");
let ulParent = document.getElementById("product-list");

form.addEventListener("submit", (event) => {
  let nameValue = form.name.value;
  let priceValue = form.price.value;
  let li = document.createElement("li");
  event.preventDefault();
  if (nameValue == "" || priceValue == "") {
    alert("Error!!");
  } else {
    let index = 1;
    li.innerHTML = `<div class=product>${index}. ${nameValue} - ${priceValue} VND </div>`;
    ulParent.appendChild(li);
    form.name.value = "";
    form.price.value = "";
  }
});
