//==========CAROUSEL
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
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


//==============BUTOANE
function btnRolex() {
  window.open("https://www.rolex.com/watches/new-watches?ef_id=CjwKCAjw586hBhBrEiwAQYEnHQjWnmVQdkqBZNgI358Dqj8D4OcwHwa8MCu6QMbML5ptip6rivaQVBoCCNAQAvD_BwE:G:s&s_kwcid=AL!141!3!651560798612!e!!g!!rolex");
}
function btnCasio() {
  window.open("https://www.casio.com/intl/");
}
function btnOmega() {
  window.open("https://www.omegawatches.com/ru/");
}
function btnTissot() {
  window.open("https://www.tissotwatches.com/en-en/#redirect-from-no-store");
}
function btnBreitling() {
  window.open("https://www.breitling.com/ro-en/?gclid=CjwKCAjw586hBhBrEiwAQYEnHaIAOim-Idpo6MMaQqoS55U9elD6IlTzza8OpYuctmTCDw1oYFyyVRoC8kwQAvD_BwE");
}
function btnMuseum1() {
    window.open("https://museum.seiko.co.jp/en/");
}
function btnMuseum2() {
  window.open("https://www.omegawatches.com/planet-omega/heritage/museum");
}



/*GALEIRE IMAGINI
============================*/
let modal = document.getElementById('myModal');
let elementeImg = document.getElementById("container3");
let imagini = elementeImg.getElementsByTagName("img");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");


//let efectImg = document.getElementsByClassName("middle");
//let img = document.getElementById("myImage")

for (let i = 0; i < imagini.length; i++) {
  imagini[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
};


var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
};




