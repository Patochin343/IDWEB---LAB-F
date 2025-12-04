// Generar un SyntaxError usando JSON.parse con texto inválido. 
// En el catch mostrar e.name y e.message

try {
    JSON.parse('Este no es un JSON válido');
} catch (e) {
    console.error(e.name + ': ' + e.message);
}