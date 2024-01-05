let answer = prompt ("¡Bienvenido! ¿Qué topping deseas para tu helado? Tenemos oreo, kitkat y brownie");

if (answer === "ninguno") {
  alert("De acuerdo, serían $50 MXN, por favor.");
} else if (answer === "oreo") {
    alert("De acuerdo, serían $60 MXN, por favor.");
} else if (answer === "kitkat") {
    alert("De acuerdo, serían $65 MXN, por favor.");
} else if (answer === "brownie") {
    alert("De acuerdo, serían $70 MXN, por favor.");
} else {
  alert("No tenemos ese topping, lo sentimos.");
} 


