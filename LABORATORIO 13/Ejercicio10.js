const contarLetras = (texto) => {
  const conteo = {}; 
  
  const textoLimpio = texto.toLowerCase().replace(/\s/g, '');

  for (const letra of textoLimpio) {
    conteo[letra] = (conteo[letra] || 0) + 1;
  }
  
  return conteo;
};

console.log("Ej 12:", contarLetras("banana")); 
console.log("Ej 12:", contarLetras("Hola Mundo"));