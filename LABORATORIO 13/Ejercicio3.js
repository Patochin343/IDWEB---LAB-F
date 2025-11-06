const reordenarPalabras = (oracion) => {
  return oracion
    .split(' ') 
    .map(palabra => palabra.toUpperCase()) 
    .sort(); 
};

console.log("Ej 5:", reordenarPalabras("sol luna estrella planeta"));
