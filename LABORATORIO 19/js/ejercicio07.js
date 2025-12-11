document.getElementById("btnBuscar").addEventListener("click", mostrarPokemon);

async function mostrarPokemon() {
    const idPokemon = document.getElementById("idPokemon").value.trim();
    const resultado = document.getElementById("resultado");

    if (idPokemon === "") {
        resultado.innerHTML = "<p>Ingresa un ID válido.</p>";
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);

        if (!response.ok) {
            resultado.innerHTML = "<p>X Pokémon no encontrado.</p>";
            return;
        }

        const data = await response.json();

        const imagen = data.sprites.front_default;
        const nombre = data.name;
        const peso = data.weight;
        const altura = data.height;
        const habilidades = data.abilities.map(h => h.ability.name).join(", ");

        resultado.innerHTML = `
            <h3>${nombre.toUpperCase()} (ID: ${data.id})</h3>
            <img src="${imagen}" alt="pokemon">
            <p><strong>Peso:</strong> ${peso}</p>
            <p><strong>Altura:</strong> ${altura}</p>
            <p><strong>Habilidades:</strong> ${habilidades}</p>
        `;
    } catch (error) {
        resultado.innerHTML = "<p>Error al obtener datos.</p>";
    }
}
