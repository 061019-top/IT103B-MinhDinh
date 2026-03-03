let inventory = [
    { id: 1, name: "iPhone 15 Pro Max", price: 30000000, quantity: 50, company: "Apple" },
    { id: 2, name: "iPhone 13", price: 14500000, quantity: 20, company: "Apple" },
    { id: 3, name: "iPhone 11", price: 8000000, quantity: 15, company: "Apple" },
    { id: 4, name: "Samsung Galaxy S24 Ultra", price: 28000000, quantity: 40, company: "Samsung" },
    { id: 5, name: "Samsung Galaxy A55", price: 10000000, quantity: 60, company: "Samsung" },
    { id: 6, name: "Samsung Galaxy Z Fold5", price: 35000000, quantity: 10, company: "Samsung" },
    { id: 7, name: "Xiaomi 14 Ultra", price: 22000000, quantity: 30, company: "Xiaomi" },
    { id: 8, name: "Redmi Note 13 Pro", price: 7500000, quantity: 100, company: "Xiaomi" },
    { id: 9, name: "Oppo Find X7", price: 18000000, quantity: 25, company: "Oppo" }
];


  let choice
const  displayMenu=()=>{
  let menu=`
1. Hiển thị danh sách điện thoại theo hãng (Ví dụ: Samsung, Apple, Xiaomi…)
2. Thêm điện thoại mới vào cửa hàng (Nhập thông tin: id, tên điện thoại, giá, số lượng, hãng)
3. Tìm kiếm điện thoại theo tên hoặc id
4. Mua điện thoại (Nhập id điện thoại cần mua và số lượng, cập nhật lại cửa hàng)
5. Thanh toán tất cả điện thoại trong giỏ hàng (Thông báo thanh toán thành công, và xóa toàn bộ giỏ hàng)
6. Sắp xếp điện thoại theo giá:
  a) Tăng dần
  b) Giảm dần
7. Hiển thị tổng số tiền của các điện thoại trong kho
8. Hiển thị tổng số lượng điện thoại theo từng hàng (VD: samsung - 5,iphone - 3,...)
9. Thoát chương trình`
  choice=+prompt(menu)
}


  // 1. Hiển thị danh sách điện thoại theo hãng (Ví dụ: Samsung, Apple, Xiaomi…)
    const displayPhonesByCompany=(arrayPhones)=>{
      let companySearch=prompt("Please input companyn of phone you want to display:")
      let displayArrayPhone=arrayPhones.filter((el)=>{
        return el.company.toLowerCase().includes(companySearch.toLowerCase().trim())
      })
      let resultDisplay=displayArrayPhone.map((el)=>{
        return `ID: ${el.id} - Name: ${el.name} - Price: ${el.price} - Quantity: ${el.quantity} - Company: ${el.company} \n`
      })
        if(displayArrayPhone.length===0){
          alert(`Not found "${companySearch}"`)
        }else{
          alert(resultDisplay.join(""))
        }
    }

  // 2. Thêm điện thoại mới vào cửa hàng (Nhập thông tin: id, tên điện thoại, giá, số lượng, hãng)
    let idOrigin=9
    const addNewPhone=(arrayPhones)=>{
      let newPhone={}
      // id
      idOrigin++
      newPhone.id=idOrigin
      // name
      let nameNewPhone=""
      do {
        nameNewPhone=prompt("Please input name of phone").trim()
        if(!nameNewPhone){
          alert("Invalid name of phone")
        }
      } while (!nameNewPhone);
      newPhone.name=nameNewPhone
      // company
      let companyNewPhone=""
      do {
        companyNewPhone=prompt("Please input company of phone").trim()
        if(!companyNewPhone){
          alert("Invalid company of phone")
        }
      } while (!companyNewPhone);
      newPhone.company=companyNewPhone
      // price
      let priceNewPhone=""
      do {
        priceNewPhone=+prompt("Please input price of phone")
        if(!priceNewPhone || !Number.isInteger(priceNewPhone) || priceNewPhone<0){
          alert("Invalid price of phone")
          priceNewPhone=null
        }
      } while (priceNewPhone===null);
      newPhone.price=priceNewPhone
      // quantity
      let quantityNewPhone=""
      do {
        quantityNewPhone=+prompt("Please input quantity of phone")
        if(!quantityNewPhone || !Number.isInteger(quantityNewPhone) || quantityNewPhone<0){
          alert("Invalid quantity of phone")
          quantityNewPhone=null
        }
      } while (quantityNewPhone===null);
      newPhone.quantity=quantityNewPhone
      // newPhone
      arrayPhones.push(newPhone)

    }

  // 3. Tìm kiếm điện thoại theo tên hoặc id
    const findPhoneByIdOrName=(arrayPhones)=>{
      let searchPhone=prompt("Please input id or name of phone you wnat to find")
      let arraySearchPhone=arrayPhones.filter((el)=>{
        return el.id===+searchPhone || el.name.toLowerCase().includes(searchPhone.toLowerCase().trim())
      })
      if(arraySearchPhone.length==0){
        alert(`Not found "${searchPhone}"`)
      }else{
        let arrayResultSearch=arraySearchPhone.map((el)=>{
          return `ID: ${el.id} - Name: ${el.name} - Price: ${el.price} - Quantity: ${el.quantity} - Company: ${el.company} \n`
        })
          alert(arrayResultSearch.join(""))
      }
    }

  // 4. Mua điện thoại (Nhập id điện thoại cần mua và số lượng, cập nhật lại cửa hàng)
  let cart=[]
  let idcart=1;
  const buyPhone=(arrayPhones,arrCart)=>{
    let newCart={}
    
  }











  do {
    displayMenu()
    switch (choice) {
      case 1:
        displayPhonesByCompany(inventory)
        break;
      case 2:
        addNewPhone(inventory)
        break;
      case 3:
        findPhoneByIdOrName(inventory)
        break;
      case 4:
        
        break;
      case 5:
        
        break;
      case 6:
        
        break;
      case 7:
        
        break;
      case 8:
        
        break;
      case 9:
        
        break;
    
      default:
        break;
    }
  } while (choice!==9);