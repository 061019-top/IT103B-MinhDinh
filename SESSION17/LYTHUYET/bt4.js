let savedProfile = localStorage.getItem("myProfile");
let falseInfoText = document.getElementById("falseInfor"); 
let divItem = document.createElement("div");
let submit = document.getElementById("submit");
let inputName = document.getElementById("name");
let inputAge = document.getElementById("age");
let divContainer = document.getElementById("showInfor");

if (savedProfile) {
  let parsedProfile = JSON.parse(savedProfile);
  divItem.innerText = `Tên: [${parsedProfile.name}] | Tuổi: [${parsedProfile.age}]`;
  falseInfoText.style.display = "none"; 
  divContainer.appendChild(divItem);
} else {
  falseInfoText.style.display = "block";
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  falseInfoText.style.display = "none"; 
  
  let obj = {
    name: inputName.value,
    age: inputAge.value,
  };
  
  localStorage.setItem("myProfile", JSON.stringify(obj));
  divItem.innerText = `Tên: [${obj.name}] | Tuổi: [${obj.age}]`;
  divContainer.appendChild(divItem);
});