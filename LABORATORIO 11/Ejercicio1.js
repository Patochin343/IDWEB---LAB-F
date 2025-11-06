let suma = 0;

for (let i = 0; i < 5; i++) {
  let nota = parseFloat(prompt("Ingrese un ingrese la nota " + (i + 1) + ":"));
  if (nota < 0 || nota > 20 || nota == null)
  {
    console.log("Nota inválida. Por favor ingrese una nota entre 0 y 20.");
    i--;
    continue;
  }
  suma += nota;
}

let promedio = suma / 5;
console.log("El promedio de las notas es: " + promedio);