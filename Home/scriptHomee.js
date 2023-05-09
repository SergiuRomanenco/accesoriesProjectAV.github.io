const blocExtensie = document.getElementsByClassName("blocNone")
const icon = document.getElementsByClassName("extensie");
console.log(icon);

function extensie() {
for(let i = 0; i < blocExtensie.length; i++){
    blocExtensie[i].classList.toggle("element_blocMare2");
}

for(let i = 0; i < icon.length; i++){
    icon[i].classList.toggle("fa-angle-up");
}
}


//Footer social media
function facebook(){
    window.open("https://www.facebook.com/");
}
function instagram(){
    window.open("https://www.instagram.com/");
}
function whatsapp(){
    window.open("https://www.whatsapp.com/?lang=ro");
}
function telegram(){
    window.open("https://web.telegram.org/k/");
}



