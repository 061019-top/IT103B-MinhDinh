let check;
let bookCode;
let bookName;
let quantity;
let bookStatus;
let checkCount=0;
let bookLost=0;
let outOfBook=0;
do {
    check = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)").trim().toLowerCase();
    if(check==="không"){
        console.log("Kết thúc chương trình");
        
    }else if(check==="có"){
        checkCount++;
        do {
            bookCode=prompt("Mã sách");
            if(!bookCode){
                console.log("Mã sách k dc để trống");
            }
        } while (!bookCode);
        bookName=prompt("Nhập tên sách");
        quantity=+prompt("Nhập số lượng sách thực tế trong kho");
        bookStatus=+prompt(`1 - Bình thường (có thể cho mượn)
2 - Mất (không còn trong kho)`);
        if(bookStatus===2){
            console.log("Tăng số sách mất");
            bookLost++;
        }else if(bookStatus===1 && quantity===0){
            console.log("Tăng số sách hết hàng");
            outOfBook++;
        }else if(bookStatus===1 && quantity>=10){
            console.log("Tăng số sách tồn kho nhiều");
            
        }else if(bookStatus===1 && (1<=quantity && quantity<=9)){
            console.log("Tăng số sách tồn kho bình thường");
            
        }
    }else{
        console.log("Lỗi cú pháp!!!");

    }
} while (check!=="không" );

console.log(`
    Tổng số sách đã kiểm kê: ${checkCount} cuốn
    Số sách mất:   ${bookLost} cuốn
    Số sách hết hàng:  ${outOfBook} cuốn
    `);
