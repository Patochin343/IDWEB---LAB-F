const distanciaDePuntos = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.hypot(deltaX, deltaY);
}

console.log(
    "La distancia entre los puntos (1, 2) y (4, 6) es: " + distanciaDePuntos(1, 2, 4, 6)+
    "\n y la suma de sus distancias respecto al origen (0,0) es: " +
    (distanciaDePuntos(1, 2, 0, 0) + distanciaDePuntos(4, 6, 0, 0))
); 