const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];
const renderData = () => {
  let list = document.getElementById("product-list");
  list.innerText = "";
  products.forEach((el) => {
    let li = document.createElement("li");
    li.innerHTML = `<li id="item">${el.name}
                      <button onclick="deleteProduct(${el.id})">Xóa</button>
                      </li>`;
    list.appendChild(li);
  });
};
renderData();

const deleteProduct = (id) => {
  let index = products.findIndex((el) => {
    return el.id === id;
  });

  if (confirm(`Bạn có chắc muốn xóa không`)) {
    products.splice(index, 1);
    renderData();
  }
};
