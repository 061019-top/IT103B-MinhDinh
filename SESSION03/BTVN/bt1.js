let bookTurn;
let person;
let bookName;
let dateBorrow;
let borrowDone=0;
do {
    bookTurn =+prompt("Hôm nay có bao nhiêu lượt mượn sách? (số nguyên dương)");
} while (bookTurn<0);
for(let i=1;i<=bookTurn;i++){
    person=prompt("Nhập tên người mượn");
    bookName = prompt(`Nhập tên sách thứ ${i}`);
    do {
        dateBorrow =prompt("Số ngày mượn (từ 1 đến 30 ngày)");
    } while (dateBorrow<0 || dateBorrow>30);
    if(dateBorrow>14){
        console.warn("Thời gian mượn vượt quy định (tối đa 14 ngày)");
        alert("Mượn thất bại");
    }else{
        console.log("Mượn thành công");
        alert("Mượn thành công");
        borrowDone++;
    }
}
    console.log(`Tổng số lần mượn thành công: ${borrowDone}`);