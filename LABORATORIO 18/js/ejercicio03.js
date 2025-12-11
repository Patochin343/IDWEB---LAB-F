function consultar() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then (response => response.json())
    .then (usuarios => {
        usuarios.forEach( u => {
            console.log(u.name);
        });
    })
    .catch (error => {
        console.error("Error al cargar los usuarios:", error);
    });
}