/*Realice una función en JS, que dados un número y un arreglo como parámetros, retorne cuantas ocurrencias existen de ese número dentro del arreglo.*/

function ocurrencias(numero, arreglo){
    var count = 0;
    var acum = 0;
    while( count< arreglo.length){
        if(arreglo[count]== numero){

            acum += 1;

        }
        count ++;

    }
    console.log("La cantidad de ocurrencias de este numero es: " + count);
}

let arreglo = [1,1,1,1,1,1];
ocurrencias(1, arreglo);