function cargarUsuario() {
    fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(respuesta => respuesta.json())     
        .then(usuario => {
            
            document.getElementById("nombre").textContent = usuario.name;
            document.getElementById("email").textContent = usuario.email;
            document.getElementById("ciudad").textContent = usuario.address.city;

        })
        .catch(error => {
            console.error("Error al cargar el usuario:", error);
        });
}
