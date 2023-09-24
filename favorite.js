document.addEventListener("DOMContentLoaded",function(){
    let favoriUrun=JSON.parse(localStorage.getItem("favoriUrun")) || []
    if(favoriUrun){
        favoriUrun.forEach(function(item){
            let favoriRow=document.createElement("div")
            favoriRow.classList.add("col-md-4" , "favoriUrun-cart")
            favoriRow.innerHTML+=`
                <div class="card">
                    <img class="favoriCart-img" src="${item.favoriImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text favoriCart-fiyat">${parseInt(item.favoriFiyat)} $</p>
                        <h5 class="card-title favoriCart-name">${item.favoriAdi}</h5>
                        <button class="productCard-btn" type="button" role="Add Cart">Add Cart</button>
                    </div>
                    <div class="favoritesClose">
                        <i class="favoriteClose-icon fa-solid fa-xmark"></i>
                    </div>
                </div>
            `
            document.querySelector(".favoriteProduct").appendChild(favoriRow)
        })
    }
})
let favoriCart=document.querySelector(".favoriteProduct")
favoriCart.addEventListener("click",function(e){
    let favoriRow=e.target.parentElement.parentElement.parentElement
    let favoriName=favoriRow.querySelector(".favoriCart-name").innerHTML
    if(e.target.classList.contains("productCard-btn")){
        let localSepetUrun=JSON.parse(localStorage.getItem("product")) || []
        if(localSepetUrun){
            let varUrun=localSepetUrun.filter(urun=>urun.adi===favoriName)
            if(varUrun){
                document.querySelector(".xxxx").style.display="block"
            }
            //*burada else ürünü localde sepetteki ürünlere kaydedicez
        }
    }
})