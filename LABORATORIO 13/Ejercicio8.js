const invertirMap = (mapOriginal) => {
  const mapInvertido = new Map();
  
  for (const [clave, valor] of mapOriginal.entries()) {
    mapInvertido.set(valor, clave);
  }
  return mapInvertido;
};

let capitales = new Map([
  ["Perú", "Lima"],
  ["Chile", "Santiago"],
  ["Colombia", "Bogotá"]
]);

console.log("Ej 10:", invertirMap(capitales));