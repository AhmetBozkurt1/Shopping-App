document.addEventListener("DOMContentLoaded",function(){
    let favoriUrun=JSON.parse(localStorage.getItem("favoriUrun")) || []
//*aslında burada direkt favoriUrun yazıp anlamının favoriUrun içi dolu olduğu anlamına gelmesine rağmen kodun sağlıklı çalışması için favoriUrun.length değerinin 0'dan büyük olma durumuna göre bakılması daha sağlıklı olacaktır
    if(favoriUrun.length>0){
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
    else{
        let favoriBos=document.createElement("div")
        favoriBos.classList.add("col-12","favoriBosText")
        let favoriInner=document.createElement("h4")
        favoriInner.classList.add("favoriInner-text")
        favoriInner.innerHTML="There are no products in your favorites."
        favoriBos.appendChild(favoriInner)
        document.querySelector(".favoriteProduct").appendChild(favoriBos)
    }
    let localAdet=JSON.parse(localStorage.getItem("adet")) || ""
    if(localAdet){
        document.getElementById("cartAdet").style.display="block"
        document.getElementById("cartAdet").innerHTML=localAdet
    }
    else{
        document.getElementById("cartAdet").style.display="none"
    }
})
let favoriCart=document.querySelector(".favoriteProduct")
favoriCart.addEventListener("click",function(e){
//*burada ürünlere 
    let favoriRow=e.target.parentElement.parentElement.parentElement
    let favoriName=favoriRow.querySelector(".favoriCart-name").innerHTML
    let favoriImage=favoriRow.querySelector(".favoriCart-img").src
    let favoriFiyat=favoriRow.querySelector(".favoriCart-fiyat").innerHTML
    if(e.target.classList.contains("productCard-btn")){
        let localSepetUrun=JSON.parse(localStorage.getItem("product")) || []
        let urunSayi=JSON.parse(localStorage.getItem("adet")) || 0
        if(localSepetUrun){
            let varUrun=localSepetUrun.filter(urun=>urun.adi===favoriName)
            if(varUrun.length>0){
                document.querySelector(".xxxx").style.display="block"
            }
            else{
                urunSayi++
                localSepetUrun.push(
                    {
                        adi:favoriName,
                        fiyat:favoriFiyat,
                        image:favoriImage
                    }
                )
                localStorage.setItem("product",JSON.stringify(localSepetUrun))
                localStorage.setItem("adet",JSON.stringify(urunSayi))

                document.getElementById("cartAdet").style.display="block"
                document.getElementById("cartAdet").innerHTML++
            }
        }
    }
    else if(e.target.classList.contains("favoriteClose-icon")){
        let favoriUrun=JSON.parse(localStorage.getItem("favoriUrun")) || []
        favoriRow.remove()
        let newFavoriList=favoriUrun.filter(urun=>urun.favoriAdi!==favoriName)
        localStorage.setItem("favoriUrun",JSON.stringify(newFavoriList))
    }
})