
let menuLunes = document.getElementById("menuLunes");
let menuMartes = document.getElementById("menuMartes");
let menuMiercoles = document.getElementById("menuMiercoles");
let menuJueves = document.getElementById("menuJueves");
let menuViernes = document.getElementById("menuViernes");

//articulos del doc
let infoLunes = document.getElementById("infoLunes");
let infoMartes = document.getElementById("infoMartes");
let infoMiercoles = document.getElementById("infoMiercoles");
let infoJueves = document.getElementById("infoJueves");
let infoViernes = document.getElementById("infoViernes");


function mostrar1(){
    menuLunes.classList.toggle("infoLunes")
    infoLunes.style.display = "flex"
}

menuLunes.addEventListener("click", mostrar1);



function mostrar2(){
    menuMartes.classList.toggle("infoMartes")
    infoMartes.style.display = "flex"
}

menuMartes.addEventListener("click", mostrar2);

function mostrar(){
    if()
}


