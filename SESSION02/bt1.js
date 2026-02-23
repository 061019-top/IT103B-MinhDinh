let authorName =prompt("Nhap ten tac gia");
let bookName =prompt("Nhap ten sach");
let publish = +prompt("Nhap nam phat hanh");
let yearCurrent = new Date().getFullYear();

if(publish===yearCurrent){
    console.log("Đây là sách mới!")
}else if(publish + 5 >=  yearCurrent){
    console.log("Sách khá mới")
}else{
    console.log("Sách đã cũ");
}