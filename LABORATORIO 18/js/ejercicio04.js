async function cargarUsuarios() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuarios = await respuesta.json();

        usuarios.forEach(usuario => {
            console.log(usuario.name);
        });
    } catch (error) {
        console.error("Error al cargar los usuarios:", error)
    }
}