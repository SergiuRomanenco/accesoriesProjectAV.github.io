//=============MENU BRAND
let numeBrand = document.getElementById("nume_brand");
let main = document.getElementById("main");
//Aparitia si disparitia denumirilor de brand
function menuButon() {
    numeBrand.classList.toggle("nume_brand_Block");  
}



//===========SCROLL TO TOP BUTTON
const myButton = document.getElementById("myBtn");
//cand dau scroll mai mult de 50 px, apare butonul
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        myButton.classList.remove("btnNone");
        myButton.classList.add("myBtn");
        myButton.classList.remove("disparitieBtn");
    } else {
        myButton.classList.remove("myBtn");
        myButton.classList.add("disparitieBtn");
    }
};
//cand dau click pe buton ma aduce la inceput
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0 //for Chrome, Firefox, IE and Opera
};
    


 
//=============FILTRU SORTARE
let filterBox = document.getElementsByClassName("main_item"); 

document.getElementById("nume_brand").addEventListener("click", (event) => {
    if(event.target.className !== "numeBrandItem") {
        return false; // cand dau click in afara elementului sa nu dispara blocurile 
    }  //event.target --> elementul pe care am dat click

    let filterClass = event.target.dataset["id"];
    console.log(filterClass);


    for(let i = 0; i < filterBox.length; i++){ 
        filterBox[i].classList.remove("hide")
        if(!filterBox[i].classList.contains(filterClass) && filterClass !== "all"){
            filterBox[i].classList.add("hide")
        } 
    }

});




//=======================JSON
const bloc = document.getElementById("main_item");
bloc.onclick = function() {
    console.log('clicked');
    window.open('./json.html')

    window.onload = function() {
        // pas 1: crearea elementului
        var paragraf1 = document.createElement("p")
        // pas 2: adaugarea textului la elementul creat
        var textParagraf1 = document.createTextNode("Paragraf creat din JS")
        paragraf1.appendChild(textParagraf1)
        // pas 3: adaugarea elementului la body/div
         document.body.appendChild(paragraf1)  
    }
}




    


