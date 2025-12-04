/*
 Crear una función llamada cargarMensaje que reciba un callback, 
 espere 1 segundo utilizando setTimeout y llame al callback con el mensaje: 
 "Mensaje cargado" que deberá ser impreso en pantalla
*/

function cargarMensaje(callback) {
    setTimeout(() => {
        const mensaje = "Mensaje cargado...";
        callback(mensaje);
    }, 1000);
}

cargarMensaje(mensaje => {
    console.log(mensaje);
});