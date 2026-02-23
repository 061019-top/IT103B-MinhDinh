let bookName   =prompt("Tên sách:");
let bookStatus =prompt("Tình trạng sách (có sẵn , không có sẵn , đã mượn):").trim().toLowerCase()  ;
let userName=prompt("Tên người mượn:");
let borowDay=+prompt("Số ngày mượn:");
let isCard=prompt("Thẻ thư viện (có / không):").trim().toLowerCase();


if(bookStatus === "có sẵn" && isCard ==="có"){
    console.log( "Chúc mừng, bạn có thể mượn sách này");
} else if(bookStatus === "đã mượn" && borowDay < 30){
    if(isCard === "có"){
        console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
    }else{
        console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
    }
}else if(bookStatus === "Không có sẵn"){
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
}else{
    console.log("Thông tin không hợp lệ, vui lòng nhập lại");
    
}