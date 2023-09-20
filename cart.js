let cartNumber=document.getElementById("cartNumber")
let cartName=document.getElementById("cartName")
let cartCvv=document.getElementById("cartCvv")
let cartDate=document.getElementById("cartDateDay")
let cartYear=document.getElementById("cartDateYear")

let frondNumber=document.querySelector(".frond-numberText")
let frondName=document.querySelector(".frond-nameText")
let backNumber=document.querySelector(".back-numberText")
let frondDate=document.querySelector(".frond-dateText")
let frondYear=document.querySelector(".frond-yearText")

cartNumber.addEventListener("input",function(){
    let cartNumberValue=cartNumber.value
    frondNumber.innerHTML=cartNumberValue
})

cartName.addEventListener("input",function(){
    let cartNameValue=cartName.value.toUpperCase()
    frondName.innerHTML=cartNameValue
})
cartDate.addEventListener("input",function(){
    let cartDateValue=cartDate.value
    frondDate.innerHTML=cartDateValue
})
cartYear.addEventListener("input",function(){
    let cartYearValue=cartYear.value
    frondYear.innerHTML=`/ ${cartYearValue}`
})

cartCvv.addEventListener("click",function(){
    let cartBack=document.querySelector(".creditCart-back")
    let cartFrond=document.querySelector(".creditCart-frond")

    cartBack.style.transform="rotateY(0)"
    cartFrond.style.transform="rotateY(-180deg)"
})
cartCvv.addEventListener("input",function(){
    let cartCvvValue=cartCvv.value
    backNumber.innerHTML=cartCvvValue
})
cartCvv.addEventListener("blur",function(){
    let cartBack=document.querySelector(".creditCart-back")
    let cartFrond=document.querySelector(".creditCart-frond")

    cartBack.style.transform="rotateY(-180deg)"
    cartFrond.style.transform="rotateY(0)"
})