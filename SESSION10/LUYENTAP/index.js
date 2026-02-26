let array = [];
// Object;
// Thuộc tính (key - tên của thuộc tính : valule giá trị thuộc tính)
//Khởi tạo Object
let person = {
    id: 0,
    fullName: "minhdinh",
    age: 19,
    sex:"Male",
    // baracketnotation
    "full name": "minhdinh"
};

// 4 phương thứuc làm việc CRUD 

//READ
// cách 1 do notation
console.log(`Tên của bạn là : ${person.fullName}`);

// Bracket notation 
console.log(`Tên của bạn là ${person["full name"]}`);

// CREATE









// Array Object

const players = [
  { id: 0, name: "Đạt bé bỏng", age: 19, goals: -1 },
  { id: 1, name: "Bệu", age: 19, goals: 0 },
];

// In ra màn hình các cầu thủ ghi bàn phản lưới nhà (goal < 0)
let listPlayer = players.filter((player) => {
  return player.goals < 0;
});

console.log(listPlayer);

