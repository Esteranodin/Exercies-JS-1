function mathsfordraws() {
    const size = document.getElementById("shoeSize").value;
    const birthyear = document.getElementById("yearOfBirth").value;

    let multi2 = size * 2;
    let add5 = multi2 + 5;
    let multi50 = add5 * 50;
    let subyear = multi50 - birthyear;
    let total = subyear + 1766;

    window.alert(total);
}

// refactoriser en une ligne
// function calcul(a, b) {
//     return (a * 2 + 5) * 50 - b + 1766;
//   }
