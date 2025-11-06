const ejecutarOperacion = (fn, x, y) => fn(x, y);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;

console.log("Ej 20 (Suma):", ejecutarOperacion(suma, 10, 5)); 
console.log("Ej 20 (Resta):", ejecutarOperacion(resta, 10, 5)); 
console.log("Ej 20 (Multiplicación):", ejecutarOperacion(multiplicacion, 10, 5)); 