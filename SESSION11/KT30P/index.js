let products = [
  {
    id: "P01",
    name: "Laptop MacBook",
    price: 2000,
    category: "Laptop",
    inStock: true,
  },
  {
    id: "P02",
    name: "Chuột không dây",
    price: 45,
    category: "Phụ kiện",
    inStock: true,
  },
  {
    id: "P03",
    name: "Bàn phím cơ Keychron",
    price: 95,
    category: "Phụ kiện",
    inStock: false,
  },
  {
    id: "P04",
    name: "Màn hinh Dell",
    price: 450,
    category: "Màn hinh",
    inStock: true,
  },
  {
    id: "P05",
    name: "Tai nghe Sony",
    price: 350,
    category: "Phụ kiện",
    inStock: true,
  },
];

const findItemById = (id, itemArray) => {
  let resultSearch = itemArray.find((element) => {
    return element.id == id;
  });
  if (!resultSearch) {
    alert("Không tìm thấy");
  } else {
    return resultSearch;
  }
};
console.log("Toàn bộ dữ liệu của mặt hàng mang mã định danh P03");
console.log(findItemById("P03", products));

let checkPrice = (itemArray) => {
  let resultCheck = itemArray.every((element) => {
    return element.price > 0;
  });
  if (resultCheck == true) {
    console.log("Dữ liệu bảng giá hợp lệ");
  } else {
    console.log("Phát hiện sản phẩm chưa cập nhật giá trị");
  }
};
checkPrice(products);

const displayProduct = (itemArray) => {
  let logResult = itemArray.map((element) => {
    if (element.inStock == true) {
      element.inStock = "Còn hàng";
    } else {
      element.inStock = "Hết hàng";
    }
    return `${element.name} | Giá: $${element.price} | Trạng thái: ${element.inStock}`;
  });
  return logResult;
};
console.log("Dữ liệu sau khi được chuyển hóa là:");
console.log(displayProduct(products));
