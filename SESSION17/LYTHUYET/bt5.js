let storedData = localStorage.getItem("myProfile");
let emptyNotify = document.getElementById("emptyNotify");
let infoRow = document.createElement("div");
let saveTrigger = document.getElementById("saveTrigger");
let userName = document.getElementById("userName");
let userAge = document.getElementById("userAge");
let displayArea = document.getElementById("displayArea");
let deleteTrigger = document.getElementById("deleteTrigger");

if (storedData) {
  let profile = JSON.parse(storedData);
  infoRow.innerText = `Tên: [${profile.name}] | Tuổi: [${profile.age}]`;
  emptyNotify.style.display = "none";
  displayArea.appendChild(infoRow);
} else {
  emptyNotify.style.display = "block";
}

saveTrigger.addEventListener("click", (e) => {
  e.preventDefault();
  emptyNotify.style.display = "none";

  let profileObject = {
    name: userName.value,
    age: userAge.value,
  };

  localStorage.setItem("myProfile", JSON.stringify(profileObject));
  infoRow.innerText = `Tên: [${profileObject.name}] | Tuổi: [${profileObject.age}]`;
  displayArea.appendChild(infoRow);
});

deleteTrigger.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("myProfile");
  emptyNotify.style.display = "block";
  infoRow.innerText = "";
});
