//Provocar un error de cualquier tipo e imprimir su mensaje

try {
    noExisteFuncion();
} catch (e) {
    console.error("Se ha producido un error: " + e.message);
}