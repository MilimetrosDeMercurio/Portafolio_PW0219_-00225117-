/*Realice una función que reciba un arreglo de datos numéricos, y muestre la suma de todos los elementos del arreglo y su promedio. */


function mostrar(arregloNUmerico){

var acumNumerico = 0;
    for(var i = 0; i< arregloNUmerico.length; i++){
        acumNumerico += arregloNUmerico[i];

    }

    var promedio = acumNumerico/arregloNUmerico.length;

    console.log("La suma es: " + acumNumerico);
    console.log("El promedio es" + promedio);


}

let arregloNUmerico = [1,2,3,4,5];
mostrar(arregloNUmerico)
