/*
Portal de cambio que reciba solo bitcoin 
y si quiere convertir a ethereum o dólar
utilizar los siguientes tipos de cambio
1 bitcoin = 13,54 ETH 
1 bitcoin = 39.685,40 USD  
Se muestra e valor recibido y el cambio realizado.

*/

const MONEDA_ACEPTADA = "bitcoin";
const MONEDA_CAMBIO_ETH = "ethereum";
const MONEDA_CAMBIO_DOL = "dolar"
const TIPO_CAMBIO_ETH = 13.54;
const TIPO_CAMBIO_DOL = 39685.40;

let monedaIngresada = prompt("Ingrese el tipo de moneda que quiere cambiar");
let montoIngresado = prompt ("Ingrese el monto que quiere cambiar");
let monedaACambiar = prompt ("Ingrese la moneda a la cual quiere cambiar");

if ((monedaIngresada == MONEDA_ACEPTADA) && ((monedaACambiar == MONEDA_CAMBIO_ETH)||(monedaACambiar==MONEDA_CAMBIO_DOL))) {
    document.write ("<h3>Moneda recibida = " +monedaIngresada+ ", Monto recibido = " + montoIngresado + "</h3>");
    if (monedaACambiar == MONEDA_CAMBIO_ETH) {
        document.write ("<h3>Moneda cambiada = " + monedaACambiar+ ", Monto Cambiado = " + (montoIngresado*TIPO_CAMBIO_ETH)+"</h3" ); 
    }
    else {
        document.write ("<h3>Moneda cambiada = " + monedaACambiar+ ", Monto Cambiado = " + (montoIngresado*TIPO_CAMBIO_DOL)+"</h3>" ); 
    }
}

else {
    document.write ("Operación de Cambio no permitida, aceptamos solo bitcoin para cambiar por ethereum o dólares." ); 
};