
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

var aux = document.getElementById("nada");

function mostrar1(){
    aux.style.display = "none";
    infoLunes.style.display = "flex";
    aux = infoLunes;
}

menuLunes.addEventListener("click", mostrar1);

function mostrar2(){
    aux.style.display = "none";
    infoMartes.style.display = "flex";
    aux = infoMartes;
}

menuMartes.addEventListener("click", mostrar2);

function mostrar3(){
    aux.style.display = "none";
    infoMiercoles.style.display = "flex";
    aux = infoMiercoles;
}

menuMiercoles.addEventListener("click", mostrar3);

function mostrar4(){
    aux.style.display = "none";
    infoJueves.style.display = "flex";
    aux = infoJueves;
}

menuJueves.addEventListener("click", mostrar4);

function mostrar5(){
    aux.style.display = "none";
    infoViernes.style.display = "flex";
    aux = infoViernes;
}

menuViernes.addEventListener("click", mostrar5);