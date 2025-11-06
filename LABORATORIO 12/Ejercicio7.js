const calcularDescuento = function(precio, descuento) {

    //Tomamos en cuenta que el descuento es un porcentaje entre 0 y 100
    if (descuento < 0 || descuento > 100) {
        return "Descuento inválido";
    }
    
    return precio - (precio * (descuento / 100));
}

console.log(calcularDescuento(200, 15)); 