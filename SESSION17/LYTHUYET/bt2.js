let count = localStorage.getItem("visitCount") || 0;
let p = document.getElementById("show");

window.addEventListener("load", () => {
  count++;
  localStorage.setItem("visitCount", count);
  p.innerText = `Bạn đã ké trang ${count} lần `;
});
