let reservation;
let reservationCount=0;
let userName;
let bookCode;
let bookName;
let dateReservation;
let prioritize;
let failureReservation=0;
let successReservation=0;
let reviewReservation=0;

do {
    reservation=prompt("Có yêu cầu đặt mượn trước mới không? (có/không)").trim().toLowerCase();
    if(reservation==="không"){
        console.log("Kết thúc chương trình");
        
    }else if(reservation==="có"){
        reservationCount++;
        userName=prompt("Nhập tên người đặt trước");
        bookCode=prompt("Nhập mã sách muốn đặt trước");
        bookName=("Nhập tên sách muốn đặt trước");
        dateReservation=+prompt("Số ngày dự kiến chờ");
        prioritize=+prompt(`1 = Sinh viên bình thường 
2 = Giảng viên/Nghiên cứu sinh 
3 = Nhân viên thư viện / Đặc cách!!`);
            if(dateReservation>45){
                console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
                failureReservation++;
            }else if(prioritize===3){
                console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
                successReservation++;
            }else if(prioritize===2 && dateReservation<=30){
                console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
                successReservation++;
            }else if(prioritize===1 && dateReservation<=21){
                console.log("Đặt trước thành công");
                successReservation++;
            }else{
                console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
                reviewReservation++;
            }
    }else{
        console.log("Lỗi cú pháp!!!");
        
    }

} while ( reservation!=="không");


console.log(`
    Tổng số yêu cầu đã xử lý: ${reservationCount}
    Số yêu cầu được đặt trước thành công:${successReservation}
    Số yêu cầu bị từ chối: ${failureReservation}
    Số yêu cầu chờ xét duyệt: ${reviewReservation}

    `);
