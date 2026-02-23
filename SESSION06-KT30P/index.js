let sudentlist = "Quý, Nam, Lan, Hùng, Nam"
let student = sudentlist.split(", ")
student.reverse()
if (student.includes("Lan")) {
  console.log("tên Lan tồn tại trong mảng")
} else {
  console.log("tên Lan không tồn tại trong mảnh")
}
let namindex = student.indexOf("Nam")
console.log(namindex)
