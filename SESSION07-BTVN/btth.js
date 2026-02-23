
let choice;
const players=[];
const goals=[];
/**
 * @description Hàm thêm thông tin cầu thủ kèm theo bàn thắng
 * @param {*} playerName Tên cầu thủ
 * @param {*} goal Số bàn thắng của cầu thủ đó
 * @author Minh Đinh
 */
const addPlayers=(playerName,goal)=>{
            // thêm tên và số bàn thắng vào mảng
            players.push(playerName);
            goals.push(goal);
            alert("Thêm thành công"); 
}
/**
 * @description In ra danh sách cầu thủ và bàn thắng của họ
 */
const showSquad = () =>{
    // Duyệt qua 1 mảng bất kì do 2 mảng luôn luôn có số lượng phần tử bằng nhau
    if(players.length===goals.length){
        for(let i=0;i<players.length;i++){
            console.log(`${1+i}. ${players[i]} - ${goals[i]}`);
            
        }
    }else
        alert("Dữ liệu không hợp lệ. Hãy kết thúc chương trình và nhập lại")
};


const getTotalGoals = () =>{
    let total=0;
    for(let i =0;i<players.length;i++){
        total+=goals[i]
    }
    return total;
}

/**
 * @description Hàm tìm ra cầu thủ có số bàn lớn nhất
 * @returns trả về tên cầu thủ có số bàn lớn nhất
 */
const findMostGoals=() =>{
    let max=goals[0];
    let maxIndex=0;
    for (let i = 0; i < players.length; i++) {
        if(goals[i]>max){
            max=goals[i];
            maxIndex=i;
        }
    }
    return players[maxIndex];
}

do {
    choice=+prompt(`
--- QUẢN LÝ ĐỘI BÓNG ---
1. Nhập cầu thủ mới
2. Xem danh sách đội hình
3. Xem thành tích toàn đội
4. Tìm Vua phá lưới
0. Thoát`)

    switch (choice) {
        case 1:
          // lấy tên và số bàn thắng 
        const playerName=prompt("Nhập tên cầu thủ");
        const goal=+prompt("Nhập số bàn thắng");
        addPlayers(playerName,goal);
            break;
        case 2:
            showSquad();
            break;
        case 3:
            const totalGoal = getTotalGoals();
            console.log(" Tổng số bàn thắng", totalGoal);
            
            break;
        case 4:
            let playerKing=findMostGoals();
            console.log("Cầu thủ có số bàn lớn cao nhất là:" ,playerKing);
            
            break;
        case 0:
            
            break;
    
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại")
            break;
    }
} while (choice!==0);