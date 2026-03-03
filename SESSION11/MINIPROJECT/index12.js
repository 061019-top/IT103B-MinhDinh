let warriors = [
  { id: "W001", name: "Musashi", class: "Samurai", attack: 85, defense: 180 },
  { id: "W002", name: "Ragnar", class: "Viking", attack: 92, defense: 160 },
  { id: "W003", name: "Spartacus", class: "Gladiator", attack: 80, defense: 65 },
  { id: "W004", name: "Lancelot", class: "Knight", attack: 75, defense: 85 },
  { id: "W005", name: "Leonidas", class: "Spartan", attack: 88, defense: 72 }
];

    let choice
const displayMenu=()=>{
    let menu=`
=========================================
   ANCIENT WARRIORS GUILD - QUẢN LÝ GUILD
==========================================
1. Hiển thị danh sách chiến binh hiện tại
2. Thêm chiến binh mới
3. Xóa chiến binh
4. Cập nhật thông tin chiến binh
5. Tìm kiếm chiến binh (theo tên hoặc class)
6. Tính tổng sức mạnh guild (attack + defense)
7. Sắp xếp danh sách theo attack
8. Kiểm tra độ cân bằng guild theo class
9. Mô phỏng trận chiến 1v1
0. Thoát chương trình
==========================================`
    choice=+prompt(menu)
}

    do {
        displayMenu()

// 1.	Khởi tạo guild - Hiển thị danh sách guild : Hệ thống phải có một danh sách chiến binh ban đầu (ít nhất 4 chiến binh) với đầy đủ thông tin, đại diện cho các class khác nhau – Có thể lấy data mẫu như sau hoặc tự viết data: 
// o	Hiển thị toàn bộ chiến binh: id, tên, class, attack, defense.
// o	Định dạng rõ ràng (bảng hoặc list có thứ tự)
        const displayGuild=(arrayWarriors)=>{
            let resultDisplay=arrayWarriors.map((el, index)=>{
                return `${index}: ID: ${el.id} - Name: ${el.name} - Class: ${el.class} - Attack: ${el.attack} - Defense: ${el.defense} \n`
            })
            console.log(resultDisplay.join(""))
        }

// 2.	Thêm chiến binh
// o	Kiểm tra xem id đã tồn tại trong guild chưa nếu đã tồn tại in ra thông báo lỗi 
// o	Kiểm tra xem name chiến binh đã có trong guild chưa (không phân biệt hoa thường) nếu lỗi in ra ("Tên chiến binh đã có trong guild.")
// o	Kiểm tra tính hợp lệ của attack ( Phải từ 1 -> 100 nếu lỗi thì in ra thông báo chỉ số tấn công không hợp lệ)
// o	Kiểm tra tính hợp lệ của defense (Defense phải là số và lớn hơn hoặc bằng 0 nếu không thỏa mãn in ra không thỏa mãn ) 
// o	Kiểm tra tính hợp lệ của class: ( class bắt buộc phải là một trong những class sau : 'Samurai', 'Viking', 'Gladiator', 'Ninja', 'Knight', 'Spartan' nếu không phải in ra lỗi )
// o	Nếu tất cả điều kiện hợp lệ → thêm chiến binh vào guild và thông báo ở console: "Đã thêm chiến binh: <tên> vào guild!"
        const createNewWarriors=(arrayWarriors)=>{
            let newWarriors={}
            let arrayIdExisted=arrayWarriors.map((el)=>{
                return el.id.toLowerCase()
            })  
            // id
            let IdNew
            do {
                IdNew=prompt("Please input id of warriors").trim()
                if (!IdNew) {
                    alert("ID empty")
                }else if(arrayIdExisted.includes(IdNew.toLowerCase())){
                    IdNew=null
                    alert("ID existed")
                }
            } while (!IdNew || IdNew==null);
            newWarriors.id=IdNew
            // name
            let arrayNameExisted=arrayWarriors.map((el)=>{
                return el.name.toLowerCase()
            })  
            let newName
            do {
                newName=prompt("Please input name of warriors")
                if (!newName) {
                    alert("Name empty")
                }else if(arrayNameExisted.includes(newName.toLowerCase().trim())){
                    alert("Name existed")
                }
            } while (!newName);
            newWarriors.name=newName
            // class
            let newClass
            do {
                newClass=prompt("Please input class of warriors")
                if (!newClass) {
                    alert("class empty")
                }else if (newClass!="Samurai" && newClass!="Viking" && newClass!="Gladiator" && newClass!="Ninja"&& newClass!="Knight" && newClass!="Spartan"){
                    newClass=null
                    alert("Class invalid")
                }
            } while (!newClass || newClass==null);
            newWarriors.class=newClass
            // attack
            let newAttack
            do {
                newAttack=+prompt("Please input attack of warriors")
                if(!newAttack || !Number.isInteger(newAttack) || newAttack<0 || newAttack>100){
                    newAttack=null
                    alert("Attack invalid")
                }
            } while (newAttack==null);
            newWarriors.attack=newAttack
            // defense
            let newDefense
            do {
                newDefense=+prompt("Please input defense of warriors")
                if(!newDefense || !Number.isInteger(newDefense) || newDefense<0 || newDefense>100){
                    newDefense=null
                    alert("Defense invalid")
                }
            } while (newDefense==null);
            newWarriors.defense=newDefense
            // newWarrior
            arrayWarriors(newWarriors)
            alert(`Create ${newName} successfull`)
        }

// 3.	Xóa chiến binh
// o	Xóa theo name chiến binh
// o	Kiểm tra tên có tồn tại không
// 	Nếu không: console "Chiến binh <tên> không có trong guild."
// 	Nếu có: yêu cầu xác nhận (yes/no)
// 	Đồng ý: Xóa và console “Đã xóa chiến binh <tên> thành công!”
// 	Không: console “Đã hủy thao tác xóa.”
        const deleteWarrior=(arrayWarriors)=>{
            let idDelete=prompt("Please input id of warriors you want to delete")
            let indexId=arrayWarriors.findIndex((el)=>{
                return el.id == idDelete.trim()
            })
            if (indexId==-1) {
                alert("ID NOT FOUND")
            }else{
                if(confirm(`Are you sure detele ${arrayWarriors[indexId].name}?`)){
                     arrayWarriors.splice(indexId,1)
                }else{
                    alert("Delete cancelled")
                }
            }
        }

// 4.	Cập nhật thông tin chiến binh
// o	Cập nhật theo name
// o	Nếu không tồn tại: console “Chiến binh <tên> không có trong guild!”
// o	Nếu tồn tại:
// 	Cho phép cập nhật attack và defense
// 	Validation tương tự phần thêm (attack 1-100, defense >=0)
// 	Hợp lệ → cập nhật và console: “Đã cập nhật chiến binh: <tên>”
        const updateWarior=(arrayWarriors)=>{
            let nameSearch=prompt("Please input name of warriors you want to update")
            let indexNameUpdate=arrayWarriors.findIndex((el)=>{
                return el.name.toLowerCase()== nameSearch.toLowerCase().trim()
            })
            if(indexNameUpdate==-1){
                alert("Name not found")
            }else {
                // attack
                let newAttack
            do {
                newAttack=+prompt("Please input attack of warriors")
                if(!newAttack || !Number.isInteger(newAttack) || newAttack<0 || newAttack>100){
                    newAttack=null
                    alert("Attack invalid")
                }
            } while (newAttack==null);
            arrayWarriors[indexNameUpdate].attack=newAttack
            // defense
            let newDefense
            do {
                newDefense=+prompt("Please input defense of warriors")
                if(!newDefense || !Number.isInteger(newDefense) || newDefense<0 || newDefense>100){
                    newDefense=null
                    alert("Defense invalid")
                }
            } while (newDefense==null);
            arrayWarriors[indexNameUpdate].defense=newDefense
            }
        }

// o	Tìm theo name hoặc class
// 	Theo tên:
// 	Không tìm thấy: “Không tìm thấy chiến binh nào tên <tên>.”
// 	Tìm thấy: hiển thị chi tiết “Chiến binh: <tên>, Class: <class>, Attack: <attack>, Defense: <defense>”
// 	Theo class:
// 	Không có: “Không có chiến binh nào thuộc class <class>.”
// 	Có: hiển thị danh sách (tên, attack, defense)
        const searchWarrior=(arrayWarriors)=>{
            let choiceSearch=prompt("Do you want to search by name or by class").toLowerCase().trim()
            let search=prompt(`Please input ${choice=="name" ? "name" : "class"} of warrior`).toLowerCase().trim()
            let indexFind=arrayWarriors.findIndex((el)=>{
                return el.class.toLowerCase()==search || el.name.toLowerCase()===search
            })
            if(indexFind==-1){
                alert(`${choiceSearch=="name" ? `Not found anyone named "${search}"` : `Not found anyone belonging to the class that is "${search}"`}`)
            }else{
                console.log(`Name: ${arrayWarriors[indexFind].name} - Class: ${arrayWarriors[indexFind].class} - Attack: ${arrayWarriors[indexFind].attack} - Defense: ${arrayWarriors[indexFind].defense}`);
            }
            
        }

// 6.	Tính tổng sức mạnh guild
// o	Tổng attack của tất cả chiến binh
// o	Tổng defense của tất cả chiến binh
// o	Console: “Tổng sức mạnh guild hiện tại: Tổng attack: <tổng> | Tổng defense: <tổng>”
        const countTotalPower=(arrayWarriors)=>{
            let totalAttack=arrayWarriors.reduce((acc, cur)=>{
                return acc+cur.attack
            },0)
            let totalDefense=arrayWarriors.reduce((acc, cur)=>{
                return acc+cur.defense
            },0)
            console.log(`Current total guild strength: Total attack: ${totalAttack} | Total defense: ${totalDefense}`);
        }

// 7.	Sắp xếp guild theo chỉ số
// o	Tăng dần theo attack: hiển thị danh sách sau sắp xếp
// o	Giảm dần theo attack: hiển thị danh sách sau sắp xếp
        const sortByAttack=(arrayWarriors)=>{
            let choiceSort=+prompt("Enter 1 to sort increase and 2 to reverse")
            let arraySort=arrayWarriors.toSorted((el1,el2)=>{
                return el1.attack-el2.attack
            })
            switch (choiceSort) {
                case 1:
                    console.log("Guild after sort increase:");
                    displayGuild(arraySort);
                    break;
                case 2:
                    console.log("Guild after sort decrease:");
                    displayGuild(arraySort.toReversed());
                    break;
                default:
                    alert("Error!!!")
                    break;
            }
        }

// 8.	Kiểm tra độ cân bằng guild theo class (Class Coverage Check)
// o	Phân tích số lượng chiến binh theo từng class.
// o	Hiển thị báo cáo:
// 	Tất cả class có trong guild và số lượng (ví dụ: "Samurai: 2 chiến binh" "Viking: 1 chiến binh" "Gladiator: 0 chiến binh" – hiển thị cả 0 để chỉ lỗ hổng)
// o	Cảnh báo:
// 	Nếu class nào chiếm ≥ 50% guild → "Cảnh báo: Guild thiên về class <class> quá nhiều (<số lượng> chiến binh), dễ bị khắc chế bởi các class đối lập!"
// 	Nếu ít hơn 3 class khác nhau → "Guild thiếu đa dạng class! Nên tuyển thêm các class khác để cân bằng đội hình."
// 	Nếu ≥ 4 class khác nhau → "Guild khá cân bằng về class! Coverage tốt, sẵn sàng cho trận chiến lớn."
        const classCoverageCheck=(arrayWarriors)=>{
            let totalSamurai=0
            let totalViking=0
            let totalGladiator=0
            let totalNinja=0
            let totalKnight=0
            let totalSpartan=0
            arrayWarriors.forEach((el)=>{
                if(el.class=="Samurai"){
                    totalSamurai++
                }else if(el.class=="Viking"){
                    totalViking++
                }else if(el.class=="Gladiator"){
                    totalGladiator++
                }else if(el.class=="Ninja"){
                    totalNinja++
                }else if(el.class=="Knight"){
                    totalKnight++
                }else if(el.class=="Spartan"){
                    totalSpartan++
                }
            })
            let totalClass=totalSamurai+totalViking+totalGladiator+totalNinja+totalKnight+totalSpartan
            let ObjectClass={
                Samurai: totalSamurai,
                Viking: totalViking,
                Gladiator: totalGladiator,
                Ninja: totalNinja,
                Knight: totalKnight,
                Spartan: totalSpartan
            }
                let indexMaxClass=Object.entries(ObjectClass).findIndex((el)=>{
                    return el[1]> totalClass*0.5
                })
                if(indexMaxClass!==-1){
                    console.log(`Guilds that prioritize the ${Object.keys(ObjectClass)[indexMaxClass]} (${Object.values(ObjectClass)[indexMaxClass]} warriors) too much are easily countered by opposing classes!`);
                }
                let NumberClasses=0
                if(totalSpartan==0){
                    NumberClasses++
                }
                if(totalKnight==0){
                    NumberClasses++
                }
                if(totalNinja==0){
                    NumberClasses++
                }
                if(totalGladiator==0){
                    NumberClasses++
                }
                if(totalViking==0){
                    NumberClasses++
                }
                if(totalSamurai){
                    NumberClasses++
                }
                if(NumberClasses<=3){
                    console.log("The guild lacks class diversity! They should recruit more classes to balance the team.");
                }else{
                    console.log("The guild is quite balanced in terms of classes! Good coverage, ready for a big battle.");
                }
        }

// •	Cho phép chọn 2 chiến binh trong guild để mô phỏng trận đấu đơn giản. Kết quả dựa trên chỉ số attack và defense.
// o	Nhập tên chiến binh 1 và tên chiến binh 2 
// o	Kiểm tra cả 2 tồn tại trong guild. 
// o	Nếu không tồn tại → thông báo lỗi tương ứng. 
// o	Tính toán sát thương đơn giản:
// 	    Sát thương gây ra = attack của người tấn công - (defense của đối thủ / 2) (làm tròn xuống)
// 	    Giả sử mỗi bên tấn công 1 lần .
// 	    Ai có defense còn lại cao hơn (hoặc ai gây sát thương nhiều hơn) thì thắng.
        const battleWarrior=(arrayWarriors)=>{
            let arrayWarrior=arrayWarriors.map((el)=>{
                return el.name.toLowerCase()
            })            
            let warrior_1
            let warrior_2
            do {
                warrior_1=prompt("Please input warrior 1")
                if(!warrior_1){
                    alert("warrior empty")
                }else if(!arrayWarrior.includes(warrior_1.toLowerCase().trim())){
                    warrior_1=null
                    alert("Warrior not existed")
                }
            } while (!warrior_1 || warrior_1==null);

            do {
                warrior_2=prompt("Please input warrior 2")
                if(!warrior_2){
                    alert("warrior empty")
                }else if(!arrayWarrior.includes(warrior_2.toLowerCase().trim())){
                    warrior_2=null
                    alert("Warrior not existed")
                }else if(warrior_2.toLowerCase().trim()==warrior_1.toLowerCase().trim()){
                    warrior_2=null
                    alert("You cannot select one warrior at a time.")
                }
            } while (!warrior_2 || warrior_2==null);
            let arrayWarrior_1=arrayWarriors.find((el)=>{
                return el.name.toLowerCase()==warrior_1.toLowerCase().trim()
            })
            let arrayWarrior_2=arrayWarriors.find((el)=>{
                return el.name.toLowerCase()==warrior_2.toLowerCase().trim()
            })
            console.log(arrayWarrior_2);
            
            let round=1
            do {
                let damegeWarrior_1=arrayWarrior_1.attack - Math.floor(arrayWarrior_2.defense/2)
                let damegeWarrior_2=arrayWarrior_2.attack - Math.floor(arrayWarrior_1.defense/2)
                arrayWarrior_1.defense-=damegeWarrior_2
                arrayWarrior_2.defense-=damegeWarrior_1
                console.log(`
Battle: ${arrayWarrior_1.name} (${arrayWarrior_1.class}) vs ${arrayWarrior_2.name} (${arrayWarrior_2.class})
Round: ${round} ${arrayWarrior_1.name} attacks -> deals ${damegeWarrior_1} damage to Ragnar (${arrayWarrior_1.defense} defense remaining)
Round: ${round} ${arrayWarrior_2.name} attacks -> deals ${damegeWarrior_2} damage to Ragnar (${arrayWarrior_2.defense} defense remaining)
`);
                round++
            } while (arrayWarrior_2.defense>=0 && arrayWarrior_1.defense >=0);
            if(arrayWarrior_2.defense<=0){
                console.log(`Result: ${warrior_1} win(remaining defense: ${arrayWarrior_1.defense} vs 0)`);
            }else{
                console.log(`Result: ${warrior_2} win(remaining defense: 0 vs ${arrayWarrior_1.defense})`);
            }
        }

        switch (choice) {
            case 1:
                displayGuild(warriors)
                break;
            case 2:
                createNewWarriors(warriors)
                break;
            case 3:
                deleteWarrior(warriors)
                break;
            case 4:
                updateWarior(warriors)
                break;
            case 5:
                searchWarrior(warriors)
                break;
            case 6:
                countTotalPower(warriors)
                break;
            case 7:
                sortByAttack(warriors)
                break;
            case 8:
                classCoverageCheck(warriors)
                break;
            case 9:
                battleWarrior(warriors)
                break;
            case 0:
                alert("Goodbye")
                break;
        
            default:
                alert("Error! Please input from 0 to 9")
                break;
        }







    } while (choice!==0);