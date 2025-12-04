// Ejercicio 16 con Async/Await

async function cargarUsuario() {
    try {
        const usuario = await Promise.resolve({ nombre: "Juan", edad: 30 });
        console.log("Usuario cargado:", usuario);
    } catch (error) {
        console.error("Error al cargar el usuario:", error);
    }   
}

cargarUsuario();