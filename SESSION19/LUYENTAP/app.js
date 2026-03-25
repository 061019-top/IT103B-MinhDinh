let products = [
  {
    id: 1,
    name: "Tai nghe Bluetooth TWS",
    price: 320000,
    image: "https://picsum.photos/seed/mp19-tws/1200/800",
    description: "Chống ồn nhẹ, pin 20h, kết nối ổn định.",
  },
  {
    id: 2,
    name: "Bàn phím cơ 87 phím",
    price: 790000,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=60",
    description: "Switch blue, led trắng, gõ sướng tay.",
  },
  {
    id: 3,
    name: "Chuột không dây công thái học",
    price: 450000,
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=60",
    description: "Thiết kế ergonomic, sạc USB-C.",
  },
  {
    id: 4,
    name: "USB 64GB",
    price: 120000,
    image: "https://picsum.photos/seed/mp19-usb/1200/800",
    description: "Nhỏ gọn, tốc độ đọc/ghi ổn định.",
  },
  {
    id: 5,
    name: "Đế tản nhiệt laptop",
    price: 210000,
    image:
      "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200&q=60",
    description: "2 quạt gió, đỡ mỏi cổ tay.",
  },
  {
    id: 6,
    name: "Cáp sạc Type-C 1m",
    price: 80000,
    image: "https://picsum.photos/seed/mp19-cable/1200/800",
    description: "Bọc dù, hỗ trợ sạc nhanh.",
  },
  {
    id: 7,
    name: "Cáp sạc Type-C 1m",
    price: 80000,
    image: "https://picsum.photos/seed/mp19-cable/1200/800",
    description: "Bọc dù, hỗ trợ sạc nhanh.",
  },
];

let listItemElement = document.getElementById("products-grid");
let count = document.getElementById("product-count-badge");

const countProduct = () => {
  count.innerText = `${products.length} sản phẩm`;
};

const renderData = () => {
  products = JSON.parse(localStorage.getItem("listProduct")) || products; //lấy từ local nếu local không có thì lấy từ dữ liệu fix cứng

  products.forEach((product) => {
    let item_productElement = document.createElement("article");
    item_productElement.classList.add("card");
    item_productElement.innerHTML = `<div class="card-img">
<img
src="${product.image}"
alt="${product.name}"
loading="lazy"

/>
</div>
<div class="card-body">
<h3 class="card-title">${product.name}</h3>
<p class="card-desc">${product.description}</p>
<div class="card-footer">
<div class="price">${product.price} VNĐ</div>
<button class="btn btn-primary">Thêm vào mảng</button>
</div>
</div>;`;

    listItemElement.appendChild(item_productElement);

    localStorage.setItem("listProduct", JSON.stringify(products)); //đưa lên local phải chuyển đỏi dữ liệu thành Json
  });
  countProduct();
};

renderData();
