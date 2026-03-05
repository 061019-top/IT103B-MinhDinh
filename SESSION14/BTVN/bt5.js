const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

let input = document.getElementById("search-input");
const findItem = () => {
  let resultSearch = products.filter((el) => {
    return el.name == input.value;
  });
  let final = resultSearch.map((el) => {
    return `${el.name} - ${el.price.toLocaleString("vi-VN")} VND`;
  });
  let body = document.getElementsByTagName("body")[0];
  let div = document.createElement("div");
  div.innerText = final;
  body.appendChild(div);
  input.value = "";
};

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    findItem();
  }
});
