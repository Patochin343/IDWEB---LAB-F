// Ejercicio 9 con Ansyc/Await

async function cargarMensaje() {
    try {
        const resultado = await Promise.resolve("Mensaje caragado");
        console.log(resultado);
    } catch (error) {
        console.error(error);   
    }
}

cargarMensaje();