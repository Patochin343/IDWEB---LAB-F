/*
Crea una función dividirAsync que reciba a, b y un callback. Espere 1.5 segundos. 
Si b === 0, llame a callback(new Error("No se puede dividir entre cero"), null); 
Si no, llame a: callback(null, a / b);
*/

function dividirAsync(a, b, callback) {
    setTimeout(() => {
        if (b === 0) {
            callback(new Error("No se puede dividir entre cero"), null);
        } else {
            callback(null, a / b);
        }
    }, 1500);
}

dividirAsync(10, 2, (error, resultado) => {
    if (error) {
        console.error(error.message);
    } else {
        console.log("Resultado:", resultado);
    }
});

dividirAsync(10, 0, (error, resultado) => {
    if (error) {
        console.error(error.message);
    } else {
        console.log("Resultado:", resultado);
    }
});