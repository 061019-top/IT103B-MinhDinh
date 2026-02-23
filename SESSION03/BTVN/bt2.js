let bookReturn; 
let person;
let bookName;
let dateReturn;
let returnLate=0;
do {
    bookReturn= +prompt("Hôm nay có bao nhiêu lượt trả sách?");
} while (bookReturn<0);

for(let i=1;i<=bookReturn;i++){
    person=prompt("Tên người trả");
    bookName=prompt(`Tên sách thứ ${i}`);
    do {
        dateReturn=+prompt("Số ngày đã mượn thực tế")
    } while (dateReturn<0 || !Number.isInteger(dateReturn));
    
    if(dateReturn<=14){
        console.log("Trả đúng hạn");
        
    }else if(15<=dateReturn && dateReturn<=21){
        console.log("Trả muộn nhẹ");
        console.log("Phạt nhắc nhở");
        returnLate++;
    }else{
        console.log("Quá hạn nghiêm trọng");
        console.log("Cần ghi biên bản phạt")
        returnLate++;
    }
}
console.log("Tổng số lượt trả sách",bookReturn);
console.log("Số lượt trả muộn",returnLate);


