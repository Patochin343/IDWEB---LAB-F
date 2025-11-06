function acumulador(valorInicial = 0) {
  let total = valorInicial;
  
  return (nuevoValor) => {
    total += nuevoValor;
    return total;
  };
}

console.log("--- Ej 16: Acumulador ---");
const sumarA100 = acumulador(100);
console.log(sumarA100(10)); 
console.log(sumarA100(5));  
console.log(sumarA100(20)); 
console.log(`---------------------------`);