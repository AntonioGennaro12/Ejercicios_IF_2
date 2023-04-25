/*
Portal de cambio que reciba solo bitcoin 
y si quiere convertir a ethereum o dólar
utilizar los siguientes tipos de cambio
1 bitcoin = 13,54 ETH 
1 bitcoin = 39.685,40 USD  
Se muestra el valor recibido y el cambio realizado.
Se incluye uso de "label", "input" y "button" 
*/

const monedaCambia    = document.querySelector ("#moneda-cambia")
const montoCambia     = document.querySelector ("#monto-cambia")
const moneadaDestino  = document.querySelector ("#moneda-destino")
const parrafoSalida1  = document.querySelector ("#mi-parrafo1")
const parrafoSalida2  = document.querySelector ("#mi-parrafo2")

const MONEDA_ACEPTADA = "bitcoin";
const MONEDA_CAMBIO_ETH = "ethereum";
const MONEDA_CAMBIO_DOL = "dolar"
const TIPO_CAMBIO_ETH = 13.54;
const TIPO_CAMBIO_DOL = 39685.40;

function realizaCambio() {

    let monedaIngresada = monedaCambia.value ;
    let montoIngresado  = parseFloat(montoCambia.value );
    let monedaACambiar  = moneadaDestino.value;

    function imprimeCambio (moneda, monto) {
        parrafoSalida2.textContent = "Moneda cambiada..: " +moneda+ " - Monto cambiado = " +monto+"" ; 
    }


    if ((monedaIngresada == MONEDA_ACEPTADA) && ((monedaACambiar == MONEDA_CAMBIO_ETH)||(monedaACambiar==MONEDA_CAMBIO_DOL))) {
        
        parrafoSalida1.textContent = "Moneda recibida.....: " +monedaIngresada+ " - Monto recibido = " +montoIngresado+ "";

            if (monedaACambiar == MONEDA_CAMBIO_ETH) {
                imprimeCambio (monedaACambiar, (montoIngresado*TIPO_CAMBIO_ETH));
            }
            else {
                imprimeCambio (monedaACambiar, (montoIngresado*TIPO_CAMBIO_DOL));
            }
        }

    else {
        parrafoSalida1.textContent = "Operación de Cambio no permitida, aceptamos solo "+MONEDA_ACEPTADA+ 
                                            " para cambiar por " +MONEDA_CAMBIO_ETH+ " o "+MONEDA_CAMBIO_DOL+""; 
    };
}
