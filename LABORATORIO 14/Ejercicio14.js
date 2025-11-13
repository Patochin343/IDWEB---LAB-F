class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor() {
        this.productos = []; 
    }

    agregarProducto(producto, cantidad = 1) {
        for (let i = 0; i < cantidad; i++) {
            this.productos.push(producto);
        }
        console.log(`Añadido(s) ${cantidad} x ${producto.nombre} al carrito.`);
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    mostrarResumen() {
        const resumen = {};
        let total = 0;

        this.productos.forEach(p => {
            resumen[p.nombre] = (resumen[p.nombre] || 0) + 1;
            total += p.precio;
        });

        console.log("\n--- Resumen del Carrito ---");
        for (const nombre in resumen) {
            const count = resumen[nombre];
            const precioUnitario = this.productos.find(p => p.nombre === nombre).precio;
            console.log(`- ${nombre} (x${count}): $${(count * precioUnitario).toFixed(2)}`);
        }
        console.log(`--------------------------`);
        console.log(`Total a pagar: $${total.toFixed(2)}`);
    }
}

const prodA = new Producto("Laptop", 1200.50);
const prodB = new Producto("Ratón", 25.99);
const prodC = new Producto("Monitor", 350.00);

const miCarrito = new Carrito();
miCarrito.agregarProducto(prodA, 1);
miCarrito.agregarProducto(prodB, 2);
miCarrito.agregarProducto(prodC, 1);
miCarrito.agregarProducto(prodB, 1); 
miCarrito.mostrarResumen();