document.getElementById('btn-contar-divs').addEventListener('click', () => {
    const cantidad = document.querySelectorAll('div').length;
    
    const p = document.createElement('p');
    p.innerText = "Total de divs encontrados: " + cantidad;
    p.style.fontWeight = "bold";
    
    document.body.appendChild(p);
});