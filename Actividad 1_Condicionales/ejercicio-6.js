let answer = parseFloat(prompt('Ingresa un número'));
let answer2 = parseFloat(prompt('Ingresa un número'));
let answer3 = parseFloat(prompt('Ingresa un número'));

if (answer === answer2 && answer2 == answer3) {
    alert( answer + " es mayor");
} else {
    let númeroMayor = Math.max(answer, answer2, answer3);
    alert("El número mayor es: " + númeroMayor);
}  


