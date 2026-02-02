let n = 20
let i
if (n % 2 === 0) {
    console.log("So " + n + " la so chan")
} else {
    console.log("So " + n + " la so le")
}
if (n > 0) {
    console.log("So " + n + " la so duong")
} else if (n < 0) {
    console.log("So " + n + " la so am")
} else {
    console.log("So " + n + " bang 0")
}
if (n > 0) {
    i = 1
    do {
        console.log(i)
        i++
    } while (i <= n)
} else {
    console.log("Gia tri n khong hop le de tao day so")
}
