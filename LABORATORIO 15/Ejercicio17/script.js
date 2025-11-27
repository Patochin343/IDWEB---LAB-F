document.getElementById('btn-generar-lista').addEventListener('click', () => {
    const contenedor = document.getElementById('zona-lista');
    const ul = document.createElement('ul');
    
    // Creamos 3 elementos de ejemplo
    for(let i=1; i<=3; i++){
        const li = document.createElement('li');
        li.innerText = "Elemento " + i + " ";
        
        const span = document.createElement('span');
        span.innerText = "Nivel interno";
        span.style.color = "blue";
        
        li.appendChild(span);
        ul.appendChild(li);
    }
    
    contenedor.appendChild(ul);
});