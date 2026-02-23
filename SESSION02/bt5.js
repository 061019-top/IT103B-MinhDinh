let bookName = prompt("Nhap ten sach");
let bookStatus =prompt("Nhap tinh trang sach");
let publish = +prompt("Nhap nam xuat ban");

if(bookStatus==="có sẵn" && publish>=new Date().getFullYear-5){
    console.log("Sách này mới và có sẵn để mượn")
}else if(bookStatus==="đã mượn" && publish>=new Date().getFullYear-10){
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau")
}else if(bookStatus==="đã mượn" && publish<=new Date().getFullYear-10){
    console.log("Sách này đã mượn và khá cũ")
}else if(bookStatus==="có sẵn" || publish<=new Date().getFullYear -5){
    console.log("Sách này có sẵn nhưng đã lâu năm")
}