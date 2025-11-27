document.getElementById('btn-rotar').addEventListener('click', () => {
    const lista = document.getElementById('lista-rotativa');
    const ultimo = lista.lastElementChild;
    
    if (ultimo) {
        // prepend inserta el nodo al inicio del contenedor
        lista.prepend(ultimo);
    }
});