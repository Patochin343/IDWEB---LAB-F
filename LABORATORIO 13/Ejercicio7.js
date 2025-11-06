const contarPalabras = (texto) => {
  const conteo = new Map();
  const palabras = texto.toLowerCase().split(' ');

  for (const palabra of palabras) {
    if (palabra === "") continue;
    
    const cuentaActual = conteo.get(palabra) || 0;
    conteo.set(palabra, cuentaActual + 1);
  }
  return conteo;
};

console.log("Ej 9:", contarPalabras("sol luna sol sol estrella luna"));