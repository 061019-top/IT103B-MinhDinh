let bookName = prompt("Nhập tên của sách");
let bookCode = prompt("Nhập số thứ tự của sách trong thư viện");

let standardizationBookName = bookName.trim().toUpperCase();

console.log(`
    Tên sách gốc: <${bookName}>
    Mã sách sau chuẩn hóa: <LIB-${standardizationBookName}-${bookCode}>`);
