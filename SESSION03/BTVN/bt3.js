let bookExtend;
let userName;
let bookName;
let dateBorrow;
let dateExtend;
let successExtend=0;
let failureExtend=0;
do {
    bookExtend =prompt("Có yêu cầu gia hạn mới không? (có/không)").trim().toLowerCase();
if(bookExtend==="không"){
    console.log("Thoát chương trình");
    
}else if(bookExtend==="có"){
    userName=prompt("Nhập tên người mượn");
    bookName=prompt("Nhập tên sách");
    dateBorrow=+prompt("Số ngày đã mượn hiện tại (số nguyên ≥ 1)");
    dateExtend=+prompt("Số ngày muốn gia hạn thêm (số nguyên ≥ 1)");
    if(dateBorrow>45){
        console.log("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
        failureExtend++;
    }else if(dateBorrow+dateExtend>60){
        console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
        failureExtend++;
    }else{
        console.log("Gia hạn thành công");
        successExtend++;
    }
    
}else{
    console.log("Lỗi");   
}
} while ( bookExtend!=="không" );
console.log(`
    Số lần gia hạn thành công: ${successExtend}
    Số lần gia hạn không thành công: ${failureExtend}
    `);
