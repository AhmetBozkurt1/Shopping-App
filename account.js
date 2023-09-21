let girisKontrol=JSON.parse(localStorage.getItem("giris"))
if(girisKontrol!=true){
    window.location.href="login.html"
}

document.addEventListener("DOMContentLoaded",function(){
    let localAdet=JSON.parse(localStorage.getItem("adet")) || ""
        if(localAdet){
            document.getElementById("cartAdet").style.display="block"
            document.getElementById("cartAdet").innerHTML=localAdet
        }
        else{
            document.getElementById("cartAdet").style.display="none"
        }
})
