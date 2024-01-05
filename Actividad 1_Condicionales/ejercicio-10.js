/* Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses */

let course = 4999;
let carrera = 3999;
let master = 2999;

let descuentoFB = 0.20;
let descuentoGoogle = 0.15;
let descuentoJesua = 0.50;

let userAnswer = prompt("Introduce que es lo que deseas \n1.- Course($4999) \n2.- Carrera($3999) \n 3.-Master($2999")
userAnswer = userAnswer.toLowerCase();

if (userAnswer == "1" || userAnswer == "course" ) {
    let userAnswer2 = prompt("Cuentas con una beca");
    if (userAnswer2 == "facebook") {
        alert(`El total a pagar por mes sería ${course-(course*descuentoFB)}`)
        course = course-(course*descuentoFB)
        alert(`El total del curso sería ${course*2} por 2 meses`)
    }else if(userAnswer2 == "google"){
        alert(`El total a pagar por mes sería ${course-(course*descuentoGoogle)}`)
        course = course-(course*descuentoGoogle)
        alert(`El total del curso sería ${course*2} por 2 meses`)
    }else if(userAnswer2 == 'jesua'){
        alert(`El total a pagar por mes sería ${course-(course*descuentoJesua)}`)
        course = course-(course*descuentoJesua)
        alert(`El total del curso sería ${course*2} por 2 meses`)
    }  
}else if(userAnswer == "2" || userAnswer == "carrera"){
    let userAnswer2 = prompt("Cuentas con una beca");
    if (userAnswer2 == "facebook") {
        alert(`El total a pagar por mes sería ${carrera-(carrera*descuentoFB)}`)
        carrera = carrera-(carrera*descuentoFB)
        alert(`El total del curso sería ${carrera*12} por 6 meses`)
    }else if(userAnswer2 == "google"){
        alert(`El total a pagar por mes sería ${carrera-(carrera*descuentoGoogle)}`)
        carrera = carrera-(carrera*descuentoGoogle)
        alert(`El total del curso sería ${carrera*6} por 6 meses`)
    }else if(userAnswer2 == 'jesua'){
        alert(`El total a pagar por mes sería ${carrera-(carrera*descuentoJesua)}`)
        carrera = carrera-(carrera*descuentoJesua)
        alert(`El total del curso sería ${carrera*6} por 6 meses`)
    }  
}else if(userAnswer == "3" || userAnswer == "master"){
    let userAnswer2 = prompt("Cuentas con una beca");
    if (userAnswer2 == "facebook") {
        alert(`El total a pagar por mes sería ${master-(master*descuentoFB)}`)
        master = master-(master*descuentoFB)
        alert(`El total del curso sería ${master*6} por 12 meses`)
    }else if(userAnswer2 == "google"){
        alert(`El total a pagar por mes sería ${master-(master*descuentoGoogle)}`)
        master = master-(master*descuentoGoogle)
        alert(`El total del curso sería ${master*12} por 12 meses`)
    }else if(userAnswer2 == 'jesua'){
        alert(`El total a pagar por mes sería ${master-(master*descuentoJesua)}`)
        master = master-(master*descuentoJesua)
        alert(`El total del curso sería ${master*12} por 12 meses`)
    } 
}