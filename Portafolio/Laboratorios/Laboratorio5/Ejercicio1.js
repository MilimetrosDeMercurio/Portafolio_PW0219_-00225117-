function listar(arg){
    var acumNumber = 0;
    var acumString = 0;
    var acumNull = 0;
    var acumUndefined = 0;
    var acumBoolean = 0;
    var acumSymbol = 0;

    for(var i=0; i<arg.length; i++){
      
        console.log(typeof arg[i]) ;
        
        if(typeof(arg[i])== "number"){
            acumNumber += 1;
        }
        if(typeof(arg[i])== "string"){
            acumString += 1;
        }
        
        if(typeof(arg[i])== "null"){
            acumNull += 1;
        }
        
        if(typeof(arg[i])== "undefined"){
            acumUndefined += 1;
        }
        
        if(typeof(arg[i])== "boolean"){
            acumBoolean += 1;
        }
        
        if(typeof(arg[i])== "Symbol"){
            acumSymbol += 1;
        }
    
    }

   
   console.log("Cantidad de numeros es: " + acumNumber);

   console.log(acumString);

   console.log(acumNull);

   console.log(acumUndefined);

   console.log(acumBoolean);

   console.log(acumSymbol);

}

let arreglo = [1,"TEXTO",258];
listar(arreglo);




