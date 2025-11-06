console.log("--- Ej 8: Total Compra ---");
const precios = new Map([
  ["manzana", 1.50],
  ["banana", 0.75],
  ["naranja", 1.25]
]);

const listaDeCompras = ["manzana", "banana", "manzana", "naranja", "banana"];


let totalCompra = 0;
for (const producto of listaDeCompras) {
  if (precios.has(producto)) {
    totalCompra += precios.get(producto);
  }
}

console.log("Total de la compra:", totalCompra);
console.log("--------------------------");