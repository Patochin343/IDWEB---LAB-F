const operacionesMatematicas = () => {
  return {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => (b === 0 ? "Error: No se puede dividir por cero" : a / b)
  };
};

const ops = operacionesMatematicas();
console.log("Ej 14 (Sumar):", ops.sumar(10, 5)); 
console.log("Ej 14 (Dividir):", ops.dividir(10, 2)); 
console.log("Ej 14 (Error):", ops.dividir(10, 0)); 