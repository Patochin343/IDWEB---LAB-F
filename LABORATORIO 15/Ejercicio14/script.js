document.getElementById('btn-ordenar').addEventListener('click', () => {
    const div = document.getElementById('contenedor-letras');
    // Convertimos NodeList a Array para poder usar sort()
    const parrafos = Array.from(div.querySelectorAll('p'));
    
    parrafos.sort((a, b) => {
        return a.innerText.localeCompare(b.innerText);
    });
    
    // Al hacer appendChild de elementos que ya existen, se mueven de lugar
    parrafos.forEach(p => div.appendChild(p));
});