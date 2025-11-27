document.getElementById('btn-parrafos').addEventListener('click', () => {
    const div = document.getElementById('contenedor-parrafos');
    
    // 1. Crear los 3 párrafos
    const p1 = document.createElement('p'); p1.innerText = "Párrafo 1";
    const p2 = document.createElement('p'); p2.innerText = "Párrafo 2 (A eliminar)";
    const p3 = document.createElement('p'); p3.innerText = "Párrafo 3";
    
    // 2. Agregarlos
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    
    // 3. Eliminar el segundo
    // p2.remove() es la forma moderna
    p2.remove(); 
});