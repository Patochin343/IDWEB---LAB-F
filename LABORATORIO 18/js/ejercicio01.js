function cargarUsuario() {
    fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(respuesta => respuesta.json())  // Convertir a JSON
        .then(usuario => {
            console.log("Nombre:", usuario.name);
            console.log("Username:", usuario.username);
            console.log("Email:", usuario.email);
        })
        .catch(error => {
            console.error("Error al cargar el usuario:", error);
        });
}