// Que console.log genere un error de cualquier tipo, 
// en el catch imprimir “falló” y en finally imprimir “siempre se ejecuta”

try {
    console.log(X);
}
catch (e) {
    console.error("fallo");
}
finally {
    console.log('Siempre se ejecuta');
}