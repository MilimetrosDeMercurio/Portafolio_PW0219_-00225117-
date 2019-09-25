function palindroma(palabra){
    var isPalindroma = true;
    var original = palabra.split("");
    var invertido = palabra.split("").reverse();
    console.log(invertido);

    for(var i=0; i<original.length; i++){
        if(invertido[i] != original[i]){
            console.log("No es palindroma");
            isPalindroma = false;
            break;
        }
    }
    if( palindroma == true){
        console.log("Es palindroma");
    }
}

palindroma("colega");