let playerIds = ["P001", "P002", "P003", "P004", "P005"];
let playerNames = [
  "Nguyễn Văn A",
  "Trần Thị B",
  "Lê Văn C",
  "Phạm Văn D",
  "Hoàng Thị E",
];
let playerJerseyNumbers = [10, 7, 8, 9, 11];

let idSearch = prompt("Nhập mã cầu thủ muốn cập nhật");
updatePlayerNameAndJersey(playerIds, playerNames, playerJerseyNumbers);
console.log("Cầu thủ hiện tại:");
printTeamRoster();

function printTeamRoster() {
  for (let i = 0; i < playerIds.length; i++) {
    console.log(`
${i + 1}. ${playerIds[i]} - ${playerNames[i]} - Số áo: ${playerJerseyNumbers[i]}`);
  }
}

function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {
  for (let i = 0; i < playerId.length; i++) {
    if (playerIds.includes(idSearch)) {
      newName = prompt("Nhập tên mới cho cầu thủ");
      playerNames[playerId.indexOf(idSearch)] = newName;
      newJerseyNumber = prompt("Nhập số áo mới");
      playerJerseyNumbers[playerId.indexOf(idSearch)] = newJerseyNumber;
      break;
    } else {
      alert("Không tìm thấy cầu thủ với mã này!");
      break;
    }
  }
}
