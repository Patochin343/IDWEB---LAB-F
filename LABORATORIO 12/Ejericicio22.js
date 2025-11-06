function crearSecuencia(inicio, paso) {
  let valorActual = inicio;
  return () => {
    const valorADevolver = valorActual;
    valorActual += paso;
    return valorADevolver;
  };
}

console.log("--- Ej 24: Secuencia ---");
const secuencia = crearSecuencia(2, 3);
console.log(secuencia()); 
console.log(secuencia()); 
console.log(secuencia()); 
console.log(secuencia()); 
const secuenciaDe5 = crearSecuencia(0, 5);
console.log(secuenciaDe5()); 
console.log(secuenciaDe5()); 
console.log(`--------------------------`);