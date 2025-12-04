// Dentro de try provocar un TypeError. Ejemplo: let x = null; 
// x.nombre; En catch verificar con instanceof si es TypeError. 
// Imprimir un mensaje distinto según el tipo

try {
    "incorrecto".getNombre();
}
catch (e) {
    if (e instanceof TypeError) {
        console.error("Se ha producido un TypeError:", e.message);
    } else {
        console.error("Se ha producido un error de otro tipo:", e.message);
    }
}