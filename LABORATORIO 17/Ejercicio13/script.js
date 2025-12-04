// Ejercicio 11 con promesas

function dividirAsync(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Error: División por cero");
        } else {
            resolve(a / b);
        }
    });
}
dividirAsync(10, 2)
    .then(resultado => {
        console.log("Resultado:", resultado);
    })
    .catch(error => {
        console.error("Error:", error);
    });