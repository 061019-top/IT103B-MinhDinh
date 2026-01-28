let tenSachInput = prompt("Mời nhập tên sách (Ví dụ: lap trinh javascript):");
let tenTacGiaInput = prompt("Mời nhập tên tác giả:");
let namXuatBan = Number(prompt("Mời nhập năm xuất bản:"));
let giaTien = Number(prompt("Mời nhập giá tiền:"));
let soLuong = Number(prompt("Mời nhập số lượng:"));

let tenSachChuan = tenSachInput.trim().toUpperCase();
let tacGiaChuan = tenTacGiaInput.toUpperCase();

let baKyTuDau = tacGiaChuan.substring(0, 3);
let soNgauNhienID = Math.floor(Math.random() * 1000) + 1;
let maSach = baKyTuDau + namXuatBan + "-" + soNgauNhienID;

let namHienTai = 2026;
let tuoiSach = namHienTai - namXuatBan;
let tongGiaTri = giaTien * soLuong;
let keSachGoiY = Math.floor(Math.random() * 10) + 1;

console.log(`--- PHIẾU NHẬP KHO ---`);
console.log(`Mã sách: ${maSach}`);
console.log(`Tên sách: ${tenSachChuan}`);
console.log(`Tác giả: ${tacGiaChuan}`);
console.log(`Năm xuất bản: ${namXuatBan}`);
console.log(`Tuổi sách: ${tuoiSach} năm`);
console.log(`Tổng giá trị: ${tongGiaTri} VNĐ`);
console.log(`Ngăn kệ gợi ý: Kệ số ${keSachGoiY}`);