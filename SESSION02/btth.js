let userName = prompt("Nhap ten nguoi dung");
let roleName = prompt("Nhập một trong các từ: admin, student, guest");
const ADMIN = "admin";
const STUDENT = "student";
const GUEST = "guest";
let balance = 0;
let cardStatus ="";
let exprirationDate=0;
let totalPrice = 0;
let messergerRole ="";
let resultBorrow ="";

switch (roleName.trim().toLowerCase()) {
    case ADMIN:
        console.log("Chào Admin, bạn có toàn quyền hệ thống");
        messergerRole="Chào Admin, bạn có toàn quyền hệ thống";
        resultBorrow="KHÔNG ĐƯỢC PHÉP MƯỢN SÁCH";
        break;

    case STUDENT:
        console.log("Chào sinh viên, bạn có thể mượn sách");    
        messergerRole = "Chào sinh viên, bạn có thể mượn sách";
        balance = +prompt("Nhap so du tai khoan");
        cardStatus = prompt("Nhap trang thai the thu vien(Nhập true nếu đang hoạt động, hoặc để rỗng/nhập khác để coi như bị khóa)");
        exprirationDate =+prompt("Nhap so ngay qua han tra sach");
            if(userName && balance>=0 && cardStatus===true){
                console.log("ĐƯỢC PHÉP MƯỢN SÁCH"); 
                resultBorrow="ĐƯỢC PHÉP MƯỢN SÁCH";
                if(exprirationDate===0){
                    console.log("Cảm ơn bạn đã trả đúng hạn");
                }else if(1<= exprirationDate && exprirationDate <=5){
                    console.log("So tien phat:", exprirationDate*5000,"VND");
                    totalPrice=exprirationDate*5000;
                }else if(6<= exprirationDate && exprirationDate <=10){
                    console.log("So tien phat:", exprirationDate*10000,"VND");                    
                    totalPrice=exprirationDate*10000;
                }else {
                    console.log("So tien phat:200000 VND");  
                    totalPrice=200000;
                    console.log("TÀI KHOẢN BỊ KHÓA");                  
                }
            }else{
                if(!userName){
                    console.log("Ten khong duoc de trong!!!");
                }else if(balance<0){
                    console.log("Tai khoan ban khong du!!!!");
                }else if (cardStatus!=="true"){
                    console.log("The ban dang bi khoa!!!");
                }else{
                    console.log("Loi khong xac dinh");
                }
            }       
        break;

    case GUEST:
        console.log("Chào khách, bạn chỉ có thể đọc tại chỗ");
        messergerRole="Chào khách, bạn chỉ có thể đọc tại chỗ";
        resultBorrow="KHÔNG ĐƯỢC PHÉP MƯỢN SÁCH";
        break;

    default:
        console.log("Lỗi: Vai trò không hợp lệ!");
        
        
        break;
}
console.log(`
            --- HỆ THỐNG MƯỢN TRẢ ---

            Người dùng: ${userName}

            Quyền hạn: ${messergerRole}

            Kết quả mượn: ${resultBorrow}   

            Tình trạng trả sách: ${exprirationDate===0?console.log("Bạn đã trả đúng hạn"):console.log(`Quá hạn: ${exprirationDate} ngày`)}

            Tiền phạt: ${totalPrice} VNĐ  

    
    `)