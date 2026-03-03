let products = [
  {id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "món ăn dân tộc Mông"},
  {id: 2, name: "mứt", price: 80000, quantity: 21, category: "món ăn dân tộc Kinh"},
  {id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "món ăn dân tộc Mông"},
  {id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30, category: "món ăn dân tộc Kinh"}
];

let cart=[];
// menuFood
let menuOfKinh= products.filter((el)=>{
        return el.category.includes("món ăn dân tộc Kinh")

})
let menuOfMong= products.filter((el)=>{
    return el.category.includes("món ăn dân tộc Mông")
})

const menu=(arrayMenu)=>{
    let result=arrayMenu.map((el)=>{
        return `Id: ${el.id} -Name of food: ${el.name} - quantity: ${el.quantity} - price: ${el.price} VND \n`
    })
    return result.join("");
    
}
let finalMenu=`
====MY MENU====
Food of Kinh:
${menu(menuOfKinh)}

Food of Mong:
${menu(menuOfMong)}
`
alert(finalMenu);

let searchId=+prompt("Please input id you want to buy")
let foodSearch=products.find((el)=>{
    return el.id==searchId
})
let indexSearch=products.findIndex((el)=>{
    return el.id==searchId
})
if(foodSearch.length==0){
    alert("Id food not existed")
}else{
    let quantity=+prompt("How many food you want to buy?")
    Object.values(foodSearch).forEach((el)=>{
        if(el.quantity-quantity<0){
            alert("My warehouse not enough ")
        }else{
            el.quantity-=quantity
        }

    })
        products[indexSearch]=foodSearch
}

const sortFood=(arrayMenu)=>{
    let lowToHigh=arrayMenu.toSorted((num1,num2)=>{
        return num1.price-num2.price
    })
    return lowToHigh;
    
}
console.log("Low to high:");
console.log(sortFood(products));
console.log("High to low:");
console.log(sortFood(products).toReversed());




