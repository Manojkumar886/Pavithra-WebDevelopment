let Validation=()=>
{
    let a=document.forms["myform"].fname.value;
    let b=document.forms["myform"].add.value;
    let c=document.forms["myform"].email.value;
    let d=document.forms["myform"].pass.value;
    let reloading=true;

    if(a.length==0)
    {
        document.getElementById("fname1").innerHTML="firstname should't empty"
        reloading=false;
    }
    else if(!((/^[A-Za-z]+$/).test(a)))
    {
        document.getElementById("fname1").innerHTML="firstname used  only letters"
        reloading=false;
    }

    if(b.length<=0)
    {
        document.getElementById("add1").innerHTML="address should't empty"
        reloading=false;
    }
    else if(!((/^[a-zA-Z0-9\s,-/]+$/).test(b)))
    {
        document.getElementById("add1").innerHTML="address rules [flatno/streetname/post-pincode]"
        reloading=false;
    }

    if(c.length==0)
    {
        document.getElementById("email1").innerHTML="email input should't empty"
        reloading=false;   
    }
    else if(!((/^(?=.*[@.])[a-z0-9@.]+$/).test(c)))
    {
        document.getElementById("email1").innerHTML="invaild email id"
        reloading=false;
    }
    if(d.length==0)
    {
        document.getElementById("pass1").innerHTML="password input should't empty"
        reloading=false;   
    }
    else if(!((/^[A-Za-z0-9!@#$%^&*?]{8,16}$/).test(d)))
    {
        document.getElementById("pass1").innerHTML="your password contain between 8 to 16 digit with alpha,number.special character"
        reloading=false;      
    }

    return reloading;
}