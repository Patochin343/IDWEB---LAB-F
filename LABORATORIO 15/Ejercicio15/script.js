document.getElementById('btn-indexar').addEventListener('click', () => {
    const secciones = document.querySelectorAll('section');
    
    secciones.forEach((seccion, indice) => {
        // El índice empieza en 0, le sumamos 1
        seccion.setAttribute('data-index', indice + 1);
        
        // Visualmente mostramos que funcionó (opcional)
        seccion.style.border = "1px solid green";
    });
});