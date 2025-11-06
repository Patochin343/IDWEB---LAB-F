function procesarTexto(texto) {
  
  const limpiarEspacios = (txt) => {
    return txt.trim().replace(/\s+/g, ' ');
  };
  
  const contarPalabras = (txt) => {
    const textoLimpio = limpiarEspacios(txt);
    if (textoLimpio === "") {
      return 0;
    }
    return textoLimpio.split(' ').length;
  };
  
  const textoLimpio = limpiarEspacios(texto);
  const totalPalabras = contarPalabras(texto);
  
  console.log(`--- Ej 13: Procesar Texto ---`);
  console.log(`Original: "${texto}"`);
  console.log(`Limpio: "${textoLimpio}"`);
  console.log(`Palabras: ${totalPalabras}`);
  console.log(`------------------------------`);
}

procesarTexto("   esto    es una   prueba   de texto ");