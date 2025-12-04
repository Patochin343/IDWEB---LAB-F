// Ejercicio 12 con promesas

function procesarLista (numeros) {
    return new Promise ((resolve, reject) => {
        let recorrido = 0;
        numeros.forEach ( numero => {
            const tiempo = Math.floor(Math.random() * 1000) + 500;
            let variable = true;
            if (variable) {
                setTimeout ( () => {
                    console.log (`Número: ${numero} - Tiempo: ${tiempo} ms`);
                    recorrido++;
                }, tiempo);
            }
            else {
                reject ('Error al procesar la lista de números');
            }
        });
        const intervalo = setInterval ( () => {
            if (recorrido === numeros.length) {
                clearInterval (intervalo);
                resolve ('Lista de números procesada correctamente');
            }
        }, 100);
    });
}

procesarLista ([1,2,3,4,5,6,7,8,9,10])
    .then ( mensaje => console.log (mensaje))
    .catch ( error => console.error (error));