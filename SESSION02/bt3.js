let bookName = prompt("Nhap ten sach");
let typeOfBook = prompt("Nhap the loai sach")
let bookStatus =prompt("Nhap tinh trang sach")

if (typeOfBook === "Khoa học" || typeOfBook ==="Lịch sử"){
    if(bookStatus==="có sẵn"){
        console.log("Sách này có sẵn trong thư viện")
    }else if(bookStatus==="đã mượn"){
        console.log("Sách đã được mượn")
    }else{
        console.log("Lỗi")
    }
}else if(typeOfBook==="Văn học" || typeOfBook==="Truyện"){
    console.log("Sách này có thể đọc giải trí")
}