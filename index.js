//*API ÇEKME
let url="https://fakestoreapi.com/products?limit=6"
const productSecondCard=document.querySelector(".productsSectionCard")

function sendApı(url){
    fetch(url)
    .then(res=>res.json())
    .then(value=>{
        let productWrite=value.map(item=>{
            return`
            <div class="col-md-4 productsCards">
                <div class="card">
                    <img class="productCard-img" src="${item.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <p class="card-text productCard-text">${parseInt(item.price)} $</p>
                        <h5 class="card-title productCard-title">${item.title}</h5>
                        <button class="productCard-btn" type="button" role="Add Cart">Add Cart</button>
                    </div>
                    <div class="favorites">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
            `
        })
        productSecondCard.innerHTML=productWrite.join("")
    })
}
document.addEventListener("DOMContentLoaded",sendApı(url))

let categoryCoupon=document.querySelector(".categoryCoupon")

categoryCoupon.addEventListener("click",function(e){
    if(e.target.classList.contains("couponBtn")){
        let karakter="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
        let couponRandomCode=""
        for(let i=0;i<7;i++){
            couponRandomCode+=karakter[Math.floor(Math.random()*karakter.length)]
        }
        document.querySelector(".couponCode-text").innerHTML=couponRandomCode

        localStorage.setItem("code",couponRandomCode)
    }
})
