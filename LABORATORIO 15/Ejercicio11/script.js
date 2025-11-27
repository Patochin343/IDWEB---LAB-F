document.getElementById('btn-vaciar').addEventListener('click', () => {
    const contenedor = document.getElementById('contenido');
    // Establecer innerHTML vacío borra todo lo que esté dentro
    contenedor.innerHTML = ''; 
});