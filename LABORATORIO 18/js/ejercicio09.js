const direccionesURL = /https:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(\/\S*)?/g;

const texto = `
Visita nuestro sitio https://miweb.com y también
nuestra zona segura https://secure.ejemplo.org/login.
Pero este no cuenta: http://noseguro.com
`;

const urls = texto.match(direccionesURL);

console.log(urls);

