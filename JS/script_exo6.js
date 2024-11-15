function rest() {
    const number1 = document.getElementById("firstNumber").value;
    const number2 = document.getElementById("secondNumber").value;
   
    let restdiv = number1 % number2;

    window.alert(restdiv);
}


// Correction Jérémy sur deux fichiers JS en exportant possible simplement que si serveur local
// premier fichier aves fonction
// functionresteDivision(firstNumber, secondNumber){
//     return firstNumber % secondNumber;
// }
// export{resteDivision};

// second fichier
// import {resteDivision} from "./nomfichier";
// let resultat = restDivision(5, 2);
// console.log (resultat);
// et dans html précisé que le script est de "type " = "module"
