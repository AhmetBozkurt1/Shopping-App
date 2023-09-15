let girisKontrol=JSON.parse(localStorage.getItem("giris"))
if(girisKontrol!=true){
    window.location.href="login.html"
}