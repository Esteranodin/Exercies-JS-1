function rest() {
    const number1 = document.getElementById("firstNumber").value;
    const number2 = document.getElementById("secondNumber").value;
   
    let restdiv = number1 % number2;

    window.alert(restdiv);
}

