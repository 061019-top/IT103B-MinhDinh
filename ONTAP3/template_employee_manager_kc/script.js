let listProduct = [
  {
    id: 4538754356784,
    name: "Máy tính Dell",
    price: 400.0,
    quantity: 12,
  },
  {
    id: 3298656789764,
    name: "Iphone 18",
    price: 700.0,
    quantity: 4,
  },
  {
    id: 875489234765463,
    name: "Chuột Dell",
    price: 900.0,
    quantity: 15,
  },
  {
    id: 4983254678492,
    name: "Macbook M3",
    price: 80.0,
    quantity: 2,
  },
];

const saveLocal = () => {
  localStorage.setItem("listProduct", JSON.stringify(listProduct));
};

const getLocal = () => {
  listProduct = JSON.parse(localStorage.getItem("listProduct")) || listProduct;
};
//ĐỌC DỮ LIỆU
let tbody = document.getElementById("tbody");
const renderListProduct = () => {
  tbody.innerHTML = "";
  getLocal();
  listProduct.forEach((element, index) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${index + 1}</td>
                <td class="td-name">${element.name}</td>
                <td class="td-price">${element.price} VNĐ</td>
                <td class="center" style="font-weight: 700">${element.quantity}</td>
                <td>
                  <div class="td-actions">
                    <button class="btn btn-sm btn-edit" onclick="editProduct(${element.id})">✏ Sửa</button>
                    <button class="btn btn-sm btn-del" onclick=deleteProduct(${element.id})>✕ Xóa</button>
                  </div>
                </td>
        `;
    tbody.appendChild(tr);
  });
  saveLocal();
};

renderListProduct();

//THÊM DỮ LIỆU
let iName = document.getElementById("iName");
let iPrice = document.getElementById("iPrice");
let iStock = document.getElementById("iStock");
let btnSubmit = document.getElementById("btnSubmit");

const addProduct = () => {
  //VALIDATE NAME
  if (iName.value.trim() == "") {
    alert("Vui lòng nhập tên sản phẩm.");
    return;
  }
  // LỌC SO SÁNH TUYỆT ĐÓI
  listProduct.filter((element) => {
    let resutFilter = element.name;
    if (resutFilter == iName.value.trim()) {
      alert("Tên sản phẩm đã tồn tại");
      return;
    }
  });

  // VALIDATE GIÁ
  if (iPrice.value.trim() < 0) {
    alert("Giá sản phẩm phải lớn hơn 0");
    return;
  }

  // VALIDATE TỒN KHO
  if (iStock.value.trim() < 0) {
    alert("Số lượng sản phẩm phải lớn hơn 0");
    return;
  }
  let newProduct = {
    id: Date.now(),
    name: iName.value,
    price: iPrice.value,
    quantity: iStock.value,
  };

  listProduct.push(newProduct);

  saveLocal();

  renderListProduct();

  iName.value = "";
  iPrice.value = "";
  iStock.value = "";
  alert("Thêm sản phẩm thành công");
};

// THÊM SỰ KIỆN CHO NÚT THÊM
btnSubmit.addEventListener("click", addProduct);

// HÀM UPDATE SẢN PHẨM
let index;
let formTitle = document.getElementById("formTitle");
let btnUpdate = document.getElementById("btnUpdate");

const editProduct = (id) => {
  let indexUp = listProduct.findIndex(item => item.id === id);
  index = indexUp;

  iName.value = listProduct[index].name;
  iPrice.value = listProduct[index].price;
  iStock.value = listProduct[index].quantity;

  btnSubmit.style.display = "none";
  btnUpdate.style.display = "inline-block";
  formTitle.innerText = "Chỉnh sửa sản phẩm";
};

btnUpdate.addEventListener("click", () => {
  if (iName.value.trim() == "") {
    alert("Vui lòng nhập tên sản phẩm.");
    return;
  }

  listProduct.filter((element, i) => {
    if (i !== index) {
      let resutFilter = element.name;
      if (resutFilter == iName.value.trim()) {
        alert("Tên sản phẩm đã tồn tại");
        return;
      }
    }
  });

  if (iPrice.value.trim() < 0) {
    alert("Giá sản phẩm phải lớn hơn 0");
    return;
  }

  if (iStock.value.trim() < 0) {
    alert("Số lượng sản phẩm phải lớn hơn 0");
    return;
  }

  listProduct[index].name = iName.value;
  listProduct[index].price = iPrice.value;
  listProduct[index].quantity = iStock.value;

  iName.value = "";
  iPrice.value = "";
  iStock.value = "";
  formTitle.innerText = "Thêm sản phẩm mới";
  btnSubmit.style.display = "inline-block";
  btnUpdate.style.display = "none";

  saveLocal();
  renderListProduct();
  alert("Cập nhật sản phẩm thành công!");
});
// HÀM XOÁ SẢN PHẨM

const deleteProduct = (id) => {
  alert("Bạn chắc chắn muốn xoá sản phẩm này");

  listProduct = listProduct.filter((element) => {
    return element.id !== id;
  });

  saveLocal();
  renderListProduct();
};
