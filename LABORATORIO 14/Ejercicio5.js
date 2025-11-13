let grados = parseFloat(prompt("Ingrese los grados a convertir:"));
let radianes = parseFloat(prompt("Ingrese los radianes a convertir:"));

const gradosARadianes = (grados) => {
    return grados * (Math.PI / 180);
};

const radianesAGrados = (radianes) => {
    return radianes * (180 / Math.PI);
};
console.log(
    grados + " grados son: " + gradosARadianes(grados) + " radianes." +
    "\n" + radianes + " radianes son: " + radianesAGrados(radianes) + " grados."
);