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

// các chức năng bắt tìm kiếm search lọc => filter()  hoặc find()
// method .fiter giá trị trả về là 1 mảng mới
// .find trả về kết quả giá trị đầu tiên tìm thấy
// yêu cầu 1
const filterProducById = (idProduct, listProduct) => {
  let productFindById = listProduct.find((element) => {
    return element.id == idProduct;
  });
  if (productFindById== undefined) {
    console.log("không tìm thấy");
  } else {
    console.log(productFindById);
    
  }
  console.log(productFindById);
};

filterProducById("PO3", products)

// kiểm tra xem có sản phẩm nào có price == 0 không ?
// some chỉ cần 1 cái đsung là đúng hết
// every tất cả đúng thì nó mới đúng 

const checkProduct = (products) =>{
    let istrue = products.some((product) => {
        return product.price === 0
    })
    console.log(istrue);
    if (istrue== true) {
        console.log(`có hàng chưa cập nhật giá`);
        
    }else{
        console.log(`đã đúng rồi`);
    }
}
checkProduct(products)

// chức năng 3
const displatFormatProduct = (products) => {
    let listNewProduct = products.map((products) => {
        let stringInStock = products.inStock == true ? "Còn hàng" : "Hết hàng"
        let newProduct = `${products.name} - Giá ${products.price} | Trạng Thái : ${stringInStock} `
        return newProduct
    })
    console.log(listNewProduct);
}
displatFormatProduct(products)