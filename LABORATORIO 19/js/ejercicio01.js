document.getElementById("btnBuscar").addEventListener("click", async () => {
    const id = document.getElementById("pokemonId").value;

    if (!id) {
        console.log("Ingresa un ID válido");
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        console.log("Nombre del Pokémon:", data.name);

        document.getElementById("result").textContent = 
            `Pokémon encontrado: ${data.name}`;
    } catch (error) {
        console.log("ID incorrecto o error en la API");
        document.getElementById("result").textContent = "❌ Pokémon no encontrado";
    }
});
