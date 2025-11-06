const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2024,
  
  detalles: function() {
    console.log(`Auto: ${this.marca} ${this.modelo}, Año: ${this.año}`);
  }
  
};

console.log("--- Ej 11: Auto Detalles ---");
auto.detalles(); 
console.log("----------------------------");