function crearContador(valorInicial = 0) {
  let contador = valorInicial;
  
  return {
    incrementar: () => {
      contador++;
      return contador;
    },
    resetear: () => {
      contador = valorInicial;
      return contador;
    },
    valor: () => contador
  };
}

console.log("--- Ej 15: Contador ---");
const miContador = crearContador(5);
console.log(miContador.valor());      
console.log(miContador.incrementar()); 
console.log(miContador.incrementar()); 
console.log(miContador.resetear());    
console.log(miContador.valor());      
console.log(`-------------------------`);