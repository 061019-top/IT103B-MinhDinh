const bookStore = [
  { id: 101, name: "Đắc Nhân Tâm", price: 85000, quantity: 15, category: "Kỹ năng sống" },
  { id: 102, name: "Nhà Giả Kim", price: 79000, quantity: 20, category: "Văn học" },
  { id: 103, name: "Clean Code", price: 350000, quantity: 5, category: "Công nghệ thông tin" },
  { id: 104, name: "Lược Sử Thời Gian", price: 125000, quantity: 8, category: "Khoa học" },
  { id: 105, name: "Harry Potter và Hòn Đá Phù Thủy", price: 195000, quantity: 12, category: "Viễn tưởng" },
  { id: 106, name: "Dế Mèn Phiêu Lưu Ký", price: 45000, quantity: 50, category: "Văn học" }
];

let choice
    const displayMenu=()=>{
        let menu=`
--- HỆ THỐNG QUẢN LÝ NHÀ SÁCH ---
1. Hiển thị sách theo thể loại
2. Thêm sách mới vào kho
3. Tìm kiếm sách theo tên hoặc ID
4. Mua sách (Cập nhật kho & Giỏ hàng)
5. Sắp xếp sách theo giá 
    a: Tăng dần 
    b: Giảm dần
6. Xem giỏ hàng & Tổng tiền thanh toán
7. Hiển thị tổng số lượng sách đang có trong kho
8. Thoát chương trình

Vui lòng nhập lựa chọn của bạn (1-8):`
        choice=+prompt(menu)
    }

    
    // 1. Hiển thị sách theo thể loại
        const displayBookByCategory=(arrayBook)=>{
            let typeSearch=prompt("Enter type of book you want to search")
            let arrayTypeBookSearch=arrayBook.filter((el)=>{
                return el.category.toLowerCase()==typeSearch.toLowerCase().trim()
            })
            let resultDisplayByCategory=arrayTypeBookSearch.map((el)=>{
                return `ID: ${el.id} - Name: ${el.name} - Price: ${el.price} - Quantity: ${el.quantity} - Category: ${el.category} \n`
            })
            if(arrayTypeBookSearch.length==0){
                alert(`Not found category "${typeSearch}"`)
            }else{
                alert(resultDisplayByCategory.join(""))
            }
        }

        // 2. Thêm sách mới vào kho
            let idOrigin=6;
            const addNewBook=(arrayBook)=>{
                idOrigin++
                let newBook={}
                // id
                newBook.id=idOrigin;
                // name
                let nameNewBook=""
                do {
                    nameNewBook=prompt("Please input name of book you want to add")
                    if(!nameNewBook){
                        alert("Invalid name!!!")
                    }
                } while (!nameNewBook);
                newBook.name=nameNewBook
                // price
                let priceNewBook=""
                do {
                    priceNewBook=+prompt("Please input price of book you want to add")
                    if(!priceNewBook || !Number.isInteger(priceNewBook) || priceNewBook<0){
                        alert("Invalid price!!!")
                    }
                } while (!priceNewBook || !Number.isInteger(priceNewBook) || priceNewBook<0);
                newBook.price=priceNewBook
                // quantity
                let quantityNewBook=""
                do {
                    quantityNewBook=+prompt("Please input quantity of book you want to add")
                    if(!quantityNewBook || !Number.isInteger(quantityNewBook) || quantityNewBook<0){
                        alert("Invalid quantity!!!")
                    }
                } while (!quantityNewBook || !Number.isInteger(quantityNewBook) || quantityNewBook<0);
                newBook.quantity=quantityNewBook
                // category
                let categoryNewBook=""
                do {
                    categoryNewBook=prompt("Please input category of book you want to add")
                    if(!categoryNewBook){
                        alert("Invalid category!!!")
                    }
                } while (!categoryNewBook);
                newBook.category=categoryNewBook
                // bookStore
                arrayBook.push(newBook)
            }

        // 3. Tìm kiếm sách theo tên hoặc ID
            const searchBookByIdOrName=(arrayBook)=>{
                let searchBook=prompt("Please input id or name you want to search")
                let arraySearch=arrayBook.filter((el)=>{
                    return el.id==+searchBook.trim() || el.name.toLowerCase()==searchBook.toLowerCase().trim()
                })
                let resultSearch=arraySearch.map((el)=>{
                    return `ID:${el.id} - Name: ${el.name} - Price: ${el.price} - Quantity: ${el.quantity} - Category: ${el.category} \n` 
                })
                if(arraySearch.length==0){
                    alert(`Not found ${searchBook}`)
                }else{
                    alert(resultSearch.join(""))
                }
            }
            
        // 4. Mua sách (Cập nhật kho & Giỏ hàng)
            let cart=[]
            let idCart=1
            const buyBookByName=(arrayBook)=>{
                let nameBookBuy=prompt("Enter name of book you want to buy")
                let indexBookBuy=arrayBook.findIndex((el)=>{
                    return el.name.toLowerCase().includes(nameBookBuy.toLowerCase().trim())
                })
                if(indexBookBuy==-1){
                    alert(`Not found ${nameBookBuy}`)
                }else{
                    let newCart={}
                    newCart.id=idCart
                    idCart++
                    newCart.name=arrayBook[indexBookBuy].name
                    let quantityWantToBuy
                    do {
                        quantityWantToBuy=+prompt("How many book you want to buy")
                        if(!quantityWantToBuy || !Number.isInteger(quantityWantToBuy) || quantityWantToBuy<0){
                            alert("Invalid quantity!!!")
                        }
                        if(arrayBook[indexBookBuy].quantity-quantityWantToBuy<0){
                            alert(`My warehouse not enough ${nameBookBuy} for you`)
                            break
                        }
                    } while (!quantityWantToBuy || !Number.isInteger(quantityWantToBuy) || quantityWantToBuy<0 || arrayBook[indexBookBuy].quantity-quantityWantToBuy<0);
                    newCart.quantity=quantityWantToBuy
                    newCart.price=arrayBook[indexBookBuy].price
                    newCart.category=arrayBook[indexBookBuy].category
                    cart.push(newCart)
                    // logic 
                    arrayBook[indexBookBuy].quantity-=quantityWantToBuy
                }
            }

        // 5. Sắp xếp sách theo giá 
        //     a: Tăng dần 
        //     b: Giảm dần
            const sortBookByPrice=(arrayBook)=>{
                let choiceSort=prompt(`
How would you like to arrange it?
    a, Gradually increase
    b, Gradually decreasing`).toLowerCase().trim()
                    let arraySortBook=arrayBook.toSorted((el1,el2)=>{
                        return el1.price-el2.price
                    })
                    let resultSort=arraySortBook.map((el)=>{
                        return `ID: ${el.id} - Name: ${el.name} - Price: ${el.price} - Quantity: ${el.quantity} - Category: ${el.category} \n`
                    })
                    switch (choiceSort) {
                        case "a":
                            alert(resultSort.join(""))
                            break;
                        case "b":
                            alert(resultSort.toReversed().join(""))
                            break;
                    
                        default:
                            break;
                    }
            }

        // 6. Xem giỏ hàng & Tổng tiền thanh toán
            const disPlayCartAndCaculate=(arrayCart)=>{
                let displayCart=arrayCart.map((el)=>{
                    return `ID: ${el.id} - Name: ${el.name} - Price: ${el.price} - Quantity: ${el.quantity} - Category: ${el.category} \n`
                })
                let totalCart=arrayCart.reduce((acc,cur)=>{
                    return acc+ cur.price*cur.quantity
                },0)
                if(arrayCart.length==0){
                    alert("Cart empty")
                }else{
                    alert(`
=====Your cart=====
${displayCart}
Total price: ${totalCart} VND`)
                }
            }

            // 7. Hiển thị tổng số lượng sách đang có trong kho
                const displayTotalQuantity=(arrayBook)=>{
                    let arrayQuantity=arrayBook.map((el)=>{
                        return `${el.name} - ${el.quantity} book(s) \n`
                    })
                    alert(arrayQuantity.join(""))
                }
        
    do {
        displayMenu()
        switch (choice) {
            case 1:
                displayBookByCategory(bookStore)
                break;
            case 2:
                addNewBook(bookStore)
                break;
            case 3:
                searchBookByIdOrName(bookStore)
                break;
            case 4:
                buyBookByName(bookStore)
                break;
            case 5:
                sortBookByPrice(bookStore)
                break;
            case 6:
                disPlayCartAndCaculate(cart)
                break;
            case 7:
                displayTotalQuantity(bookStore)
                break;
            case 8:
                alert("Goodbye! Thanks for using my web!!!")
                break;
        
            default:
                alert("Error! Please input from 0 to 8!!!")
                break;
        }
        
    } while (choice!==8);