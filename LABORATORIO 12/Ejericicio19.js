const filtrarArreglo = (arr, callback) => {
  const resultado = [];
  for (const elemento of arr) {
    if (callback(elemento)) {
      resultado.push(elemento);
    }
  }
  return resultado;
};

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const esPar = (n) => n % 2 === 0;
const mayorQue4 = (n) => n > 4;

console.log("Ej 21 (Pares):", filtrarArreglo(numeros, esPar)); 
console.log("Ej 21 (Mayores 4):", filtrarArreglo(numeros, mayorQue4)); 