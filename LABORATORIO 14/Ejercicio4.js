let numero = parseFloat(prompt("Ingrese un número Entero:"));

const Operaciones = (numero) => {
    console.log(
      "Su cuadrado es: " + Math.pow(numero, 2)+
    "\nSu cubo es: " + Math.pow(numero, 3)+
    "\nSu raíz cuadrada es: " + Math.sqrt(numero)
    );
}

Operaciones(numero);