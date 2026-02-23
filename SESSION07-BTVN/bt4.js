let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];
let result;
function printTeamRoster(){
    for(let i=0;i<players.length;i++){
    result=players[i].split("-");
    console.log(`Mã ${result[0]} - Tên ${result[1]} - Vị trí ${result[2]}`);
    }
}
printTeamRoster();
function countPlayerByPostion(players, result){
    let countGoalkeeper=0; 
    let countDefender=0; 
    let countMidfielder=0 
    let countStriker=0; 
    for(let i=0;i<players.length;i++){
        result=players[i].split("-")[2];
        switch (result) {
            case "Thủ môn":
                countGoalkeeper++;
                break;
            case "Hậu vệ":
                countDefender++;
                break;
            case "Tiền vệ":
                countMidfielder++;
                break;
            case "Tiền đạo":
                countStriker++;
                break;
        }
    }
    console.log(`Thủ môn: ${countGoalkeeper}, Hậu vệ: ${countDefender}, Tiền vệ: ${countMidfielder}, Tiền đạo: ${countStriker}` );
    
}
countPlayerByPostion(players, result);
function goalkeeper(players, result){
    for(let i=0;i<players.length;i++){
        result=players[i].split("-")[2];
        if(result[i] === "Thủ môn"){
            return true;
        }

    }
    return false
}
if(goalkeeper){
    console.log("Có thủ môn");
    
}