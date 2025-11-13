const numeroAleratorio = () => {
    return Math.floor(Math.random() * 10);
};

const contraseñaAleatoria = () => {
    let contraseña = "";
    for (let i = 0; i < 6; i++) {
        contraseña += numeroAleratorio();
    }
    return contraseña;
};

console.log("La constraseña generada es: " + contraseñaAleatoria());