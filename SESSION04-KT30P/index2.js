let tong = 0
let j
for (j = 1; j <= 50; j++) {
    if (j % 3 === 0 && j % 5 === 0) {
        console.log("FizzBuzz")
    } else if (j % 3 === 0) {
        console.log("Fizz")
        tong = tong + j
    } else if (j % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(j)
    }
}
console.log("Tong cac so in ra chu Fizz: " + tong)
