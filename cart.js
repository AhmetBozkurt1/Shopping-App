let cartNumber=document.getElementById("cartNumber")
let cartName=document.getElementById("cartName")
let cartCvv=document.getElementById("cartCvv")
let cartDate=document.getElementById("cartDateDay")
let cartYear=document.getElementById("cartDateYear")

let frondNumber=document.querySelector(".frond-numberText")
let frondName=document.querySelector(".frond-nameText")
let backNumber=document.querySelector(".back-numberText")
let frondDate=document.querySelector(".frond-dateText")
let frondYear=document.querySelector(".frond-yearText")

//*aşağıda input alanlarında girilen her karakteri anında başka bir alana yazdırmak için event tanımladım
cartNumber.addEventListener("input",function(){
    let cartNumberValue=cartNumber.value
    frondNumber.innerHTML=cartNumberValue
})

cartName.addEventListener("input",function(){
    let cartNameValue=cartName.value.toUpperCase()
    frondName.innerHTML=cartNameValue
})
cartDate.addEventListener("input",function(){
    let cartDateValue=cartDate.value
    frondDate.innerHTML=cartDateValue
})
cartYear.addEventListener("input",function(){
    let cartYearValue=cartYear.value
    frondYear.innerHTML=`/ ${cartYearValue}`
})

//*burada Cvv yazılacak input alanına click olduğumuzda kredi kartının arka yüzünü gösterecek kodları yazdım
cartCvv.addEventListener("click",function(){
    let cartBack=document.querySelector(".creditCart-back")
    let cartFrond=document.querySelector(".creditCart-frond")

    cartBack.style.transform="rotateY(0)"
    cartFrond.style.transform="rotateY(-180deg)"
})
cartCvv.addEventListener("input",function(){
    let cartCvvValue=cartCvv.value
    backNumber.innerHTML=cartCvvValue
})
//*burada da cvv alanından başka bir yere çıktığımda credi kartınnın ön yüzünü tekrar gösterecek event olan blur eventini kullanıp başa alıyorum
cartCvv.addEventListener("blur",function(){
    let cartBack=document.querySelector(".creditCart-back")
    let cartFrond=document.querySelector(".creditCart-frond")

    cartBack.style.transform="rotateY(-180deg)"
    cartFrond.style.transform="rotateY(0)"
})

document.addEventListener("DOMContentLoaded",function(){

//*eğer sepette ürün varsa bunu locale kaydettiğim sepet adet veri ile her DOM yenilendiğinde veri çekerek sepetteki ürün sayısını gösterdim
    let localAdet=JSON.parse(localStorage.getItem("adet")) || ""
    if(localAdet){
        document.getElementById("cartAdet").style.display="block"
        document.getElementById("cartAdet").innerHTML=localAdet
    }
    else{
        document.getElementById("cartAdet").style.display="none"
    }

//*eğer localde sepete atılmış ürün varsa bunu localden DOM yüklendiğinde ilk çekiyorum ve gösteriyorum yoksa ürün yok yazdırıyorum
    let product=JSON.parse(localStorage.getItem("product")) || ""
    if(product){
        product.forEach(function(element){
            let sepetRow=document.createElement("div")
            sepetRow.classList.add("row","sepetBox-product")
            sepetRow.innerHTML+=`
                <div class="col-5 sepetBoxImg-name">
                    <img class="sepetBox-image" src="${element.image}" alt="">
                    <p class="sepetBox-name">${element.adi}</p>
                </div>
                <div class="col-2 spetBoxPrice d-flex align-items-center">
                    <p class="sepetBox-price">${element.fiyat}</p>
                </div>
                <div class="col-2 sepetBoxPiece d-flex">
                    <button class="sepetBoxPiece-eksi" type="button">
                        <i class="sepetBox-iconEksi fa-regular fa-square-minus"></i>
                    </button>
                    <span class="sepetBox-piece">1</span>
                    <button class="sepetBoxPiece-arti" type="button">
                        <i class="sepetBox-iconArti fa-regular fa-square-plus"></i>
                    </button>
                </div>
                <div class="col-3 sepetBoxTotal d-flex justify-content-between">
                    <p class="sepetBox-total">${element.fiyat}</p>
                    <div class="product-close">
                        <i class="productClose-icon fa-solid fa-xmark"></i>
                    </div>
                </div>
            `
            document.querySelector(".sepetBoxAll").appendChild(sepetRow)

        })
        let sepetUrunFiyat=document.getElementById("sepetUrunFiyat")
        let sepetVergi=document.getElementById("sepetVergiFiyat")
        let sepetKargo=document.getElementById("sepetKargoFiyat")
        let sepetIndirim=document.getElementById("sepetIndirimCode")
        let sepetTotal=document.getElementById("sepetTotal")

//*burada sepetteki tüm fiyatlara erişip onların toplamını sayfada hesaplama bölümünde kullanmak üzere hepsine ulaşıyorum ve dahasonra bunları toplayabilmek için 0'a eşit olan bir değişken atıyorum
//*daha sonra tüm fiyatları gezip bunların parseInt ile number alanlarını alıp 0'a eşit olan değişkenime += ile hepsini üst üste toplayarak gönderiyorum
        let sepetDom=document.querySelectorAll(".sepetBox-price")
        let sepetDomFirst=0
        let vergiFiyat=0
        let kargoFiyat=20
        let indirimFiyat=0
        let totalFiyat=0
        sepetDom.forEach(function(item){
            let sepetDomNumber=parseInt(item.innerHTML)
            sepetDomFirst+=sepetDomNumber
            sepetUrunFiyat.innerHTML=`${sepetDomFirst} $`
            vergiFiyat=(sepetDomFirst*10)/100
            sepetVergi.innerHTML=`${(sepetDomFirst*10)/100} $`
            if(sepetDomFirst>=200){
                sepetKargo.innerHTML="Free"
                totalFiyat=sepetDomFirst+vergiFiyat
                sepetTotal.innerHTML=`${totalFiyat} $`
            }
            else{
                sepetKargo.innerHTML=`${kargoFiyat} $`
                totalFiyat=sepetDomFirst+vergiFiyat+kargoFiyat
                sepetTotal.innerHTML=`${totalFiyat} $`
            }
        })
//*indirim kodunu localden çekerek input içindeki girilen kod ile uyuşması veya uyuşmaması durumunda olaylarımı yazdım
        let indirimInput=JSON.parse(localStorage.getItem("code")) || ""
        let indirimOnay=document.querySelector(".indirimOnay")
        indirimOnay.addEventListener("click",function(){
            if(indirimInput==sepetIndirim.value){
                let sonuc=((sepetDomFirst+vergiFiyat)*15)/100
                indirimFiyat=sonuc.toFixed(1)
                totalFiyat=sepetDomFirst+vergiFiyat-indirimFiyat
                sepetTotal.innerHTML=`${totalFiyat} $`
//*burada kodu kullanınca localden kodu sildim
                localStorage.removeItem("code")
                sepetIndirim.classList.remove("hata")
            }
            else{
//*burada animation her hatalı girişte çalışması için ilk sil sonra ekle dedim ama tarayıcı ikisini aynı işlem olarak yürüttü araya VOID kodunu yazarak tarayıcıya bir önceki işlemi işlmesine zorladım
                sepetIndirim.classList.remove("hata")
                void sepetIndirim.offsetWidth;
                sepetIndirim.classList.add("hata")
                totalFiyat=sepetDomFirst+vergiFiyat
                sepetTotal.innerHTML=`${totalFiyat} $`
            }
        })
    }
    else{
        let sepetBosMessage=document.createElement("div")
        sepetBosMessage.innerHTML=`
            <div class="sepetBosMessage">
                <div class="row">
                    <div class="col-12 d-flex">
                        <h3 class="sepet-message">There is no product in your cart...</h3>
                    </div>
                </div>
            </div>
        `
        document.querySelector(".sepetBoxAll").appendChild(sepetBosMessage)
    }
})

//*sepetRow içreisine oluşturduğum yapı içindeki verilere ilk başta ulaşamadım sebebi ise benim bu yapım DİNAMİK halde bir yapı benim bunu statik hale getirmem lazım bunun içinde her veriye direkt ulaşmak yerine bunun yerine if yapıları içerisinde clicklenen eleman üzerinden hareket ederek hedef elemana ulaşana kadar click elemandan başlayarak parentElementlerine,onların bir önceki(previousElementSibling) veya bir sonraki(nextElementSibling) elementlerine onlarında children halleri içerisinden ilgili elementlere ulaştım ve onlar üzerinden işlem yaptım
//*DİNAMİK halde olan bir yapıda verilerie ulaşmak için bu şekilde yapabiliriz
const sepetBoxAll=document.querySelector(".sepetBoxAll")

sepetBoxAll.addEventListener("click",function(e){
    let sepetUrunFiyat=document.getElementById("sepetUrunFiyat")
    let sepetVergi=document.getElementById("sepetVergiFiyat")
    let sepetKargo=document.getElementById("sepetKargoFiyat")
    let sepetIndirim=document.getElementById("sepetIndirimCode")
    let sepetTotal=document.getElementById("sepetTotal")
    
    let sepetAllFiyat=document.querySelectorAll(".sepetBox-total")
    if(e.target.classList.contains("sepetBox-iconArti")){
        let urunAdet=e.target.parentElement.previousElementSibling
        urunAdet.innerHTML++
        let urunAdetSon=urunAdet.innerHTML
        let urunFiyat=e.target.parentElement.parentElement.previousElementSibling.children[0].innerHTML
        let urunFiyatSon=parseInt(urunFiyat)
        let urunToplam=e.target.parentElement.parentElement.nextElementSibling.children[0]
        let sonuc=urunAdetSon*urunFiyatSon
        urunToplam.innerHTML=`${sonuc} $`


        let sepetWrite=0
        sepetAllFiyat.forEach(function(item){
            let sepetAllNumber=parseInt(item.innerHTML)
            sepetWrite+=sepetAllNumber
            sepetUrunFiyat.innerHTML=`${sepetWrite} $`
        })
        
    }
    else if(e.target.classList.contains("sepetBox-iconEksi")){
        let urunAdet=e.target.parentElement.nextElementSibling
        if(urunAdet.innerHTML>1){
            urunAdet.innerHTML--
            let urunAdetSon=urunAdet.innerHTML
            let urunFiyat=e.target.parentElement.parentElement.previousElementSibling.children[0]
            let urunFiyatSon=parseInt(urunFiyat.innerHTML)
            let urunToplam=e.target.parentElement.parentElement.nextElementSibling.children[0]
            let sonuc=urunAdetSon*urunFiyatSon
            urunToplam.innerHTML=`${sonuc} $`
        }
    }
    else if(e.target.classList.contains("productClose-icon")){
        let sepetRow=e.target.parentElement.parentElement.parentElement
//*sepete eklenen ürünlerimi localden alıyordum burada ürün silme butonuna bastığımda ekrandan silmem yetmiyor localden de silmem lazım çünkü diyelim ki sayfada sildim fakat localde hala eklenen ürünler gözüktüğü için sayfayı yenilediğimde sildiğim ürünler yine gelecek
//*bunu da sildiğim ürünü localdeki product içerisinden de silmekle çözdüm
        let productName=sepetRow.querySelector(".sepetBox-name").innerHTML;
//*ürünün kapsayıcısı oluşturduğum sepetRow olduğu için ona ulaşıp remove() ile komple sildim
        sepetRow.remove()
//*sildiğim her ürünü sepet sayısından da düşmem lazım o yüzden sepet sayısını gösteren elemana ulaştım ve 1 eksiltme yaptım ayrıca sepet sayısı 0 eşit olunca sepet sayısı gözükmesin istedim
        let cartAdet=document.getElementById("cartAdet")
        let newCartAdet=(cartAdet.innerHTML)-1
        cartAdet.innerHTML=newCartAdet
        if(cartAdet.innerHTML==0){
            cartAdet.style.display="none"
        }
//*bunun için eğer ben silmek için click attığım elementin ismini bir değişkene alırsam ve daha sonra localden product elemanını çekerek bana dizi olarak döndüğü için içinden filtreleme yaparak dizi içerisindeki clicklenen ürünün isminin ürün isimlerine eşit olmayanları filtreleyerek onları da tekrar locale get ederek çözdüm
        let products=JSON.parse(localStorage.getItem("product")) || []
        let newProducts=products.filter(product=>product.adi!==productName)
        localStorage.setItem("product",JSON.stringify(newProducts))
        
//*aynı şekilde benim sepet adet sayım da diğer sayfalarda da sepette ürünümün var olduğunu göstermek amacıyla sepet adet sayısını locale kaydetmiştim o yüzden her silinen ürün için localdeki verimi de düşürmem gerekiyor
//*bunu da aynı şekilde ilk önce localden adet verimi çekiyorum bir değişkene atayarak daha sonra bunu 1 eksiltme işlemi yapıyorum ve tekrardan eksilmiş sayı ile atadığım depişkeni locale set ediyorum
        let adet=JSON.parse(localStorage.getItem("adet")) || 0
        let newAdet=adet-1
        localStorage.setItem("adet",JSON.stringify(newAdet))
    }
})


