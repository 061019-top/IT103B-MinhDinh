let number =localStorage.getItem("num") || 0
let buttonIncrease=document.getElementById("increase")
let buttonDecrease=document.getElementById("decrease")
let buttonReset=document.getElementById("reset")
let result=document.getElementsByTagName("h1")[0]
if(number){
    result.innerText=number
}

buttonIncrease.addEventListener("click",()=>{
    number++
    result.innerText=number
    localStorage.setItem("num", JSON.stringify(number))
})

buttonDecrease.addEventListener("click",()=>{
    number--
    result.innerText=number
    localStorage.setItem("num", JSON.stringify(number))
})

buttonReset.addEventListener("click",()=>{
    number=0
    result.innerText=number
    localStorage.setItem("num", JSON.stringify(number))
})

