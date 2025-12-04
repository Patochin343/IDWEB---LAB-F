// Ejercicio 9 con promesas

function cargarMensaje() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true;
            if (exito) {
                resolve("Mensaje Cargado");
            } else {
                reject("Error al cargar el mensaje.");
            }
        }, 1000);
    })
};

cargarMensaje()
    .then(mensaje => {console.log(mensaje);})
    .catch(error => {console.error(error);});