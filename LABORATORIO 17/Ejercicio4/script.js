// Definir una función validarEdad(edad), si edad < 0 o no es número, 
// lanzar un error ("Edad inválida"). Capturar y mostrar el error

const validarEdad = (edad) => {
    if (typeof edad !== 'number' || edad < 0) {
        throw new Error('Edad inválida');
    }

    return true;
}

try {
    validarEdad(-5);
} 
catch (e) {
    console.error(e.message);
}