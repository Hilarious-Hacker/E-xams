var eid=document.getElementById("eid");
var ead=document.getElementById("ead");
var pwd=document.getElementById("pwd");
var E  =document.getElementById("err");
var EID=document.getElementById("EID");
var EAD=document.getElementById("EAD");
var PWD=document.getElementById("PWD");

function eidclk(){
    eid.placeholder="";
    eid.style.backgroundColor="rgb(232,240,254)";
    EID.style.opacity=1;
}

function eadclk(){
    ead.placeholder="";
    ead.style.backgroundColor="rgb(232,240,254)";
    EAD.style.opacity=1;
}

function pwdclk(){
    pwd.placeholder="";
    pwd.style.backgroundColor="rgb(232,240,254)";
    PWD.style.opacity=1;
}

eid.addEventListener('keypress',(e)=>{
    if(e.keyCode==13)
    {
        eadclk();
        ead.focus();
    }
});

pwd.addEventListener('keypress',(e)=>{
    if(e.keyCode==13)
    {
        validate();
    }
});

ead.addEventListener('focus',()=>{
    eadclk();
});

ead.addEventListener('keypress',(e)=>{
    if(e.keyCode==13)
    {
        pwdclk();
        pwd.focus();
    }
});

pwd.addEventListener('focus',()=>{
    pwdclk();
});

function validate(){
    var x=eid.value;
    var y=ead.value;
    var z=pwd.value;
    if(z.length<7)
    {
        E.innerHTML="Password length must be greater than 7";
        E.style.color="red"; 
    }
    else
    {
        if(y.includes("@gmail.com"))
        {
            E.innerHTML="Registration Successful";
            E.style.color="black";
            eid.value="";
            ead.value="";
            pwd.value="";
        }
        else{
            E.innerHTML="Registration must be only from @gmail.com domain";
            E.style.color="red";
            eid.value="";
            ead.value="";
            pwd.value="";
        }
    }
}
