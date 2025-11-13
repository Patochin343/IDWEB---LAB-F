const lanzamientoDado = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const simulacionDeDados = () => {
    const dado1 = lanzamientoDado();
    const dado2 = lanzamientoDado();
    const suma = dado1 + dado2;
    console.log(`Dado 1: ${dado1}\nDado 2: ${dado2}\nSuma: ${suma}`);
}

simulacionDeDados();