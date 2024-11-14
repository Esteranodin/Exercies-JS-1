function major() {
    const age = document.getElementById("age").value;
    if (age >= 18) {
        window.alert("Vous êtes majeur");   
    }
    else {
        window.alert("Vous êtes mineur");
    };
}