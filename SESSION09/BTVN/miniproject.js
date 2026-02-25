let names = ["iPhone", "Samsung", "Oppo", "Xiaomi", "Nokia"];
let prices = [1700, 300, 430, 880, 980];
let stocks = [20, 17, 8, 0, 13];
let choice;

do {
  choice = +prompt(`--- HỆ THỐNG QUẢN LÝ KHO HÀNG ---
1. Lọc sản phẩm cao cấp (>500)
2. Kiểm định trạng thái dữ liệu (Hết hàng/Giá sàn)
3. Phân tích giá trị vốn hóa (Tổng tài sản)
4. Triển khai chiến dịch chiết khấu (Giảm 10%)
5. Truy vấn sản phẩm theo từ khóa
6. Báo cáo tình trạng tồn kho
7. Thoát chương trình

Vui lòng nhập lựa chọn của bạn (1-7):`);

  const filterVipGood = (name, price) => {
    let good = name.filter((el, index) => {
      return price[index] > 500;
    });
    alert(`Danh sách các sản phẩm cao cấp (>500):\n${good}`);
  };

  const checkStatus = (price, stock) => {
    let request1 = stock.some((el) => el === 0);
    let request2 = price.every((el) => el > 100);

    if (request1) {
      alert("Có sản phẩm hết hàng");
    } else {
      alert("Không có sản phẩm nào hết hàng");
    }

    if (request2) {
      alert("Tất cả sản phẩm giá > 100");
    } else {
      alert("Vẫn còn sản phẩm giá < 100");
    }
  };

  const totalPrice = (price, stock) => {
    let totalArray = price.map((el, index) => el * stock[index]);
    let total = totalArray.reduce((acc, cur) => acc + cur, 0);
    alert(`Tổng giá trị tài sản hiện có trong kho: ${total} USD`);
  };

  const discountPrice = (price) => {
    return price.map((el) => el - el / 10);
  };

  const findGood = (searchGood, nameGood) => {
    let findArray = [];
    nameGood.forEach((el, index) => {
      if (el.toLowerCase().includes(searchGood.toLowerCase().trim())) {
        findArray.push(
          `${names[index]} - Giá:${prices[index]} - Kho:${stocks[index]}\n`,
        );
      }
    });
    return findArray.join("");
  };

  const checkStock = (name, stock) => {
    let resultStock = stock.map((el) => (el > 0 ? "Còn hàng" : "Hết hàng"));
    let report = "";
    name.forEach((el, index) => {
      report += `${el}: ${resultStock[index]} (${stock[index]})\n`;
    });
    alert(`Báo cáo tồn kho:\n${report}`);
  };

  switch (choice) {
    case 1:
      filterVipGood(names, prices);
      break;
    case 2:
      checkStatus(prices, stocks);
      break;
    case 3:
      totalPrice(prices, stocks);
      break;
    case 4:
      prices = discountPrice(prices);
      alert("Đã cập nhật giảm giá 10% cho toàn bộ sản phẩm");
      break;
    case 5:
      let searchItem = prompt("Nhập tên sản phẩm bạn muốn tìm kiếm");
      let searchResult = findGood(searchItem, names);
      if (searchResult) {
        alert(searchResult);
      } else {
        alert("Không tìm thấy sản phẩm");
      }
      break;
    case 6:
      checkStock(names, stocks);
      break;
    case 7:
      alert("Đã thoát chương trình. Hẹn gặp lại");
      break;
    default:
      alert("Lỗi! Mời bạn nhập lại!!!!");
      break;
  }
} while (choice !== 7);
