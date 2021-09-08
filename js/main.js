var userNameIn = document.querySelector("#userNameInput")
var userEmailIn = document.querySelector("#userEmailInput")
var userPasswordIn = document.querySelector("#passWordInput")
var userRepasswordIn = document.querySelector("#rePasswordInput")
var userQuestionsAll = document.querySelector("#Questions")
var uesrAnswerQuestion = document.querySelector("#answerQuestion")
var btnSingUp = document.querySelector("#BtnSingUP")
var confirmMessageSignUP = document.querySelector("#confirmMessage")
var Allusers = [];
var userEmailSignIn=document.querySelector("#signInEmail")
var userPassSignIn=document.querySelector("#signInPass")
var BtnSignIn=document.querySelector("#signInBtn")
var massgeSignin=document.querySelector("#massgeLogin")
var forgot =document.querySelector('.forgot-pass')
var loginForm =document.querySelector(".log-form")
var forgotForm=document.querySelector(".forgot-form")
var BtnResetPass=document.querySelector("#ResetPass")
var emailResetPass=document.querySelector("#EmailForReset")
var answerResetPass=document.querySelector("#AnswerForReset")
var newPassword=document.querySelector('#Newpass')
var RenewPassword=document.querySelector('#Re-Newpass')
var closeForgot=document.querySelector(".close-icon")

    if(localStorage.getItem('usersData')!=null)
    {
        Allusers =JSON.parse(localStorage.getItem('usersData'))
    }
    else{
        Allusers = []
    }



 






userNameIn.addEventListener("keyup", userNameValidation)
userEmailIn.addEventListener("keyup", userEmailValidation)
userPasswordIn.addEventListener("keyup", userPasswordValidation)
userRepasswordIn.addEventListener("keyup", userRePasswordValidation)
uesrAnswerQuestion.addEventListener("keyup", uesrAnswerValidation)
btnSingUp.addEventListener("click", CreateUser)
BtnSignIn.addEventListener("click", logIn)
forgot.addEventListener("click",forgotpass)
BtnResetPass.addEventListener("click",checkforRest)
userEmailSignIn.addEventListener("keyup", userNameValidationLogIn)
userPassSignIn.addEventListener("keyup" ,userPasswordValidationLogIn)
function userNameValidationLogIn() {
    var userNameregEX = /^[A-Z][a-z]{4,15}[0-9]{1,3}$/
    if (!userNameregEX.test(userEmailSignIn.value)) {
        userEmailSignIn.classList.add("is-invalid")
        userEmailSignIn.classList.remove("is-valid")

        return false;
    }
    else {
        userEmailSignIn.classList.remove("is-invalid")
        userEmailSignIn.classList.add("is-valid")
        return true;
    }

}
function userPasswordValidationLogIn() {
    var userPasswordregEX = /^[0-9]{8}$/
    if (!userPasswordregEX.test(userPassSignIn.value)) {
        userPassSignIn.classList.add("is-invalid")
        userPassSignIn.classList.remove("is-valid")

        return false;
    }
    else {
        userPassSignIn.classList.remove("is-invalid")
        userPassSignIn.classList.add("is-valid")
        return true;
    }

}

function userNameValidation() {
    var userNameregEX = /^[A-Z][a-z]{4,15}[0-9]{1,3}$/
    if (!userNameregEX.test(userNameIn.value)) {
        userNameIn.classList.add("is-invalid")
        userNameIn.classList.remove("is-valid")

        return false;
    }
    else {
        userNameIn.classList.remove("is-invalid")
        userNameIn.classList.add("is-valid")
        return true;
    }

}
function userEmailValidation() {
    var userEmailregEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!userEmailregEX.test(userEmailIn.value)) {
        userEmailIn.classList.add("is-invalid")
        userEmailIn.classList.remove("is-valid")

        return false;
    }
    else {
        userEmailIn.classList.remove("is-invalid")
        userEmailIn.classList.add("is-valid")
        return true;
    }

}

function userPasswordValidation() {
    var userPasswordregEX = /^[0-9]{8}$/
    if (!userPasswordregEX.test(userPasswordIn.value)) {
        userPasswordIn.classList.add("is-invalid")
        userPasswordIn.classList.remove("is-valid")

        return false;
    }
    else {
        userPasswordIn.classList.remove("is-invalid")
        userPasswordIn.classList.add("is-valid")
        return true;
    }

}


function userRePasswordValidation() {
    var userPasswordregEX = /^[0-9]{8}$/
    if (!userPasswordregEX.test(userRepasswordIn.value)) {
        userRepasswordIn.classList.add("is-invalid")
        userRepasswordIn.classList.remove("is-valid")

        return false;
    }
    else {
        userRepasswordIn.classList.remove("is-invalid")
        userRepasswordIn.classList.add("is-valid")
        return true;
    }

}

function uesrAnswerValidation() {
    var userAnswerregEX = /^[A-Z]{1,20}$/
    if (!userAnswerregEX.test(uesrAnswerQuestion.value)) {
        uesrAnswerQuestion.classList.add("is-invalid")
        uesrAnswerQuestion.classList.remove("is-valid")

        return false;
    }
    else {
        uesrAnswerQuestion.classList.remove("is-invalid")
        uesrAnswerQuestion.classList.add("is-valid")
        return true;
    }

}


function CreateUser() {
    if (userNameValidation() == true) {
        var userNameVal = userNameIn.value;
    }
    else {
        alert("invalid user Name")
    }

    if (userEmailValidation() == true) {
        var userEmailVal = userEmailIn.value;
    }
    else {
        alert("invalid email")
    }

    if (userPasswordValidation() == true) {
        var userPasswordVal = userPasswordIn.value;
    }
    else {
        alert("invalid pass")
    }
    if (userRePasswordValidation() == true) {
        var userrePasswordVal = userRepasswordIn.value;
    }
    else {
        alert("invalid repass")
    }


    if (uesrAnswerValidation() == true) {
        var userAnswerVal = uesrAnswerQuestion.value;
    }
    else {
        alert("invalid answar")
    }

    var userQuestionVal = userQuestionsAll.value;

    var user = {
        name: userNameVal,
        email: userEmailVal,
        pass: userPasswordVal,
        repass: userrePasswordVal,
        Question: userQuestionVal,
        answer: userAnswerVal,
    }
    if(uesrAnswerValidation()&&userRePasswordValidation()&&userPasswordValidation()&&userEmailValidation()&&userNameValidation()){
    if (userrePasswordVal == userPasswordVal) {
        Allusers.push(user)
        localStorage.setItem("usersData", JSON.stringify(Allusers))
        registrationdone()
        restInput()
    }
    else {
        alert("notmatch")
    }
    }
    else
    {
        registrationfailed()
    
    }
    console.log(Allusers)
}

function restInput() {


    userNameIn.value = ""
    userEmailIn.value = ""
    userPasswordIn.value = ""
    userRepasswordIn.value = ""
    userQuestionsAll.value = ""
    uesrAnswerQuestion.value = ""

}

function registrationdone()
{
confirmMessageSignUP.innerHTML="the registration is done"
}
function registrationfailed()
{
confirmMessageSignUP.innerHTML="the registration is failed"
}

function logIn()
{
    var userEmailVal = userEmailSignIn.value;
    var userPasswordVal = userPassSignIn.value;

    for(var i =0 ;i<Allusers.length;i++)
    {
    if(userEmailVal==Allusers[i].name&&userPasswordVal==Allusers[i].pass)
    {
        window.location.href= "gallery.html"
    }
    else{
        messageLoginfailed();
    }
    }
}
function messageLoginfailed()
{
    massgeSignin.classList.remove("d-none")
    userEmailSignIn.classList.add("is-invalid")
    userPassSignIn.classList.add("is-invalid")  
}

function forgotpass()
{

    loginForm.classList.add("d-none")
    forgotForm.classList.remove("d-none")
}

function checkforRest()
{
    var userEmailVal=emailResetPass.value;
    var userAnswerval=answerResetPass.value;

    for(var i=0 ; i<Allusers.length;i++)
    {
        if(userEmailVal==Allusers[i].email&&userAnswerval==Allusers[i].answer)
        {
            
            Allusers[i].pass=newPassword.value;
            Allusers[i].repass=RenewPassword.value;
            localStorage.setItem("usersData", JSON.stringify(Allusers))
            document.querySelector(".message-chenge-pass").classList.remove("d-none")
            
        }
       else{
        document.querySelector(".message-chenge-pass-feild").classList.remove("d-none")
       }
    }

}
closeForgot.addEventListener("click",closeFor)

function closeFor()
{

    loginForm.classList.remove("d-none")
    forgotForm.classList.add("d-none")
}