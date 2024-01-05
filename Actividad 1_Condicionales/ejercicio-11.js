alert ("Hola, vamos a calcular el precio total a pagar de acuerdo con la distancia recorrida por un vehículo con cargo extra por los litros consumidos.")
function calcularprecioTotal(TipoVehículo, Kilometrosrecorridos, litrosConsumidos) {
    let precioKilometro = 0;
    let precioextra = 0;

    switch (TipoVehículo) {
        case 'coche':
            precioKilometro = 0.20;
            break;
        case 'moto':
            precioKilometro = 0.10;
            break;
        case 'bus':
            precioKilometro = 0.5;
            break;
        default:
            alert('Cotización de vehículo no disponible');
            return;
    }


    if (litrosConsumidos > 0 && litrosConsumidos <= 100) {
        precioextra = 5;
    } else if (litrosConsumidos > 100) {
        precioextra = 10;
    }

 // precioTotal (Sin cargo extra por litros consumidos) = precioKilometro * Kilometrosrecorridos
 // precioTotal = (precioKilometro * Kilometrosrecorridos) + precioextra

    const precioTotal = (precioKilometro) * (Kilometrosrecorridos) + precioextra;
    alert(`El total a pagar es: $${precioTotal}`);
    return;
}


// Datos a ingresar en el localHost
const TipoDeVehiculo = prompt("Ingrese el tipo de vehículo: Coche, Moto o Bus");
const Kilometrosrecorridos = parseFloat(prompt("Ingresa los kilómetros recorridos"));
const litrosConsumidos = parseFloat(prompt("Ingresa los litros consumidos"));

// Cálculo
calcularprecioTotal(TipoDeVehiculo, Kilometrosrecorridos, litrosConsumidos);