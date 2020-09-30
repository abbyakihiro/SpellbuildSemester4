let error = document.querySelectorAll("span");
let Submit = document.getElementById("btn-submit");

let validate = function(e)
{
    e.preventDefault();

    
    let fullname = document.getElementById("fName");
    let email = document.getElementById("email");
    let username = document.getElementById("uname");
    let password = document.getElementById("pass");
    let coPassword = document.getElementById("cPass");
    let gender = document.getElementById("gender")
    let address = document.getElementById("address");
    let qty = document.getElementById("quantity");
    let agreement = document.getElementById("agreement");
    

    let result = true;
    
    if(fullname.value.length == 0)
    {
        error[0].innerHTML = "FullName must be Entered!"
        result = false;
        return;  
    }
    // else error[0].innerHTML ="";

    // if (fullname.value.match==/^[A-Za-z]+$/) {
    //     error[0].innerHTML = "Name contains invalid characters (letters and spaces only!)"
    //     return false;
    // }
    // else error[0].innerHTML ="";

    // var letters = /^[A-Za-z]+$/;
    // if(fullname.value.match (letters))
    // {
    //     error[0].innerHTML = "FullName must letters only!"
    //     result = false;
    //     return;  
    // }
    // else error[0].innerHTML ="";


    if(email.value.length == 0)
    {
        error[1].innerHTML = "Email must be Entered!"
        result = false;
        return;  
    }
    else error[1].innerHTML ="";

    if(!email.value.includes ("@") || !email.value.includes ("@"))
    {
        error[1].innerHTML = "Email Must contain ‘@’ and ‘.’!"
        result = false;
         return;  
     }   
     else error[1].innerHTML ="";

    if(username.value.length <6)
    {
        error[2].innerHTML = "Username Must greater than 6"
        result = false;
        return;
    }
    else error[2].innerHTML = "";

    if(username.value.includes(" "))
    {
        error[2].innerHTML = " Username Cannot contain space character (‘ ‘)"
        result = false;
        return;
    }
    else error[2].innerHTML = "";

    if(password.value.length <8)
    {
        error[3].innerHTML = "Password Must greater than 8"
        result = false;
        return;
    }
    else error[3].innerHTML = "";


    if(coPassword.value != password.value )
    {
        error[4].innerHTML = "Confirm Password Must be same with Password"
        result = false;
        return;
    }
    else error[4].innerHTML = "";


    if(qty.value <= 0){
        error[5].innerHTML = "Quantity cannot be 0!"
        result= false;
        return;
    }
    else error[5].innerHTML = ""


    if(!address.endsWith(" Street"))
    {
        error[6].innerHTML = "Address Must ends with ‘ Street’ (case sensitive)"
        result = false;
        return;
    }
    else error[6].innerHTML = "";

    if(!agreement.checked)
    {
        error[7].innerHTML = "Agreement	must be checked!";
        result = false;
        return;
    }
    else error[7].innerHTML = "";













































}
Submit.addEventListener("click", e => validate(e));