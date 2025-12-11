async function cargarUsuario() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/10");
        const usuario = await respuesta.json();

        console.log("Nombre:", usuario.name);
        console.log("Username:", usuario.username);
        console.log("Email:", usuario.email);
    } catch (error) {
        console.error("Error al cargar el usuario:", error);
    }
}