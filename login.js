const formIconEye=document.querySelector(".formIcon-eye")
const signInFormPass=document.querySelector(".signIn-formPass")


const formIconEye2=document.querySelector(".formIcon-eye2")
const signUpFormPass=document.querySelector(".signUp-formPass")
const signUpFormPass2=document.querySelector(".signUp-formPass2")

formIconEye.addEventListener("click",function(){
    if(signInFormPass.type=="password"){
        signInFormPass.type="text"
        formIconEye.classList.replace("fa-eye-slash","fa-eye")
    }
    else{
        signInFormPass.type="password"
        formIconEye.classList.replace("fa-eye","fa-eye-slash")
    }
})

formIconEye2.addEventListener("click",function(){
    if(signUpFormPass2.type=="password"){
        signUpFormPass.type="text"
        signUpFormPass2.type="text"
        formIconEye2.classList.replace("fa-eye-slash","fa-eye")
    }
    else{
        signUpFormPass.type="password"
        signUpFormPass2.type="password"
        formIconEye2.classList.replace("fa-eye","fa-eye-slash")
    }
})

const signUpButton=document.querySelector(".signUp-button")

signUpButton.addEventListener("click",function(){
    const signUpName=document.querySelector(".signUp-formName").value
    const signUpEmail=document.querySelector(".signUp-formEmail").value
    const signUpPass=document.querySelector(".signUp-formPass").value
    const signUpPass2=document.querySelector(".signUp-formPass2").value
    let signUpMessage=document.querySelector(".signUp-textMessage")

    let kullanicilar=JSON.parse(localStorage.getItem("kullanicilar")) || []

    let varUser=false

    for (const element of kullanicilar) {
        if(signUpName==element.kadi && signUpEmail==element.email && signUpPass==element.sifre && signUpPass2==element.sifreTekrar){
            varUser=true
            break
        }
    }

    if(varUser!=true){
        if(signUpName.length>0 && signUpEmail.length>0){
            if(signUpPass.length>6 && signUpPass2.length>6){
                if(signUpPass==signUpPass2){
                    kullanicilar.push(
                        {
                            kadi:signUpName,
                            email:signUpEmail,
                            sifre:signUpPass,
                            sifreTekrar:signUpPass2
                        }
                    )
                    localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar))
                    let goAccount="account.html"
                    signUpMessage.innerHTML=`Registration Successful <a id="accountGo"
                    href="${goAccount}">Sign In</a>`
                }else{
                    signUpMessage.innerHTML=`Try Again With Different Passwords`
                }
            }else{
                signUpMessage.innerHTML=`Password Cannot Be Less Than 6 Characters`
            }
        }else{
            signUpMessage.innerHTML=`Name And Email Fields Cannot Be Left Blank.`
        }
    }else{
        let goAccount="account.html"
        signUpMessage.innerHTML=`You Have a Membership Registration <a id="accountGo"
        href="${goAccount}">Sign In</a>`
    }
})

