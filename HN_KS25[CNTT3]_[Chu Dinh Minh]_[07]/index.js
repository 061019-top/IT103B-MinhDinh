let students = [
  {
    id: "SV1",
    name: "Nguyễn Văn Nam",
    mathScore: 7,
    literatureScore: 8,
    englishScore: 9,
    averageScore: 8,
  },
  {
    id: "SV2",
    name: "Đoàn Ngọc Sơn",
    mathScore: 6,
    literatureScore: 7,
    englishScore: 8,
    averageScore: 7,
  },
  {
    id: "SV3",
    name: "Chu Đình Minh",
    mathScore: 5,
    literatureScore: 6,
    englishScore: 7,
    averageScore: 6,
  },
  {
    id: "SV4",
    name: "Lương Tuấn Dũng",
    mathScore: 4,
    literatureScore: 5,
    englishScore: 6,
    averageScore: 5,
  },
  {
    id: "SV5",
    name: "Phan Duy Tùng",
    mathScore: 3,
    literatureScore: 4,
    englishScore: 5,
    averageScore: 4,
  }
];

let choice;

const displayMenu = () => {
    let menu = `
      HỆ THỐNG QUẢN LÝ SINH VIÊN
1. Hiển thị danh sách sinh viên
2. Thêm sinh viên
3. Xóa sinh viên
4. Cập nhật thông tin sinh viên
5. Tìm kiếm sinh viên
6. Phân loại học lực
7. Tính điểm trung bình cả lớp
8. Sắp xếp sinh viên theo điểm trung bình
9. Tìm kiếm sinh viên theo khoảng điểm
0. Thoát
`
    choice = +prompt(menu);
}

do {
    displayMenu();

    const displayStudents = (arrayStudents) => {
        let resultDisplay = arrayStudents.map((studentItem) => {
            return `ID: ${studentItem.id} - Tên: ${studentItem.name} - Toán: ${studentItem.mathScore} - Văn: ${studentItem.literatureScore} - Anh: ${studentItem.englishScore} - Điểm trung bình: ${studentItem.averageScore} \n`;
        });
        alert("--- DANH SÁCH SINH VIÊN ---\n" + resultDisplay.join(""));
    }

    const addStudent = (arrayStudents) => {
        let newStudent = {};
        let arrayIdExisted = arrayStudents.map((studentItem) => {
            return studentItem.id.toLowerCase();
        });

        let idNew;
        do {
            idNew = prompt("Vui lòng nhập ID sinh viên");
            if (!idNew) {
                alert("ID không được để trống.");
            } else if (arrayIdExisted.includes(idNew.trim().toLowerCase())) {
                idNew = null;
                alert("ID đã tồn tại, vui lòng chọn ID khác.");
            }
        } while (!idNew || idNew == null);
        newStudent.id = idNew.trim();

        let nameNew;
        do {
            nameNew = prompt("Vui lòng nhập tên sinh viên");
            if (!nameNew) {
                alert("Tên sinh viên không được để trống.");
            }
        } while (!nameNew);
        newStudent.name = nameNew.trim();

        let mathNew;
        do {
            mathNew = prompt("Vui lòng nhập điểm toán");
            if (mathNew === null || mathNew.trim() === "" || isNaN(mathNew) || Number(mathNew) < 0 || Number(mathNew) > 10) {
                mathNew = null;
                alert("Điểm các môn phải là số từ 0 đến 10.");
            } else {
                mathNew = Number(mathNew);
            }
        } while (mathNew == null);
        newStudent.mathScore = mathNew;

        let literatureNew;
        do {
            literatureNew = prompt("Vui lòng nhập điểm văn");
            if (literatureNew === null || literatureNew.trim() === "" || isNaN(literatureNew) || Number(literatureNew) < 0 || Number(literatureNew) > 10) {
                literatureNew = null;
                alert("Điểm các môn phải là số từ 0 đến 10.");
            } else {
                literatureNew = Number(literatureNew);
            }
        } while (literatureNew == null);
        newStudent.literatureScore = literatureNew;

        let englishNew;
        do {
            englishNew = prompt("Vui lòng nhập điểm anh");
            if (englishNew === null || englishNew.trim() === "" || isNaN(englishNew) || Number(englishNew) < 0 || Number(englishNew) > 10) {
                englishNew = null;
                alert("Điểm các môn phải là số từ 0 đến 10.");
            } else {
                englishNew = Number(englishNew);
            }
        } while (englishNew == null);
        newStudent.englishScore = englishNew;

        newStudent.averageScore = Number(((mathNew + literatureNew + englishNew) / 3).toFixed(2));

        arrayStudents.push(newStudent);
        alert(`Đã thêm sinh viên: ${newStudent.name}`);
    }

    const deleteStudent = (arrayStudents) => {
        let idDelete = prompt("Vui lòng nhập mã sinh viên cần xóa");
        if (!idDelete) return;
        let indexId = arrayStudents.findIndex((studentItem) => {
            return studentItem.id.toLowerCase() == idDelete.trim().toLowerCase();
        });

        if (indexId == -1) {
            alert("Mã sinh viên không tồn tại");
        } else {
            if (confirm(`Bạn có chắc chắn muốn xóa sinh viên ${arrayStudents[indexId].name} hay không?`)) {
                arrayStudents.splice(indexId, 1);
                alert("Xóa sinh viên thành công!");
            }
        }
    }

    const updateStudent = (arrayStudents) => {
        let idUpdate = prompt("Vui lòng nhập mã sinh viên cần cập nhật");
        if (!idUpdate) return;
        let indexId = arrayStudents.findIndex((studentItem) => {
            return studentItem.id.toLowerCase() == idUpdate.trim().toLowerCase();
        });

        if (indexId == -1) {
            alert("Mã sinh viên không tồn tại!");
        } else {
            let nameNew;
            do {
                nameNew = prompt("Vui lòng nhập tên sinh viên mới");
                if (!nameNew) {
                    alert("Tên sinh viên không được để trống.");
                }
            } while (!nameNew);
            arrayStudents[indexId].name = nameNew.trim();

            let mathNew;
            do {
                mathNew = prompt("Vui lòng nhập điểm toán mới");
                if (mathNew === null || mathNew.trim() === "" || isNaN(mathNew) || Number(mathNew) < 0 || Number(mathNew) > 10) {
                    mathNew = null;
                    alert("Điểm các môn phải là số từ 0 đến 10.");
                } else {
                    mathNew = Number(mathNew);
                }
            } while (mathNew == null);
            arrayStudents[indexId].mathScore = mathNew;

            let literatureNew;
            do {
                literatureNew = prompt("Vui lòng nhập điểm văn mới");
                if (literatureNew === null || literatureNew.trim() === "" || isNaN(literatureNew) || Number(literatureNew) < 0 || Number(literatureNew) > 10) {
                    literatureNew = null;
                    alert("Điểm các môn phải là số từ 0 đến 10.");
                } else {
                    literatureNew = Number(literatureNew);
                }
            } while (literatureNew == null);
            arrayStudents[indexId].literatureScore = literatureNew;

            let englishNew;
            do {
                englishNew = prompt("Vui lòng nhập điểm anh mới");
                if (englishNew === null || englishNew.trim() === "" || isNaN(englishNew) || Number(englishNew) < 0 || Number(englishNew) > 10) {
                    englishNew = null;
                    alert("Điểm các môn phải là số từ 0 đến 10.");
                } else {
                    englishNew = Number(englishNew);
                }
            } while (englishNew == null);
            arrayStudents[indexId].englishScore = englishNew;

            arrayStudents[indexId].averageScore = Number(((mathNew + literatureNew + englishNew) / 3).toFixed(2));
            
            alert(`Đã cập nhật sinh viên: ${arrayStudents[indexId].name}`);
        }
    }

    const searchStudent = (arrayStudents) => {
        let idSearch = prompt("Nhập mã sinh viên cần tìm:");
        if (!idSearch) return;
        let studentFound = arrayStudents.find(studentItem => studentItem.id.toLowerCase() == idSearch.trim().toLowerCase());
        
        if (!studentFound) {
            alert("Mã sinh viên không tồn tại");
        } else {
            alert(`ĐÃ TÌM THẤY:\nID: ${studentFound.id} - Tên: ${studentFound.name} - Điểm trung bình: ${studentFound.averageScore}`);
        }
    }

    const classifyStudent = (arrayStudents) => {
        let rank = prompt("Nhập loại học lực muốn lọc (Giỏi, Khá, Trung Bình):");
        if (!rank) return;
        let rankLower = rank.trim().toLowerCase();
        
        if (rankLower != "giỏi" && rankLower != "khá" && rankLower != "trung bình") {
            alert("Học lực không hợp lệ");
            return;
        }

        let filteredList = arrayStudents.filter((studentItem) => {
            if (rankLower == "giỏi") return studentItem.averageScore >= 8;
            if (rankLower == "khá") return studentItem.averageScore >= 6.5 && studentItem.averageScore < 8;
            if (rankLower == "trung bình") return studentItem.averageScore < 6.5;
        });

        if (filteredList.length == 0) {
            alert(`Không có sinh viên nào đạt loại ${rank}`);
        } else {
            let resultText = filteredList.map(studentItem => `ID: ${studentItem.id} - Tên: ${studentItem.name} - Điểm trung bình: ${studentItem.averageScore}`).join("\n");
            alert(`--- DANH SÁCH SINH VIÊN LOẠI ${rank.toUpperCase()} ---\n${resultText}`);
        }
    }

    const calculateClassAverage = (arrayStudents) => {
        if (arrayStudents.length == 0) {
            alert("Lớp chưa có sinh viên");
            return;
        }
        let totalAverage = arrayStudents.reduce((total, currentStudent) => {
            return total + currentStudent.averageScore;
        }, 0);
        let classAverage = (totalAverage / arrayStudents.length).toFixed(2);
        alert(`Điểm trung bình của cả lớp là: ${classAverage}`);
    }

    switch (choice) {
        case 1:
            displayStudents(students);
            break;
        case 2:
            addStudent(students);
            break;
        case 3:
            deleteStudent(students);
            break;
        case 4:
            updateStudent(students);
            break;
        case 5:
            searchStudent(students);
            break;
        case 6:
            classifyStudent(students);
            break;
        case 7:
            calculateClassAverage(students);
            break;
        case 8:
            break;
        case 9:
            break;
        case 0:
            alert("Thoát chương trình");
            break;
        default:
            alert("Lỗi! Vui lòng nhập từ 0 đến 9");
            break;
    }

} while (choice !== 0);