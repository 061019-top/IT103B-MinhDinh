const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper"
];

const filterPlayersByPosition=(position, players)=>{
let arrF = players.filter(item => {
    let p = item.split(" - ")[1]
   return p == position
  })
    return arrF
}