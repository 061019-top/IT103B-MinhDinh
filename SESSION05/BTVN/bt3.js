let booksId = [];
let booksName = [];
let inventoryQuantity = [];
let n = Number(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay? "));
for (let i = 0; i < n; i++) {
    let id = prompt(`Nhập mã sách thứ ${i + 1}:`);
    let name = prompt(`Nhập tên sách thứ ${i + 1}:`);
    let qty = Number(prompt(`Nhập số lượng tồn kho sách thứ ${i + 1}:`));
    booksId.push(id);
    booksName.push(name);
    inventoryQuantity.push(qty);
}
console.log(`Danh sách sách cần xem xét bổ sung (${booksId.length} loại):`);
let countLow = 0;
let outOfStock = "";
for (let i = 0; i < booksId.length; i++) {
    console.log(`${i + 1}. Mã: ${booksId[i]} - Tên: ${booksName[i]} - Còn: ${inventoryQuantity[i]} bản`);

    if (inventoryQuantity[i] <= 5) {
        countLow++;
    }

    if (inventoryQuantity[i] === 0) {
        outOfStock += booksId[i] + " ";
    }
}
console.log(`
Số sách có tồn kho ≤ 5 bản: ${countLow} loại
Các mã sách đã hết hàng (0 bản): ${outOfStock}
`);