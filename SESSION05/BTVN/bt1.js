let list = [];
let n = Number(prompt("Bạn muốn trả bao nhiêu cuốn sách"));
for(let i = 0; i < n; i++){
    let name = prompt(`Nhập tên cuốn sách thứ ${i+1}:`);
    list.push(name);
}
console.log(`Tổng số sách đã được trả: ${list.length}`);
console.log("Danh sách sách đã trả:");
for(let i = 0; i < list.length; i++){
    console.log(`${i+1}. ${list[i]}`);
}