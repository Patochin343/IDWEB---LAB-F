document.getElementById('btn-transformar').addEventListener('click', () => {
    const seccion = document.getElementById('seccion-objetivo');
    
    // 1. Eliminar H2 original
    const h2Viejo = seccion.querySelector('h2');
    if (h2Viejo) h2Viejo.remove();
    
    // 2. Crear nuevos elementos
    const nuevoH2 = document.createElement('h2');
    nuevoH2.innerText = "Título nuevo";
    
    const nuevoP = document.createElement('p');
    nuevoP.innerText = "Descripción generada";
    
    const ul = document.createElement('ul');
    ['A', 'B', 'C'].forEach(texto => {
        const li = document.createElement('li');
        li.innerText = texto;
        ul.appendChild(li);
    });
    
    // 3. Agregar en orden (prepend pone al principio)
    // El orden de prepend es inverso si queremos que queden arriba
    seccion.prepend(ul);
    seccion.prepend(nuevoP);
    seccion.prepend(nuevoH2);
});