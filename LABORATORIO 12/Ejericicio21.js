const potencia = (base, exponente) => {
  if (exponente === 0) 
  {
    return 1;
  }
  
  if (exponente < 0) 
  {
    return 1 / potencia(base, -exponente);
  }
  
  return base * potencia(base, exponente - 1);
};

console.log("Ej 23 (2^3):", potencia(2, 3));   
console.log("Ej 23 (5^2):", potencia(5, 2));
console.log("Ej 23 (7^0):", potencia(7, 0));   
console.log("Ej 23 (2^-2):", potencia(2, -2)); 