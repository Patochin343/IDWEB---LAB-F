const media = (...numeros) => {
  if (numeros.length === 0) {
    return 0;
  }
  
  const suma = numeros.reduce((acumulado, actual) => acumulado + actual, 0);
  return suma / numeros.length;
};

console.log("Ej 18 (Media):", media(2, 4, 6));     
console.log("Ej 18 (Media):", media(1, 2, 3, 4, 5)); 
console.log("Ej 18 (Media):", media(10, 20));      
console.log("Ej 18 (Media):", media());           