let url="https://fakestoreapi.com/products"
let productsSectionCard=document.querySelector(".productsSectionCard")

//*API ÇEKME FUNCTION
function setApı(url){
    fetch(url)
    .then(res=>res.json())
    .then(value=>{
        let productWrite=value.map(element=>{
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
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
            `
        })
        productsSectionCard.innerHTML=productWrite.join("")
    })
}

//*DOM HAZIR OLDUĞUNDA ÜRÜNLERİ GETİRME VE FİYAT FİLTRELEME SLİDER YAPIMI
document.addEventListener("DOMContentLoaded",function(){
    //API den veri çekme*
    setApı(url)
    
//*Fiyat Filtre
    const priceSlider=document.getElementById("r-slider")
    noUiSlider.create(priceSlider, {
        start: [100,300],
        tooltips:true,
        connect: true,
        step:1,
        // padding:10,
        range: {
            'min': 0,
            'max': 600
        },
        pips:{
            mode:"values",
            values:[50,150,250,350,450,550],
            density:2
        }
    });
//*slider içindeki değerleri alıp ürün fiyat aralığına göreürünleri çıkardım
    priceSlider.noUiSlider.on("change",(values)=>{
//*burada values ile değerler dizi içerisinde geliyordu her bir dizi elemanını ayrı değişkenlere number olarak atadım sebebi de if-else çevirirken number olarak bu ifadeleri ürün fiyatlarını belirlerken kullanacağım
        const price1=+values[0]
        const price2=+values[1]
        const productsCards=document.querySelectorAll(".productsCards")
        productsCards.forEach(function(card){
            const cardPrice=card.querySelector(".productCard-text")
            const priceNumber=parseInt(cardPrice.innerHTML)
            if(price1<priceNumber && price2>priceNumber){
                card.style.display="block"
            }
            else{
                card.style.display="none"
            }
        })
    })
//*reset butonu ile slideri ilk konumuna getirdim ve API çekme functionu ile tekrar ürünleri getirdim
    const resetBtn=document.getElementById("resetBtn")
    resetBtn.addEventListener("click",function(){
        priceSlider.noUiSlider.reset()
        setApı(url)
    })
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
                        <i class="fa-regular fa-heart"></i>
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
                        <i class="fa-regular fa-heart"></i>
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
                    <i class="fa-regular fa-heart"></i>
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
                    <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
            `
        })
        productsSectionCard.innerHTML=jeweleryWrite.join("")
    })
})
















//******BURALARA SEPETE EKLEME TANIMLANACAK**********
productsSectionCard.addEventListener("click",function(e){
    console.log(e.target)
})
