document.getElementById('btn-clonar').addEventListener('click', () => {
    const main = document.getElementById('main-area');
    // Seleccionamos el primer article que encontremos
    const articuloOriginal = document.querySelector('article');
    
    // true indica que se clona el elemento Y su contenido
    const clon = articuloOriginal.cloneNode(true);
    
    main.appendChild(clon);
});