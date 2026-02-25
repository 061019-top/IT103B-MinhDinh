let orders = [
    "Đơn hàng A",
    "Đơn hàng B",
    "Đơn hàng C",
    "Đơn hàng D",
    "Đơn hàng E",
];
let revenues = [1500, 2800, 1200, -500, 3200];
let newarray = [];
for (let index = 0; i < orders.length; index++) {
   newArray.push(orders[index] + " mang về " + revenues[index] + " USD");
}
console.log(newarray)
