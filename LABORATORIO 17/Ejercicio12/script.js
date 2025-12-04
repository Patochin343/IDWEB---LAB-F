// Ejercicio 10 con promsesas

function cargarUsuario() {
    return new Promise((resolve, reject) => {
        const timepoAliatorio = Math.floor(Math.random() * (1500 - 800 + 1) + 800);
        setTimeout(() => {
            const usuario = { id: 1, nombre: 'Juan Pérez' };
            resolve(usuario);
        }, timepoAliatorio);
    })
};

cargarUsuario()
.then(usuario => {
    console.log('Usuario cargado:', usuario);
})
.catch(error => {
    console.error('Error al cargar el usuario:', error);
}); 