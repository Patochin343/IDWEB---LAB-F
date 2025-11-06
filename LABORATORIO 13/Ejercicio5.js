const tieneDuplicados = (arr) => {
  return new Set(arr).size !== arr.length;
};

console.log("Ej 7 (con duplicados):", tieneDuplicados([1, 2, 3, 1, 5])); 
console.log("Ej 7 (sin duplicados):", tieneDuplicados([1, 2, 3, 4, 5])); 