const products = [
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
];

// Khai báo element
let tbodyCart = document.getElementById("cart-tbody");
let cartEmpty = document.getElementById("cart-empty");
let clearCart = document.getElementById("clear-cart-btn");
let totalTypeOfProduct = document.getElementById("cart-lines-badge");
let totalQuantity = document.getElementById("cart-qty-badge");
let totalTypeOfProductAtCart = document.getElementById("stat-lines");
let totalQuantityAtCart = document.getElementById("stat-qty");
let totalPrice = document.getElementById("stat-total");

// 2.8. Thống kê giỏ hàng (cập nhật động)
// Hiển thị tối thiểu:
// Tổng sản phẩm trong giỏ (số dòng item khác nhau)
// Tổng số lượng (sum quantity)
// Tổng tiền (sum price × quantity)
// Tổng tiền phải format VNĐ
// Thống kê cập nhật sau mỗi thao tác (thêm/tăng/giảm/xóa/xóa tất cả)

const statisticalTotal = () => {
  cart = JSON.parse(localStorage.getItem("List cart")) || cart;

  totalTypeOfProduct.innerText = `${cart.length} dòng`;
  totalTypeOfProductAtCart.innerText = cart.length;
  totalQuantityAtCart.innerText = cart.reduce((acc, cur) => {
    return (acc += cur.quantity);
  }, 0);
  totalQuantity.innerText = `${totalQuantityAtCart.innerText} món`;
  totalPrice.innerText = `${cart.reduce((acc, cur) => {
    return (acc += cur.quantity * cur.price);
  }, 0)} VNĐ`;
};

// 2.4. Hiển thị giỏ hàng
// Render danh sách giỏ hàng dưới dạng bảng/list.
// Mỗi dòng trong giỏ hiển thị:
// Tên sản phẩm
// Giá
// Số lượng
// Thành tiền = price × quantity
// Nút + (tăng), - (giảm)
// Nút Xóa
let cart = [];
const renderData = () => {
  cart = JSON.parse(localStorage.getItem("List cart")) || cart;
  if (cart.length == 0) {
    cartEmpty.style.display = "block";
  } else {
    cartEmpty.style.display = "none";
  }
  tbodyCart.innerHTML = "";
  cart.forEach((item) => {
    let trCart = document.createElement("tr");
    trCart.innerHTML = `
                <td>${item.name}</td>
                <td class="right">${item.price} VNĐ</td>
                 <td class="center">
                <div class="qty-controls">
                  <button class="btn btn-icon btn-ghost" onclick="decreaseQuantityCart(${item.id})">-</button>
                  <span class="qty">${item.quantity}</span>
                  <button class="btn btn-icon btn-ghost" onclick="increaseQuantityCart(${item.id})" >+</button>
                </div>
                </td>
                <td class="right">${item.price * item.quantity} VNĐ</td>
                <td class="center deteteCart"><button class="btn btn-ghost" onclick="deleteCart(${item.id})">Xóa</button></td>
            `;
    tbodyCart.appendChild(trCart);
  });
  localStorage.setItem("List cart", JSON.stringify(cart));
};
statisticalTotal();
renderData();

// tăng quantity cart
const increaseQuantityCart = (idCart) => {
  let index = cart.findIndex((item) => {
    return item.id == idCart;
  });
  cart[index].quantity = cart[index].quantity + 1;
  localStorage.setItem("List cart", JSON.stringify(cart));
  statisticalTotal();
  renderData();
};
// giảm quantity cart
const decreaseQuantityCart = (idCart) => {
  let index = cart.findIndex((item) => {
    return item.id == idCart;
  });
  if (cart[index].quantity == 1) {
    cart.splice(index, 1);
    localStorage.setItem("List cart", JSON.stringify(cart));
  } else {
    cart[index].quantity = cart[index].quantity - 1;
    localStorage.setItem("List cart", JSON.stringify(cart));
  }
  statisticalTotal();
  renderData();
};

// xóa cart
const deleteCart = (idCart) => {
  let index = cart.findIndex((item) => {
    return item.id == idCart;
  });
  if (
    confirm(`BẠn có chắc muốn xóa ${cart[index].name} ra khỏi giỏ hàng không?`)
  ) {
    cart.splice(index, 1);
    localStorage.setItem("List cart", JSON.stringify(cart));
    statisticalTotal();
    renderData();
  }
};

// 2.3. Thêm sản phẩm vào giỏ hàng
// Click “Thêm vào giỏ”:
// Nếu sản phẩm chưa có trong giỏ → thêm mới với quantity = 1
// Nếu sản phẩm đã có trong giỏ → tăng quantity += 1
// Sau khi thêm:
// Cập nhật danh sách giỏ hàng
// Cập nhật thống kê
const addCart = (idProduct) => {
  let indexProduct = products.findIndex((item) => {
    return item.id == idProduct;
  });
  // ktra xem đã có trong cart chưa
  let isExisted = false;
  let indexCart = 0;
  cart.forEach((item, index) => {
    if (item.name == products[indexProduct].name) {
      isExisted = true;
      indexCart = index;
    }
  });
  if (isExisted == true) {
    cart[indexCart].quantity++;
    localStorage.setItem("List cart", JSON.stringify(cart));
    statisticalTotal();
    renderData();
  } else {
    let newItemCart = {
      id: products[indexProduct].id,
      name: products[indexProduct].name,
      price: products[indexProduct].price,
      quantity: 1,
    };
    cart.push(newItemCart);
    localStorage.setItem("List cart", JSON.stringify(cart));
    statisticalTotal();
    renderData();
  }
};

// Xóa toàn bộ giỏ hàng:
// Có nút “Xóa Giỏ Hàng” rõ ràng (màu đỏ cảnh báo).
// Khi click:
// Hiển thị confirm dialog cảnh báo nghiêm trọng
// Nếu xác nhận:
// Xóa toàn bộ giỏ hàng
// Render lại (empty state)
// Reset thống kê về 0
clearCart.addEventListener("click", () => {
  cart = [];
  localStorage.removeItem("List cart");
  statisticalTotal();
  renderData();
});
