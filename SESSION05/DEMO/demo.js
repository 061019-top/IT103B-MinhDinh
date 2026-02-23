const numbers = [1, 2, 4, 8, 7, 3];
console.log("number", numbers);

// các thông tin cơ bản của mảng

// cách lấy độ dài của mảng
console.log("độ dài cảu mảng là", numbers.length);

// cách truy xuất phần tử trong mảng
console.log("phần tử của mảng : ", numbers[0]);

// duyệt mảng
for (let index = 0; index < numbers.length; index++) {
  // i đại diện cho chỉ số phần tử trong mảng
  // giát trị phần tử
  console.log("phần tử thứ ", index + "là ", numbers[index]);
}

//  Các thoa tháo làm việc với mảng (CRUD)

// Thêm phầ tử vào cuối mảng
numbers.push(7, 8, 9);
console.log("mảng sau khi push cuối mảng", numbers);

// Thêm phần tử vào đàu mảng
numbers.unshift(-1, 0)
console.log("mảng sau khi unshift ", numbers);

// Chèn phần tử 
numbers.splice(1, 0, 100)
console.log("mảng sau khi splice(chèn)" , numbers);

// Thao tác đọc (duyệt mảng)


// Cập nhật giá trị trong mảng
numbers[1]=200;
console.log("numbers sau khi thay đỏi giá trị: ", numbers);


//    Xóa phần tử trong mảng
//   Xóa phần tử ở đầu mảng
const numberDeleteStart = numbers.shift();

console.log("numbers sau khi shift: ", numbers);
console.log("Phần tử vừa xóa là: ", numberDeleteStart);
 
//   Xóa phần tử ở cuối mảng
const numberDeleteEnd = numbers.pop();

console.log("numbers sau khi pop: ", numbers);
console.log("Phần tử vừa xóa là: ", numberDeleteEnd);

//  Xóa phần tử ở 1 vị trí chỉ định
numbers.splice(1, 1);
console.log("numbers sau khi xóa tại vị trí 1: ", numbers);

//  Tìm kiếm phần tử
const resultSearch = numbers.includes(6);
console.log("resultSearch: ", resultSearch);

// Nối mảng 
const firstArray = [1, 2, 3, 4, 5];
const secondArray = [6, 7, 8, 9, 10];

const thirdArray = firstArray.concat(secondArray);

console.log("Mảng sau khi nối: ", firstArray);

// Chuyển đổi từ chuỗi thành mảng 
const fullName = "Nguyễn Văn Nam Khánh An Tâm";

fullName.split(" ");

console.log(
  "Kết quả sau khi chuyển đổi: ",
  fullNameArray[fullNameArray.length - 1],
);

// Chuyển từ mảng thành chuỗi
const str = ["H", "e", "l", "l", "o"];
console.log(str.join(""));