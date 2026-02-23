let players = [];
let playerId=[];
let playerName=[];
let playerPositions=[];
let numberPlayers=+prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?");
for(let i=0;i<numberPlayers;i++){
    playerId[i]=prompt("Nhập mã cầu thủ");
    playerName[i]=prompt("Nhập tên cầu thủ");
    let positions=+prompt(`Nhập vị trí của cầu thủ (chọn số: 1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo)`);
    switch (positions) {
        case 1:
            playerPositions[i]="Thủ môn"
            break;
        case 2:
            playerPositions[i]="Hậu vệ"
            
            break;
        case 3:
            playerPositions[i]="Tiền vệ"

            break;
        case 4:
            playerPositions[i]="Tiền đạo"
          
            break;
    
        default:
            alert("Lỗi cú pháp!!!");
            break;
    }

}

function pushPlayer(id, name, position){
    for(let i=0;i<numberPlayers;i++){
        players[i]=`Mã ${id[i]} - Tên ${name[i]} - Vị trí ${position[i]}`
    }
    return players
}

function printTeamRoster(){
    for (let i = 0; i < players.length; i++) {
        console.log(players[i]);
    }
}

pushPlayer(playerId, playerName, playerPositions);
printTeamRoster();