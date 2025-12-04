/*
Crea una función llamada cargarUsuario que reciba un callback. 
La función debe esperar entre 800 ms y 1500 ms (tiempo aleatorio usando setTimeout). 
Luego debe llamar al callback con un objeto que represente un usuario (id y nombre). 
El callback debe imprimir el usuario formateado, por ejemplo: Usuario cargado: Juancito (ID:1)
*/

function cargarUsuario(callback) {
    const tiempoEspera = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;    
    setTimeout(() => {
        const usuario = {
            id: 1,
            nombre: "Juancito"
        };
        callback(usuario);
    }, tiempoEspera);
}

function mostrarUsuario(usuario) {
    console.log(`Usuario cargado: ${usuario.nombre} (ID:${usuario.id})`);
}

cargarUsuario(mostrarUsuario);