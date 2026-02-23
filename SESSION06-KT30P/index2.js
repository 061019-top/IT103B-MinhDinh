let price = [100, 200, 300, 400]
for (let value of price) {
  console.log(value)
}
for (let index in price) {
  console.log(index)
}
let sum = 0
for (let i = 0; i < price.length; i++) {
  if (i % 2 == 0) {
    sum = sum + price[i]
  }
}
console.log(sum)
