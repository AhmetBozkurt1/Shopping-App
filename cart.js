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

//*aşağıda input alanlarında girilen her karakteri anında başka bir alana yazdırmak için event tanımladım
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

//*burada Cvv yazılacak input alanına click olduğumuzda kredi kartının arka yüzünü gösterecek kodları yazdım
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
//*burada da cvv alanından başka bir yere çıktığımda credi kartınnın ön yüzünü tekrar gösterecek event olan blur eventini kullanıp başa alıyorum
cartCvv.addEventListener("blur",function(){
    let cartBack=document.querySelector(".creditCart-back")
    let cartFrond=document.querySelector(".creditCart-frond")

    cartBack.style.transform="rotateY(-180deg)"
    cartFrond.style.transform="rotateY(0)"
})

document.addEventListener("DOMContentLoaded",function(){
    
    let localAdet=JSON.parse(localStorage.getItem("adet")) || ""
    if(localAdet){
        document.getElementById("cartAdet").style.display="block"
        document.getElementById("cartAdet").innerHTML=localAdet
    }
    else{
        document.getElementById("cartAdet").style.display="none"
    }

    let product=JSON.parse(localStorage.getItem("product")) || ""
    if(product){
        product.forEach(function(element){
            let sepetRow=document.createElement("div")
            sepetRow.classList.add("row","sepetBox-product")
            sepetRow.innerHTML+=`
                <div class="col-5 sepetBoxImg-name">
                    <img class="sepetBox-image" src="${element.image}" alt="">
                    <p class="sepetBox-name">${element.adi}</p>
                </div>
                <div class="col-2 spetBoxPrice d-flex align-items-center">
                    <p class="sepetBox-price">${element.fiyat}</p>
                </div>
                <div class="col-2 sepetBoxPiece d-flex">
                    <button class="sepetBoxPiece-eksi" type="button">
                        <i class="sepetBox-iconEksi fa-regular fa-square-minus"></i>
                    </button>
                    <span class="sepetBox-piece">1</span>
                    <button class="sepetBoxPiece-arti" type="button">
                        <i class="sepetBox-iconArti fa-regular fa-square-plus"></i>
                    </button>
                </div>
                <div class="col-3 sepetBoxTotal d-flex justify-content-between">
                    <p class="sepetBox-total">${element.fiyat}</p>
                    <div class="product-close">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            `
            document.querySelector(".sepetBoxAll").appendChild(sepetRow)
        })
    }else{
        let sepetBosMessage=document.createElement("div")
        sepetBosMessage.innerHTML=`
            <div class="sepetBosMessage">
                <div class="row">
                    <div class="col-12 d-flex">
                        <h3 class="sepet-message">There is no product in your cart...</h3>
                    </div>
                </div>
            </div>
        `
        document.querySelector(".sepetBoxAll").appendChild(sepetBosMessage)
    }
})


const sepetBoxAll=document.querySelector(".sepetBoxAll")

sepetBoxAll.addEventListener("click",function(e){
    if(e.target.classList.contains("sepetBox-iconArti")){
        let urunAdet=+e.target.parentElement.previousElementSibling
        urunAdet.innerHTML++
        let urunFiyat=e.target.parentElement.parentElement.previousElementSibling.children[0].innerHTML
        let urunToplam=e.target.parentElement.parentElement.nextElementSibling.children[0].innerHTML
        let x=parseInt(urunFiyat)
        console.log(x)
        //*urunAdet NaN HATASI VERİYOR SORUN ORADA
    }
})


