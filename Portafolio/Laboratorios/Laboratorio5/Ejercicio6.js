/*Ordenamiento de array: Crear una función en JavaScript que ordene los elementos de un Array en orden ascendente. */

function ordenar(lista){
    for(var i = 0; i<lista.length; i++){
        for(var j= 0; j<lista.length -1; j++){
            if(lista[j+1]<lista[j]){
                var aux = lista[j+1];
                lista[j+1] = lista[j]
                lista[j] = aux;
            }
        }
    }

    return lista;

}

console.log(ordenar([216546,21,56,0,35,8]));