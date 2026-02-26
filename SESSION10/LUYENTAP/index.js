let array = [];
console.log(typeof array);

// object: thuộc tính(key-tên của thuộc tính: value-giá trị của thuộc tính)

// khởi tạo object
let person = {};
let person_v2 = {
  id: 0,
  fullName: "Đạt bé bỏng",
  age: 18,
  gender: "Male",
};
console.log(person_v2);

// CRUD
// read

// Dot notation vs Bracket notation
// c1: Dot
console.log(person_v2.fullName);
// c2: bracket
console.log(person_v2["fullName"]);

// create
person_v2.email = "rgvhbjnk@gmail.com";

person_v2.handlehandleSayHello = () => {
  console.log("Xin chao cac ban");
};

console.log(person_v2.handlehandleSayHello());

// update
person_v2.age = 21;

// delete
delete person_v2.fullName;
console.log(person_v2);

let animalDog = {
  name: "Join",
  age: 2,
};
let animalCat = {
  ...animalDog,
  id: 0,
};

// array object

const player = [
  { id: 0, name: "Dat", age: 18, goal: -1 },
  { id: 1, name: "ghj", age: 18, goal: 11 },
];

let listPlayer = player.filter((el, index) => {
  return el.goal < 0;
});
listPlayer.forEach((player) => {
  console.log(`${player.name}- ${player.goal}`);
});

// object loong nhau
let person_max = {
  id: 1,
  fullName: {
    firstName: "Dat",
    LastName: "Nguyen",
  },
};
console.log(person_max.fullName.firstName);

// Duyeet qua object

console.log(Object.keys(person_v2));

console.log(Object.entries(person_v2));
