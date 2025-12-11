function dividirOraciones() {
    const input = document.getElementById("texto").value;

    const regex = /[^.!?]+/g; 

    const resultado = input.match(regex);

    document.getElementById("resultado").textContent =
        JSON.stringify(resultado, null, 2); //transforma a un texto bien formateado
}
