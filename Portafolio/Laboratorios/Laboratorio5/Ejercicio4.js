/*Elabore una función que llene un arreglo con 20 números de forma aleatoria (random), y que pida al usuario adivinar un número, 
si lo adivina mostrará un mensaje indicando que ganó, si no mostrará que perdió. */



function aleatorio(numeroA){
    let arreglo = new Array();

for (let i = 0; i < 20; i++){
    arreglo.push(parseInt(Math.random()*(20 - 1 + 1)), 10) + 1;
} 

    for( let j = 0; j< arreglo.length; j++){
        if(arreglo[j] == numeroA){
            console.log("Has ganado");
        }
        else{
            console.log("Has perdido");
        }
    }

}

aleatorio(3);
