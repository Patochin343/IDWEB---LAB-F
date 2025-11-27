const div = document.createElement('div');
div.textContent = 'Parrafo remplazado';

document.body.replaceChild(div, document.getElementsByTagName('p')[0]);