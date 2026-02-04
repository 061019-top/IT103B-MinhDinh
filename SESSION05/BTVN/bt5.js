let bookIds = [];
let bookNames = [];
let categories = [];
let quantities = [];

let totalBooks = Number(prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay? "));

for(let i = 0; i < totalBooks; i++){
    let id;
    let isDuplicate;
    do {
        isDuplicate = false;
        id = prompt(`Nhập mã sách thứ ${i+1}:`);
        for(let j = 0; j < bookIds.length; j++){
            if(bookIds[j] === id){
                isDuplicate = true;
                alert("Mã sách bị trùng! Vui lòng nhập lại.");
                break;
            }
        }
        if(id === "") {
             alert("Mã sách không được để trống!");
             isDuplicate = true;
        }
    } while (isDuplicate);

    let name = prompt(`Nhập tên sách thứ ${i+1}:`);
    let category = prompt(`Nhập các thể loại của sách thứ ${i+1} (các thể loại cách nhau bởi dấu phẩy):`);
    let quantity = Number(prompt(`Nhập số lượng tồn kho của sách thứ ${i+1}:`));

    bookIds.push(id);
    bookNames.push(name);
    categories.push(category);
    quantities.push(quantity);
}

let count = 0;
for(let i = 0; i < totalBooks; i++){
    if(categories[i].toLowerCase().includes("lập trình")){
        count++;
    }
}
console.log(`Tổng số sách thuộc thể loại 'Lập trình': ${count}`);

console.log("Danh sách mã sách thuộc cả hai thể loại 'JavaScript' và 'Web':");
for(let i = 0; i < totalBooks; i++){
    if(categories[i].includes("JavaScript") && categories[i].includes("Web")){
        console.log(bookIds[i]);
    }
}

if(totalBooks > 0){
    let minQuantity = quantities[0];
    let index = 0;
    for(let i = 1; i < totalBooks; i++){
        if(quantities[i] < minQuantity){
            minQuantity = quantities[i];
            index = i;
        }
    }
    console.log("Loại sách có số lượng tồn kho thấp nhất:");
    console.log(`Mã sách: ${bookIds[index]}, Tên sách: ${bookNames[index]}, Tồn kho: ${quantities[index]}`);
}