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
document.addEventListener("DOMContentLoaded",setApı(url))