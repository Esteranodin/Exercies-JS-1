let number1 = prompt('Tapez un nombre à virugule');
let number2 = prompt('Tapez un deuxième nombre à virugule');


function multi (nombre1, nombre2){
    return  Math.trunc(nombre1) * nombre2;   
}

window.alert(multi(number1, number2));