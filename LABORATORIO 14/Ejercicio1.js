const redondeoNormal = (num) => {
    return Math.round(num);
}

const redondeoArriba = (num) => {
    return Math.ceil(num);
}

const redondeoAbajo = (num) => {
    return Math.floor(num);
}

console.log("Redondeo Normal de 12.49: "+redondeoNormal(12.49));
console.log("Redondeo Arriba de 12.49: "+redondeoArriba(12.49));
console.log("Redondeo Abajo de 12.49: "+redondeoAbajo(12.49));

console.log("Redondeo Normal de 12.5: "+redondeoNormal(12.5));
console.log("Redondeo Arriba de 12.5: "+redondeoArriba(12.5));
console.log("Redondeo Abajo de 12.5: "+redondeoAbajo(12.5));