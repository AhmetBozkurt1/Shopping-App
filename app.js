//*API ÇEKME
let url="https://fakestoreapi.com/products?limit=6"
const productSecondCard=document.querySelector(".productsSectionCard")

function sendApı(url){
    fetch(url)
    .then(res=>res.json())
    .then(value=>{
        console.log(value)
        let productWrite=value.map(item=>{
            return`
            <div class="col-md-4 productsCards">
                <div class="card">
                    <img src="${item.image}" class="card-img-top" alt="...">
                     <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.price}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            `
        })
        productSecondCard.innerHTML=productWrite.join("")
    })
}
document.addEventListener("DOMContentLoaded",sendApı(url))
