const filtrarYTransformar = (arr) => {
  return arr
    .filter(num => num >= 0)  
    .map(num => num * num)     
    .reduce((total, actual) => total + actual, 0); 
};

console.log("Ej 4:", filtrarYTransformar([2, -3, 4, -1, 5])); 