let url="https://fakestoreapi.com/products"
let productsSectionCard=document.querySelector(".productsSectionCard")


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
    //*içindeki değeri alıp console yazdırma
    priceSlider.noUiSlider.on("change",(values)=>{
        console.log(values)
    })
    const resetBtn=document.getElementById("resetBtn")
    resetBtn.addEventListener("click",function(){
        priceSlider.noUiSlider.reset()
    })
})

//*ÜRÜN ARAMA
const navSearchBtn=document.querySelector(".navThird-button")

navSearchBtn.addEventListener("click",function(){
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

