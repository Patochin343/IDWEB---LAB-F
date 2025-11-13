const arregloDeNotas = (notas) => {
    let notasNuevas = [];

    for (let i = 0; i < notas.length; i++) {
        notasNuevas.push((notas[i] / Math.max(...notas)));
    }

    return notasNuevas;
};

console.log(arregloDeNotas([4, 8, 6, 10, 7]));