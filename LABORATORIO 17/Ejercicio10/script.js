/*
Crea una función llamada procesarLista. Debe recibir un arreglo de números,
un callback, por cada número del arreglo esperar entre 500 y 1500 ms usando setTimeout. 
Imprimir "Procesando <numero>..." y cuando todos los números estén procesados 
llamar al callback final con el mensaje "Proceso completado"
*/

function procesarLista(numeros, callbackFinal) {
    let procesados = 0;
    numeros.forEach(numero => {
        const tiempoEspera = Math.floor(Math.random() * 1000) + 500;
        setTimeout(() => {
            console.log(`Procesando ${numero}...`);
            procesados++;
            if (procesados === numeros.length) {
                callbackFinal("Proceso completado");
            }
        }, tiempoEspera);
    });
}

const listaNumeros = [1, 2, 3, 4, 5];
procesarLista(listaNumeros, (mensaje) => {
    console.log(mensaje);
});