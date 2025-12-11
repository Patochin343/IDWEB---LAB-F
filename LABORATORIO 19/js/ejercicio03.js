document.getElementById("btnPikachu").addEventListener("click", obtenerPikachu);

async function obtenerPikachu() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
        const data = await response.json();

        console.log("Altura:", data.height);
        console.log("Peso:", data.weight);

        document.getElementById("info").textContent =
            `Altura: ${data.height} | Peso: ${data.weight}`;
    } catch (error) {
        console.log("Error al obtener los datos");
        document.getElementById("info").textContent = "X Error al obtener información";
    }
}


