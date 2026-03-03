let warriors = [
  { id: "W001", name: "Musashi", class: "Samurai", attack: 85, defense: 180 },
  { id: "W002", name: "Ragnar", class: "Viking", attack: 92, defense: 160 },
  { id: "W003", name: "Spartacus", class: "Gladiator", attack: 80, defense: 65 },
  { id: "W004", name: "Lancelot", class: "Knight", attack: 75, defense: 85 },
  { id: "W005", name: "Leonidas", class: "Spartan", attack: 88, defense: 72 }
];

let choice;

const displayMenu = () => {
    let menu = `
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
    choice = +prompt(menu);
}

do {
    displayMenu();

    const displayGuild = (arrayWarriors) => {
        let resultDisplay = arrayWarriors.map((el, index) => {
            return `${index}: ID: ${el.id} - Name: ${el.name} - Class: ${el.class} - Attack: ${el.attack} - Defense: ${el.defense} \n`
        });
        console.log(resultDisplay.join(""));
    }

    const createNewWarriors = (arrayWarriors) => {
        let newWarriors = {};
        let arrayIdExisted = arrayWarriors.map((el) => {
            return el.id.toLowerCase();
        });
        
        let IdNew;
        do {
            IdNew = prompt("Please input id of warriors").trim();
            if (!IdNew) {
                alert("ID empty");
            } else if (arrayIdExisted.includes(IdNew.toLowerCase())) {
                IdNew = null;
                alert("ID existed");
            }
        } while (!IdNew || IdNew == null);
        newWarriors.id = IdNew;

        let arrayNameExisted = arrayWarriors.map((el) => {
            return el.name.toLowerCase();
        });
        let newName;
        do {
            newName = prompt("Please input name of warriors");
            if (!newName) {
                alert("Name empty");
            } else if (arrayNameExisted.includes(newName.toLowerCase().trim())) {
                alert("Name existed");
            }
        } while (!newName);
        newWarriors.name = newName;

        let newClass;
        do {
            newClass = prompt("Please input class of warriors");
            if (!newClass) {
                alert("class empty");
            } else if (newClass != "Samurai" && newClass != "Viking" && newClass != "Gladiator" && newClass != "Ninja" && newClass != "Knight" && newClass != "Spartan") {
                newClass = null;
                alert("Class invalid");
            }
        } while (!newClass || newClass == null);
        newWarriors.class = newClass;

        let newAttack;
        do {
            newAttack = +prompt("Please input attack of warriors");
            if (!newAttack || !Number.isInteger(newAttack) || newAttack < 0 || newAttack > 100) {
                newAttack = null;
                alert("Attack invalid");
            }
        } while (newAttack == null);
        newWarriors.attack = newAttack;

        let newDefense;
        do {
            newDefense = +prompt("Please input defense of warriors");
            if (!newDefense || !Number.isInteger(newDefense) || newDefense < 0 || newDefense > 100) {
                newDefense = null;
                alert("Defense invalid");
            }
        } while (newDefense == null);
        newWarriors.defense = newDefense;

        arrayWarriors.push(newWarriors);
        alert(`Create ${newName} successfull`);
    }

    const deleteWarrior = (arrayWarriors) => {
        let idDelete = prompt("Please input id of warriors you want to delete");
        let indexId = arrayWarriors.findIndex((el) => {
            return el.id == idDelete.trim();
        });
        if (indexId == -1) {
            alert("ID NOT FOUND");
        } else {
            if (confirm(`Are you sure detele ${arrayWarriors[indexId].name}?`)) {
                arrayWarriors.splice(indexId, 1);
            } else {
                alert("Delete cancelled");
            }
        }
    }

    const updateWarior = (arrayWarriors) => {
        let nameSearch = prompt("Please input name of warriors you want to update");
        let indexNameUpdate = arrayWarriors.findIndex((el) => {
            return el.name.toLowerCase() == nameSearch.toLowerCase().trim();
        });
        if (indexNameUpdate == -1) {
            alert("Name not found");
        } else {
            let newAttack;
            do {
                newAttack = +prompt("Please input attack of warriors");
                if (!newAttack || !Number.isInteger(newAttack) || newAttack < 0 || newAttack > 100) {
                    newAttack = null;
                    alert("Attack invalid");
                }
            } while (newAttack == null);
            arrayWarriors[indexNameUpdate].attack = newAttack;

            let newDefense;
            do {
                newDefense = +prompt("Please input defense of warriors");
                if (!newDefense || !Number.isInteger(newDefense) || newDefense < 0 || newDefense > 100) {
                    newDefense = null;
                    alert("Defense invalid");
                }
            } while (newDefense == null);
            arrayWarriors[indexNameUpdate].defense = newDefense;
        }
    }

    const searchWarrior = (arrayWarriors) => {
        let choiceSearch = prompt("Do you want to search by name or by class").toLowerCase().trim();
        let search = prompt(`Please input ${choiceSearch == "name" ? "name" : "class"} of warrior`).toLowerCase().trim();
        let indexFind = arrayWarriors.findIndex((el) => {
            return el.class.toLowerCase() == search || el.name.toLowerCase() === search;
        });
        if (indexFind == -1) {
            alert(`${choiceSearch == "name" ? `Not found anyone named "${search}"` : `Not found anyone belonging to the class that is "${search}"`}`);
        } else {
            console.log(`Name: ${arrayWarriors[indexFind].name} - Class: ${arrayWarriors[indexFind].class} - Attack: ${arrayWarriors[indexFind].attack} - Defense: ${arrayWarriors[indexFind].defense}`);
        }
    }

    const countTotalPower = (arrayWarriors) => {
        let totalAttack = arrayWarriors.reduce((acc, cur) => {
            return acc + cur.attack;
        }, 0);
        let totalDefense = arrayWarriors.reduce((acc, cur) => {
            return acc + cur.defense;
        }, 0);
        console.log(`Current total guild strength: Total attack: ${totalAttack} | Total defense: ${totalDefense}`);
    }

    switch (choice) {
        case 1:
            displayGuild(warriors);
            break;
        case 2:
            createNewWarriors(warriors);
            break;
        case 3:
            deleteWarrior(warriors);
            break;
        case 4:
            updateWarior(warriors);
            break;
        case 5:
            searchWarrior(warriors);
            break;
        case 6:z
            countTotalPower(warriors);
            break;
        case 0:
            alert("Goodbye");
            break;
        default:
            alert("Error! Please input from 0 to 9");
            break;
    }

} while (choice !== 0);