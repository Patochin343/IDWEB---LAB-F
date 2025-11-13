const aleatorio = (minimo, maximo) => {
    return Math.round(Math.random() * (maximo - minimo + 1)) + minimo;
}

console.log("Número aleatorio entre 1 y 20: " + aleatorio(1, 20));