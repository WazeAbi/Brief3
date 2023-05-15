let fermeture = document.getElementById("cross");
let blocktextexp = document.querySelector(".blocktextexp"); 
function Close(){
if(getComputedStyle(blocktextexp).display !="none"){
        blocktextexp.style.display="none";
    
    }
}
fermeture.addEventListener("click",Close)
    

let ouverture = document.getElementById("Presentation");
function Open(){
    if(getComputedStyle(blocktextexp).display =="none" ){
        blocktextexp.style.display="block"
    }
}
ouverture.addEventListener("click",Open);

let fermeture1 = document.getElementById("cross1");
let blocktextformation = document.querySelector(".blocktextformation"); 
function Close1(){
if(getComputedStyle(blocktextformation).display !="none"){
        blocktextformation.style.display="none";
    
    }
}
fermeture1.addEventListener("click",Close1)
    

let ouverture1 = document.getElementById("Formation");
function Open1(){
    if(getComputedStyle(blocktextformation).display =="none" ){
        blocktextformation.style.display="block"
    }
}
ouverture1.addEventListener("click",Open1);


let fermeture2 = document.getElementById("cross2");
let blocktextSkills = document.querySelector(".blocktextSkills"); 
function Close2(){
if(getComputedStyle(blocktextSkills).display !="none"){
        blocktextSkills.style.display="none";
    
    }
}
fermeture2.addEventListener("click",Close2)
    

let ouverture2 = document.getElementById("Skills");
function Open2(){
    if(getComputedStyle(blocktextSkills).display =="none" ){
        blocktextSkills.style.display="block"
    }
}
ouverture2.addEventListener("click",Open2)
//
let fermeture3 = document.getElementById("cross3");
let blocktextContact = document.querySelector(".blocktextContact"); 
function Close3(){
if(getComputedStyle(blocktextContact).display !="none"){
        blocktextContact.style.display="none";
    
    }
}
fermeture3.addEventListener("click",Close3)
    

let ouverture3 = document.getElementById("Contact");
function Open3(){
    if(getComputedStyle(blocktextContact).display =="none" ){
        blocktextContact.style.display="block"
    }
}
ouverture3.addEventListener("click",Open3)

let compteur = document.getElementById("compteur")
    if (localStorage.getItem("compteur")==null)
     localStorage.setItem("compteur",0);

     let compteurvue = Number(localStorage.getItem("compteur"));
     localStorage.setItem("compteur", compteurvue+1);

     console.log(compteur.innerHTML)
     compteur.innerHTML = compteurvue;