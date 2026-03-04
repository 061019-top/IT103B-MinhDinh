// Dom


// Elenment 
// Atr
//Text

// ELement : các thẻ
// Cách truy xuất 
// - Cách lấy được các thẻ tròng js
let itemElemment = document.getElementById("item-01")
console.log(itemElemment);


let itemElemmentclassName = document.getElementsByClassName("item")

console.log(listItemElement.length);

console.log(Array.from(listItemElement));

Array.from(listItemElement).forEach((element) => {
    console.log(element.innerText);
});

let listDivElement = document.getElementsByTagName("div")
console.log(listDivElement);



let fisttElenment = document.querySelector("#item-01")

let fisttElenmentAll = document.querySelectorAll(".item")

