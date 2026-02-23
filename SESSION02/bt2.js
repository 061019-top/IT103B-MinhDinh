let quantity  = prompt("Nhap so luong sach trong thu vien");

if(quantity<10){
    console.log("Thư viện có ít sách")
}else if(10<= quantity && quantity<=20){
    console.log("Thư viện có số lượng sách vừa đủ")
}else{
    console.log("Thư viện có nhiều sách")
}