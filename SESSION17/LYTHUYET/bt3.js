let theme = localStorage.getItem("theme") || "light";

let buttonTheme = document.getElementById("themeColor");
let body = document.getElementsByTagName("body")[0];

if (theme == "light") {
  body.style.backgroundColor = "white";
  body.style.color = "black";
} else {
  body.style.backgroundColor = "black";
  body.style.color = "white";
}

buttonTheme.addEventListener("click", () => {
  if (theme == "light") {
    theme = "dark";
    localStorage.setItem("theme", "dark");
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    theme = "light";
    localStorage.setItem("theme", "light");
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
});
