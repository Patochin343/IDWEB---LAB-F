// Ejercicio 11 con async/await

async function dividirAsync(a, b) {
    try {
        const resultado = await Promise.resolve(a / b);
        if (b === 0) {
            throw new Error("División por cero no permitida");
        }
        console.log("Resultado:", resultado);
    }
    catch (error) {
        return error.message;
    }
}

dividirAsync(10, 2);