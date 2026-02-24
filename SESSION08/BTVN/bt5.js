const players = [
  "Messi - Forward - 25 - 15",
  "Ronaldo - Forward - 30 - 10",
  "Neymar - Forward - 18 - 20",
  "De Bruyne - Midfielder - 8 - 25",
  "Kante - Midfielder - 2 - 10",
  "Van Dijk - Defender - 5 - 3",
  "Alisson - Goalkeeper - 0 - 1"
];

const reportTopPerformers = (min, arr) => {
let listStr = arr.map(item => {
    let p = item.split(" - ")
   let totalPts = Number(p[2]) + Number(p[3])
     return { name: p[0], pts: totalPts }
  }).filter(x => x.pts >= min)
  .map(x => x.name + ": " + x.pts)

  listStr.forEach(s => console.log(s))

  let sumAll=listStr.reduce((sum, item)=>{
      let num = item.split(": ")[1]
     return sum + Number(num)
  }, 0)

  console.log("Tổng hiệu suất: " + sumAll)
  return sumAll
}