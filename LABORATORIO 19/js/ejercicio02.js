document.getElementById("btnPikachu").addEventListener("click", () => {
    fetch("https://pokeapi.co/api/v2/pokemon/25")
    .then(response => response.json())
    .then(data => {
        console.log("Altura:", data.height);
        console.log("Peso:", data.weight);
        document.getElementById("info").textContent =
                `Altura: ${data.height} | Peso: ${data.weight}`;
    })
    .catch(error => {
            console.log("Error al obtener los datos");
            document.getElementById("info").textContent = "X Error al obtener información";
        });
})