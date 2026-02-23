let playerIds = [];
let playerPositions = [];
let numberPlayers;
do {
  numberPlayers = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng? ");
  if (!Number.isInteger(numberPlayers)) {
    alert("Mời nhập số nguyên!!!");
  }
} while (!Number.isInteger(numberPlayers));

for (let i = 0; i < numberPlayers; i++) {
  let id;
  do {
    id = prompt(`Nhập mã cầu thủ  thứ ${i + 1}`).trim();
    if (playerIds.indexOf(id) !== -1) {
      alert("Mã cầu thủ trùng lặp");
    }
  } while (playerIds.indexOf(id) !== -1);
  playerIds.push(id);

  let positions = +prompt(
    `Nhập vị trí của cầu thủ thứ ${i + 1} (chọn số: 1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo)`,
  );
  switch (positions) {
    case 1:
      playerPositions[i] = "Thủ môn";
      break;
    case 2:
      playerPositions[i] = "Hậu vệ";

      break;
    case 3:
      playerPositions[i] = "Tiền vệ";

      break;
    case 4:
      playerPositions[i] = "Tiền đạo";

      break;

    default:
      alert("Lỗi cú pháp!!!");
      break;
  }
}

function printTeamRoster() {
  console.log(`Đội bóng hiện tại (${numberPlayers} cầu thủ):`);

  for (let i = 0; i < numberPlayers; i++) {
    console.log(`
${i + 1}. ${playerIds[i]} - ${playerPositions[i]} 
            `);
  }
}

printTeamRoster();
function findPlayersByPosition(positionSearch) {
  if (positionSearch === 1) {
    console.log(
      `Số cầu thủ ở vị trí Thủ môn: ${numberPosition(playerPositions, "Thủ môn")}`,
    );
    console.log(
      `Các chỉ số cầu thủ ở vị trí Thủ môn: ${indexPosition(playerPositions, "Thủ môn")}`,
    );
  } else if (positionSearch === 2) {
    console.log(
      `Số cầu thủ ở vị trí Hậu vệ: ${numberPosition(playerPositions, "Hậu vệ")}`,
    );
    console.log(
      `Các chỉ số cầu thủ ở vị trí Hậu vệ: ${indexPosition(playerPositions, "Hậu vệ")}`,
    );
  } else if (positionSearch === 3) {
    console.log(
      `Số cầu thủ ở vị trí Tiền vệ: ${numberPosition(playerPositions, "Tiền vệ")}`,
    );
    console.log(
      `Các chỉ số cầu thủ ở vị trí Tiền vệ: ${indexPosition(playerPositions, "Tiền vệ")}`,
    );
  } else if (positionSearch === 4) {
    console.log(
      `Số cầu thủ ở vị trí Tiền đạo: ${numberPosition(playerPositions, "Tiền đạo")}`,
    );
    console.log(
      `Các chỉ số cầu thủ ở vị trí Tiền đạo: ${indexPosition(playerPositions, "Tiền đạo")}`,
    );
  } else {
    alert("Không tồn tại vị trí trên");
  }
}
let positionSearch = +prompt(
  `Nhập vị trí của cầu thủ cần tìm (chọn số: 1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo)`,
);

findPlayersByPosition(positionSearch);

// hàm tìm số cầu thủ
/**
 *
 * @param {*} positionArray mảng vị trí cầu thủ
 * @param {*} position vị trí cần tính
 * @returns số lượng cầu thủ
 */
function numberPosition(positionArray, position) {
  let count = 0;
  for (let i = 0; i < numberPlayers; i++) {
    if (positionArray[i] === position) {
      count++;
    }
  }
  return count;
}

// hàm tìm index cầu thủ
/**
 *
 * @param {*} positionArray mảng vị trí cầu thủ
 * @param {*} position vị trí của thủ môn cần tìm
 * @returns vị trí của thủ môn
 */
function indexPosition(positionArray, position) {
  let indexPlayers = [];
  for (let i = 0; i < numberPlayers; i++) {
    if (positionArray[i] === position) {
      indexPlayers.push(i);
    }
  }
  return indexPlayers;
}
