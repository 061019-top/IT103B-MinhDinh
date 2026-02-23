let list = [];
let n = Number(prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?"));
for(let i = 0; i < n; i++){
    let name = prompt(`Nhập tên cuốn sách bị trả muộn thứ ${i+1}:`);
    list.push(name);
}
console.log(`Tổng số sách bị trả muộn: ${list.length}`);
console.log("Danh sách sách bị trả muộn:");
for(let i = 0; i < list.length; i++){
    console.log(`${i+1}. ${list[i]}`);
}
let count = 0;
for(let i = 0; i < list.length; i++){
    if(list[i].length > 20){
        count++;
    }
}
console.log(`Số lượng sách có tên dài hơn 20 ký tự: ${count}`);