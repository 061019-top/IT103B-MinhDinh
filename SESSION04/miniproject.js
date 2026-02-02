let user;
let pass;
let fail = 0;
do {
    user = prompt("Mời bạn nhập tài khoản:");
    pass = prompt("Mời bạn nhập mật khẩu:");
    if (user === "admin" && pass === "12345") {
        alert("Đăng nhập thành công!");
        break;
    } else {
        fail++;
        if (user !== "admin" && pass !== "12345") {
            alert(`Sai cả tài khoản và mật khẩu! Bạn còn ${3-fail} lần thử.`);
        } else if (pass !== "12345") {
            alert(`Sai mật khẩu! Bạn còn ${3-fail} lần thử.`);
        } else if (user !== "admin") {
            alert(`Sai tài khoản! Bạn còn ${3-fail} lần thử.`);
        }
        if (fail === 3) {
            alert("Tài khoản đã bị khóa do nhập sai quá 3 lần");
        }
    }
} while (fail < 3);

let opt;
do {
    let list = `
--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---
1. Phân loại mã số sách (Chẵn/Lẻ)
2. Thiết kế sơ đồ kho sách (Dạng lưới)
3. Dự toán phí bảo trì sách theo năm
4. Tìm mã số sách may mắn
5. Thoát
Vui lòng nhập lựa chọn của bạn (1-5):
`
    opt = +prompt(list);
    switch (opt) {
        case 1:
            let id;
            let total = 0;
            let odd = 0;
            let even = 0;
            do {
                id = +prompt("Nhập các mã số sách (Nhập 0 để dừng lại):");
                if (id === 0) {
                    break;
                } else {
                    total++;
                    if (id % 2 === 0) {
                        even++;
                    } else {
                        odd++;
                    }
                    if (isNaN(id)) {
                        alert("Vui lòng nhập số nguyên hợp lệ");
                    } else if (id === null) {
                        alert("Lựa chọn không hợp lệ, vui lòng thử lại");
                    }
                }
            } while (id !== 0);
            console.log(`
--- Kết quả phân loại mã sách ---
- Tổng số lượng mã sách đã nhập: ${total}
- Số mã chẵn (Sách khoa học): ${even}
- Số mã lẻ (Sách nghệ thuật): ${odd}
            
                `);
            alert("Đã phân loại xong! Xem kết quả tại Console (F12).")
            break;

        case 2:
            let r = Number(prompt("Nhập số hàng của kho:"));
            let c = Number(prompt("Nhập số cột của kho:"));

            if (isNaN(r) || isNaN(c) || r <= 0 || c <= 0) {
                alert("Số hàng và cột phải là số dương");
                break;
            }

            console.log(`--- Bản đồ kho sách (${r}x${c}) ---`);
            for (let i = 1; i <= r; i++) {
                let str = "";
                for (let j = 1; j <= c; j++) {
                    let pos = `[${i}-${j}]`;
                    if (i === j) {
                        pos += "(Kệ ưu tiên)";
                    }
                    str += pos + "  ";
                }
                console.log(str);
            }
            alert("Đã in bản đồ kho ra Console (F12).");
            break;

        case 3:
            let qty = Number(prompt("Nhập số lượng sách hiện có:"));
            let cost = Number(prompt("Nhập phí bảo trì cho 1 cuốn (VNĐ):"));
            let y = Number(prompt("Nhập số năm dự toán:"));

            if (isNaN(qty) || isNaN(cost) || isNaN(y)) {
                alert("Dữ liệu nhập vào phải là số!");
                break;
            }

            console.log("--- Dự toán phí bảo trì sách theo năm ---");
            let sum;
            for (let i = 1; i <= y; i++) {
                sum = qty * cost;
                console.log(
                    `Năm ${i}: ${sum.toLocaleString()} VNĐ (Đơn giá: ${cost.toFixed(0)}/cuốn)`,
                );

                cost = cost * 1.1;
            }
            alert("Đã hoàn thành bảng dự toán tại Console.");
            break;

        case 4:
            let n = Number(
                prompt("Bạn muốn kiểm tra các mã sách từ 1 đến bao nhiêu? (Nhập N):"),
            );

            if (isNaN(n) || n <= 0) {
                alert("Vui lòng nhập số N dương");
                break;
            }

            let count = 0;
            let res = "";

            console.log(
                `--- Danh sách mã sách may mắn (Bội số của 3, không chia hết cho 5) ---`,
            );
            for (let i = 1; i <= n; i++) {
                if (i % 3 === 0 && i % 5 !== 0) {
                    res += i + " ";
                    count++;
                }
            }

            console.log(res || "Không có mã nào thỏa mãn.");
            console.log(`=> Tổng cộng có ${count} mã may mắn.`);
            alert(`Tìm thấy ${count} mã may mắn. Xem chi tiết tại Console.`);
            break;

        case 5:
            alert("Hệ thống đang đăng xuất Hẹn gặp lại");
            break;

        default:
            alert("Lựa chọn không hợp lệ,vui lòng thử lại");
            break;
    }
} while (opt !== 5);