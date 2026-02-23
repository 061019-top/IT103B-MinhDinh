let  bookName = prompt("Nhap ten sach");
let whoBorrow = prompt("Nhap ten nguoi muon");
let favourite =prompt("mức độ yêu thích (một giá trị từ 1 đến 5, với 1 là ít thích nhất và 5 là rất thích)");

if(favourite===5 || favourite===4){
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
}else if (favourite === 3 ){
    console.log("Sách này khá ổn, có thể mượn")
}else{
    console.log("Sách này bạn có thể cân nhắc mượn lại sau")
}