class Producto {
    #nombre;
    #precio;
    #stock;

    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#stock = stock;
    }

    setPrecio(nuevoPrecio) {
        if (typeof nuevoPrecio !== 'number') 
        {
            nuevoPrecio = Number(nuevoPrecio);
        }

        if (nuevoPrecio >= 0) 
        {
            this.#precio = nuevoPrecio;
        } 
        else 
        {
            console.log("El precio no puede ser negativo intentelo de nuevo.");
            this.setPrecio(parseFloat(prompt("Ingrese un nuevo precio:")));
        }
    }

    setStock(nuevoStock) {
        if (Number.isInteger(nuevoStock) && nuevoStock >= 0) 
        {
            this.#stock = nuevoStock;
        } 
        else 
        {
            console.log("El stock debe ser un número entero no negativo, intentelo de nuevo.");
            this.setStock(parseInt(prompt("Ingrese un nuevo stock:")));
        }
    }

    venderCantidad(cantidad) {
        if (Number.isInteger(cantidad) && cantidad > 0) 
        {
            if (cantidad <= this.#stock) 
            {
                this.#stock -= cantidad;
                console.log(`Se han vendido ${cantidad} unidades de ${this.#nombre}. Stock restante: ${this.#stock}`);
            } 
            else 
            {
                console.log("No hay suficiente stock para completar la venta.");
            }
        } 
        else 
        {
            console.log("La cantidad a vender debe ser un número entero positivo.");
        }
    }

    getPrecio() {
        return "$" + this.#precio.toFixed(2);
    }
}

/* Creando Objeto y probando métodos */
const producto1 = new Producto("Laptop", 1500, 10);
producto1.setStock(15);
producto1.venderCantidad(5);
producto1.venderCantidad(20);
producto1.setPrecio("2400");
console.log(producto1.getPrecio());