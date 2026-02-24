const playerNames = [
  "Messi",
  "Ronaldo",
  "Neymar",
  "De Bruyne",
  "Kante",
  "Van Dijk",
  "Alisson"
];

const getUpperNames=(arr)=>{
let newArr = arr.map(name => {
   return name.toUpperCase()
  })
    return newArr
}