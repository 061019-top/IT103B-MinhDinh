const colorPicker = document.getElementById("colorPicker");
const addButton = document.getElementById("addButton");
const colorContainer = document.getElementById("colorContainer");

function displayColors() {
  colorContainer.innerHTML = "";

  let colorsString = localStorage.getItem("favoriteColors");
  let colorsArray = [];

  if (colorsString) {
    colorsArray = JSON.parse(colorsString);
  }

  for (let i = 0; i < colorsArray.length; i++) {
    let colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style.backgroundColor = colorsArray[i];
    colorContainer.appendChild(colorBox);
  }
}

addButton.addEventListener("click", function () {
  let selectedColor = colorPicker.value;

  let colorsString = localStorage.getItem("favoriteColors");
  let colorsArray = [];

  if (colorsString) {
    colorsArray = JSON.parse(colorsString);
  }

  colorsArray.push(selectedColor);
  localStorage.setItem("favoriteColors", JSON.stringify(colorsArray));

  displayColors();
});

displayColors();
