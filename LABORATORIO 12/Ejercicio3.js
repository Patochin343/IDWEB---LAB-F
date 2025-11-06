const esMultiplo = (numero, divisor) => {
    if (numero % divisor === 0)
    {
        return "Si es multiplo de " + divisor; 
    }
    return "No es multiplo de " + divisor;
}

console.log(esMultiplo(10, 2));
console.log(esMultiplo(10, 3));