//*API ÇEKME
let url="https://fakestoreapi.com/products?limit=6"
const productSecondCard=document.querySelector(".productsSectionCard")

function sendApı(url){
    fetch(url)
    .then(res=>res.json())
    .then(value=>{
        let productWrite=value.map(item=>{
            return`
            <div class="col-md-6 col-lg-4 productsCards">
                <div class="card">
                    <img class="productCard-img" src="${item.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <p class="card-text productCard-text">${parseInt(item.price)} $</p>
                        <h5 class="card-title productCard-title">${item.title}</h5>
                        <button class="productCard-btn" type="button" role="Add Cart">Add Cart</button>
                    </div>
                    <div class="favorites">
                        <i class="product-favorite fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
            `
        })
        productSecondCard.innerHTML=productWrite.join("")
    })
}
document.addEventListener("DOMContentLoaded",function(){
    sendApı(url)

    let localAdet=JSON.parse(localStorage.getItem("adet")) || ""
    if(localAdet){
        document.getElementById("cartAdet").style.display="block"
        document.getElementById("cartAdet").innerHTML=localAdet
    }
    else{
        document.getElementById("cartAdet").style.display="none"
    }
})

//*burada bir indirim kodu üretmesini istedim daha sonra bu kodu oluşturduğum modal içerisne yazdırdım ve en son başka yerlerde kullanmak için localStorage set ettim
let couponBtn=document.querySelector(".couponBtn")
couponBtn.addEventListener("click",function(){
        let karakter="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
        let couponRandomCode=""
        for(let i=0;i<7;i++){
            couponRandomCode+=karakter[Math.floor(Math.random()*karakter.length)]
        }
        document.querySelector(".couponCode-text").innerHTML=couponRandomCode

        localStorage.setItem("code",JSON.stringify(couponRandomCode))
})

//*ÜRÜN ARAMA
const navSearchBtn=document.querySelector(".navThird-button")

navSearchBtn.addEventListener("click",function(){
//*ürün olmadığında ürün yok mesajı verecek global değişken tanımladım
    let message=document.querySelector(".productNoneMessage")
    let messageDeger=false
    
    const navInput=document.querySelector(".navThird-input")
    const searchInput=navInput.value.toLowerCase()
    navInput.value=""

    const productsCards=document.querySelectorAll(".productsCards")
    productsCards.forEach(function(card){
        const title=card.querySelector(".productCard-title")
        if(title.innerHTML.toLowerCase().includes(searchInput)){
            card.style.display="block"
            messageDeger=true
        }
        else{
            card.style.display="none"
        }
    })
    if(messageDeger==false){
        message.style.display="block"
    }
    else{
        message.style.display="none"
    }

})

//*CATEGORY SEARCH

const productsCards=document.querySelectorAll(".productsCards")
const productsSectionCard=document.querySelector(".productsSectionCard")

//*Men Search
const menSearch=document.getElementById("menSearch")
const menUrl="https://fakestoreapi.com/products/category/men's clothing"
menSearch.addEventListener("click",function(){
    fetch(menUrl)
    .then(res=>res.json())
    .then(value=>{
        let menWrite=value.map(element=>{
            return`
            <div class="col-md-4 productsCards">
                <div class="card">
                    <img class="productCard-img" src="${element.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text productCard-text">${parseInt(element.price)} $</p>
                        <h5 class="card-title productCard-title">${element.title}</h5>
                        <button class="productCard-btn" type="button" role="Add Cart">Add Cart</button>
                    </div>
                    <div class="favorites">
                        <i class="product-favorite fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
            `
        })
        productsSectionCard.innerHTML=menWrite.join("")
    })
})

//*Women Search
const womenSearch=document.getElementById("womenSearch")
const womenUrl="https://fakestoreapi.com/products/category/women's clothing"
womenSearch.addEventListener("click",function(){
    fetch(womenUrl)
    .then(res=>res.json())
    .then(value=>{
        let womenWrite=value.map(element=>{
            return`
            <div class="col-md-4 productsCards">
                <div class="card">
                    <img class="productCard-img" src="${element.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text productCard-text">${parseInt(element.price)} $</p>
                        <h5 class="card-title productCard-title">${element.title}</h5>
                        <button class="productCard-btn" type="button" role="Add Cart">Add Cart</button>
                    </div>
                    <div class="favorites">
                        <i class="product-favorite fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
            `
        })
        productsSectionCard.innerHTML=womenWrite.join("")
    })
})

//*Clothing Search
const clothSearch=document.getElementById("clothSearch")
clothSearch.addEventListener("click",function(){
   setApı(url)
})

//*Electronics Search
const electroSearch=document.getElementById("electroSearch")
const electroUrl="https://fakestoreapi.com/products/category/electronics"
electroSearch.addEventListener("click",function(){
    fetch(electroUrl)
    .then(res=>res.json())
    .then(value=>{
        let electroWrite=value.map(element=>{
            return`
            <div class="col-md-4 productsCards">
                <div class="card">
                    <img class="productCard-img" src="${element.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text productCard-text">${parseInt(element.price)} $</p>
                        <h5 class="card-title productCard-title">${element.title}</h5>
                        <button class="productCard-btn" type="button" role="Add Cart">Add Cart</button>
                    </div>
                    <div class="favorites">
                    <i class="product-favorite fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
            `
        })
        productsSectionCard.innerHTML=electroWrite.join("")
    })
})


//*Jewelery Search
const jewelerySearch=document.getElementById("jewelerySearch")
const jeweleryUrl="https://fakestoreapi.com/products/category/jewelery"
jewelerySearch.addEventListener("click",function(){
    fetch(jeweleryUrl)
    .then(res=>res.json())
    .then(value=>{
        let jeweleryWrite=value.map(element=>{
            return`
            <div class="col-md-4 productsCards">
                <div class="card">
                    <img class="productCard-img" src="${element.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text productCard-text">${parseInt(element.price)} $</p>
                        <h5 class="card-title productCard-title">${element.title}</h5>
                        <button class="productCard-btn" type="button" role="Add Cart">Add Cart</button>
                    </div>
                    <div class="favorites">
                        <i class="product-favorite fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
            `
        })
        productsSectionCard.innerHTML=jeweleryWrite.join("")
    })
})

let urun=JSON.parse(localStorage.getItem("product")) || []

let urunFavori=JSON.parse(localStorage.getItem("favoriUrun")) || []

let urunSayi=JSON.parse(localStorage.getItem("adet")) || 0

productsSectionCard.addEventListener("click",function(e){
    if(e.target.classList.contains("productCard-btn")){
        let parentDiv=e.target.parentElement.parentElement
        let urunImg=parentDiv.children[0].src
        let urunName=parentDiv.children[1].children[1].innerHTML
        let urunFiyat=parentDiv.children[1].children[0].innerHTML
        urunSayi++
        urun.push(
            {
                adi:urunName,
                fiyat:urunFiyat,
                image:urunImg
            }
        )
//*her ürün eklendiğinde ürün adetimi bir değişkene atayıp locale kaydediyorum ve bunu sayfa hazır olduğunda sepetimde ürün varsa bunu cart üsründe adetini göstericem
        localStorage.setItem("product",JSON.stringify(urun))
        localStorage.setItem("adet",JSON.stringify(urunSayi))

        document.getElementById("cartAdet").style.display="block"
        document.getElementById("cartAdet").innerHTML++
    }
//*favorilere ekleyeceğim ürünleri icona tıklayarak ekledim ve bunları hepsini locale gönderdim
    else if(e.target.classList.contains("product-favorite")){
        let parentDiv=e.target.parentElement.parentElement
        let urunImg=parentDiv.children[0].src
        let urunName=parentDiv.children[1].children[1].innerHTML
        let urunFiyat=parentDiv.children[1].children[0].innerHTML
        urunFavori.push(
            {
                favoriAdi:urunName,
                favoriFiyat:urunFiyat,
                favoriImage:urunImg
            }
        )
        localStorage.setItem("favoriUrun",JSON.stringify(urunFavori))
    }
})