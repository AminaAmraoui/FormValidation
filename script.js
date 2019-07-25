let inputs = Array.from(document.querySelectorAll('.input-class'))
// console.log(inputs.filter(el=>el.value).length)
// console.log(inputs[0].value)

document.getElementById("btn-submit")
       .addEventListener("click", function(e) {

    
    let fname = document.getElementById("firstname-txt");
    let lname = document.getElementById("lastname-txt");
    let adress = document.getElementById("adress-txt");
    let email = document.getElementById("email-txt");
    let pwd = document.getElementById("pwd-txt");
    let comment = document.getElementById("comment-txt");
    let msg =""

    /*** Check empty inputs ***/
    if(fname.value === ""){
        msg=msg+'First Name \n'
    }
    if(lname.value === ""){
        msg=msg+'Last Name \n'
    }
    if(adress.value === ""){
        msg=msg+'Adress \n'
    }
    if(email.value === ""){
        msg=msg+'Email \n'
    }
    if(pwd.value === ""){
        msg=msg+'Password \n'
    }
    if(comment.value === ""){
        msg=msg+'Comments '
    }

    // if((fname.value === "")||(lname.value==="")||(adress.value==="")||(email.value==="")||(pwd.value==="")||(comment.value==="")){
    if(inputs.filter(el=>el.value).length!==inputs.length){
        alert('empty input(s): '+msg)
    }
    /*** Check password length ***/
    if ((pwd.value.length < 8) && pwd.value !=="") {
        alert ('short password')
    }

    /*** Check password content ***/

    if((!pwd.value.match(/([a-z])*([0-9])*[A-Z]+/)) && (pwd.value !=="")){
        alert('password must contain charatacters , numbers and at least a capital letter')
    }

    /*** Check valid email ***/

    if((email.value.indexOf('@')===-1) && (email.value !=="")){
        alert('non valid email adress')
    }

});