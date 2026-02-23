let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Bặng Văn G-Thủ môn",
];
function getShortestPlayerName(){
    let shortName=[];
    let min=1000;
    for(let i=0;i<players.length;i++){
        let name=players[i].split("-")[1];
        if(name.length<min){
            min=name.length
            shortName=name
    }
}
return shortName;  
}
console.log("Tên của cầu thủ có tên ngắn nhất");

console.log(getShortestPlayerName());
let length=+prompt("nhập số bất kỳ");
function countPlayersWithPositionLengthGreaterThan(length){
    let countPlayers=0;
    for(let i=0;i<players.length;i++){
        let positionPlayers=players[i].split("-")[2];
        if(positionPlayers.length>length){
            countPlayers++;
        }
    }
    return countPlayers;
}
console.log(countPlayersWithPositionLengthGreaterThan(length));
