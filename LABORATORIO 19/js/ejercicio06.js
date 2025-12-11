document.getElementById("btnPokemonAleatorio").addEventListener("click", obtenerPokemonAleatorio);

async function obtenerPokemonAleatorio() {
    const id = Math.floor(Math.random() * 898) + 1;

    console.log("ID aleatorio generado:", id);

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        console.log(":D Pokémon aleatorio encontrado:", data.name);
    } catch (error) {
        console.log("Error al obtener Pokémon aleatorio");
    }
}
