const h3 = document.createElement('h3');
h3.textContent = 'Encabezado creado con JavaScript';

const p = document.getElementsByTagName('p')[0];

p.before(h3);