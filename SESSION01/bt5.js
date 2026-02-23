let bookName = prompt("Nhập ten sách");
let publish = +prompt("Nhập năm xuất bản của sách");

let bookAge = new Date().getFullYear() - publish;

console.log(`
    Sách: <${bookName}>
    Năm xuất bản: <${publish}>
    Tuổi của sách: <${bookAge}> năm`);
