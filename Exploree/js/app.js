//========ANIMATIE DE SCROLL (GSAP)
//apelez animatia data pentru a nu aparea erori
gsap.registerPlugin(ScrollTrigger, ScrollSmoother) //() --> plugin //scrollTriger - putem manipula cu elementele //scrollSmoother - scroll lin

//daca nu suntem pe un dispozitiv care se listeaza cu touch (mobil, tableta...)

    ScrollSmoother.create({
        wrapper: ".wrapper", //cream o clasa wrapper. wrapper - strat
        content: ".content", //va plana in interiorul wrapper-ului
        smooth: 1.5, //face scroll-ul putin mai lent
        effects: true, //pot controla efectele (ex. p/u un bloc anume ii pot da viteza cu care sa scrolleze)
    });

//animatie pentru imagine si titlu
gsap.fromTo(".hero-section", {opacity: 1}, {
    opacity: 0,
    scrollTrigger: {
        trigger: ".hero-section", 
        start: "center", //tot div-ul incepe a disparea cand ajunge la jumatate
        end: "1000", //cand ajunge la final (opacity 0)
        scrub: true //apare imaginea din nou cand dai scroll inapoi
    }
}); //(clasa careia ne adresam) //{1} - valori pana la animatie, {2} - valori dupa animatie


//animatie pentru elementele din stanga
let itemsL = gsap.utils.toArray(".gallery__left .gallery__item") //transforma elementele intr-un vector de elemente, pentru a putea anima pentru fiecare in parte.
//() --> toate elementele din partea stanga

//crearea unei functii care animeaza pentru fiecare element in parte
itemsL.forEach(item => {
    gsap.fromTo(item, {x: -600,opacity: 0}, {
        opacity: 1, x: 0, //de la coordonatele x -600 pana la x 0
        scrollTrigger: {
            trigger: item,
            start: -1200,
            end: 0,
            scrub: true
        }
    });
});

//animatie pentru elementele din dreapta
let itemsR = gsap.utils.toArray(".gallery__right .gallery__item") //transforma elementele intr-un vector de elemente, pentru a putea anima pentru fiecare in parte.
//() --> toate elementele din partea stanga

//crearea unei functii care animeaza pentru fiecare element in parte
itemsR.forEach(item => {
    gsap.fromTo(item, {x: 600,opacity: 0}, {
        opacity: 1, x: 0, //de la coordonatele x 600 pana la x 0
        scrollTrigger: {
            trigger: item,
            start: -1200,
            end: 0,
            scrub: true
        }
    });
});



    //animatie pentru imagini (RESPONSIVE)
    let itemsImg = gsap.utils.toArray(".gallery__img") //transforma elementele intr-un vector de elemente, pentru a putea anima pentru fiecare in parte.
    //() --> toate elementele din partea stanga

    //crearea unei functii care animeaza pentru fiecare element in parte
    itemsImg.forEach(item => {
        gsap.fromTo(item, {x: -600,opacity: 0}, {
            opacity: 1, x: 0, //de la coordonatele x -600 pana la x 0
            scrollTrigger: {
                trigger: item,
                start: -1200,
                end: 0,
                scrub: true
            }
        });
    })

    //animatie pentru div-urile cu text (RESPONSIVE)
    let itemsText = gsap.utils.toArray(".gallery__text") //transforma elementele intr-un vector de elemente, pentru a putea anima pentru fiecare in parte.
    //() --> toate elementele din partea stanga

    //crearea unei functii care animeaza pentru fiecare element in parte
    itemsText.forEach(item => {
        gsap.fromTo(item, {x: 600,opacity: 0}, {
            opacity: 1, x: 0, //de la coordonatele x 600 pana la x 0
            scrollTrigger: {
                trigger: item,
                start: -1200,
                end: 0,
                scrub: true
            }
        });
    });





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

//=========CLICK PE IMAGINI 
function btnImg1(){
    window.open("https://www.rolex.com/watches/submariner.html?ef_id=Cj0KCQjwt_qgBhDFARIsABcDjOdyrCsvbbJUrO81Req58NWd_n38PYx-FdJlKHpsNOkOlHA7yjpnnpAaAjmjEALw_wcB:G:s&s_kwcid=AL!141!3!616356892712!e!!g!!rolex%20submariner");
};
function btnImg2(){
    window.open("https://www.tagheuer.com/ro/en/timepieces/collections/tag-heuer-aquaracer/?mkwid=s&pcrid=518142615005&pdv=c&pkw=tag%20heuer%20aquaracer&pmt=e&gclid=Cj0KCQjwt_qgBhDFARIsABcDjOdQPsN7zipJlVlpPucghRU93kTlVTOwbhHufIbvJx7wIRD_sKm485AaAqIEEALw_wcB");
};
function btnImg3(){
    window.open("https://www.breitling.com/ro-en/watches/navitimer/?gclid=Cj0KCQjwt_qgBhDFARIsABcDjOebk9ula9VA0aXR8qzzjqUKiugm6TDrxEuR9lwd-FeejWIbYtyeWugaAjhaEALw_wcB");
};
function btnImg4(){
    window.open("https://www.chrono24.ro/omega/speedmaster--mod74.htm");
};
function btnImg5(){
    window.open("https://www.rolex.com/watches/datejust.html?ef_id=Cj0KCQjwt_qgBhDFARIsABcDjOfDsky_72H75EymlVgTUo6rIXXwQpT3fhu0HoFmjdtQiscWeiapGL4aAuK4EALw_wcB:G:s&s_kwcid=AL!141!3!616356892556!e!!g!!rolex%20datejust");
};


//==========DARK MODE LIGHT MODE
function lightMode(){
    const lightBtn = document.getElementById("body");
    const x = document.getElementById("nagivatie");
    const link = x.getElementsByTagName("a");
    const icon = x.getElementsByTagName("i");
    const title = document.getElementById("main-title");
    const gallery = document.getElementById("gallery");
    const itemsH2 = gallery.getElementsByTagName("h2");
    const itemsP = gallery.getElementsByTagName("p");
    const buton = document.getElementById("iconMode");
    const footer = document.getElementById("footer");
    const linkFooter = document.getElementById("link-black");
    const linkUri = document.getElementById("link-uri");
    const elemLink = linkUri.getElementsByTagName("a");
    const email = document.getElementById("formFooter");
    const textResponsive = document.getElementsByClassName("text-block");

    lightBtn.classList.toggle("lightMode"); //toata pagina
    for(let i = 0; i < link.length; i++)
    {
        link[i].classList.toggle("link_navB"); //link-uri nav
    }
    for(let i = 0; i < icon.length; i++) 
    {
        icon[i].classList.toggle("classI"); //icons nav
    }
    title.classList.toggle("black-title"); //titlu principal
    for(let i = 0; i < itemsH2.length; i++)
    {
        itemsH2[i].classList.toggle("blackH2"); //h2 elemente
    }
    for(let i = 0; i < itemsP.length; i++)
    {
        itemsP[i].classList.toggle("blackP"); //p elemente
    }
    footer.classList.toggle("footer-black"); //footer
    linkFooter.classList.toggle("link-black"); //link footer
    for(let i = 0; i < elemLink.length; i++)
    {
        elemLink[i].classList.toggle("link-black"); //link-uri footer
    }
    email.classList.toggle("email-black"); //input-email

    for(let i = 0; i < textResponsive.length; i++){
        textResponsive[i].classList.toggle("blackResponsive");
    }

    //schimbarea butonului
    if(buton.classList.contains("fa-moon")){
        buton.classList.add("fa-sun");
        buton.classList.remove("fa-moon");
    } else {
        buton.classList.add("fa-moon");
        buton.classList.remove("fa-sun");
    }
    
};
