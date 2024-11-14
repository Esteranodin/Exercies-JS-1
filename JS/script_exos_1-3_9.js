//EXO 1
// let boite = prompt('test de boite de dialogue');

// EXO 2
// let lastName = 'Doe';
// let firstName = 'John';
// let city = 'New-York';
// window.alert ('Nom : ' + lastName + '\n' + 'Prénom : ' + firstName + '\n' + 'Ville : ' + city) 

//EXO 3
// let prenom = prompt('Tapez votre prénom');
// window.alert ('Bonjour, ' + prenom);

//EXO 9
let nombreRandom = prompt('Tapez un nombre');
let multiTabl;
let result = "";

for (let i = 1; i <= 10; i += 1) {
     multiTabl = nombreRandom * i;
     result += nombreRandom + "x" + i + "=" + multiTabl + '\n';
}

window.alert(result);

// EXO 10

// let aword = prompt('Tapez un mot');

// window.alert ('Nom : ' + lastName + '\n' + 'Prénom : ' + firstName + '\n' + 'Ville : ' + city) 