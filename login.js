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

