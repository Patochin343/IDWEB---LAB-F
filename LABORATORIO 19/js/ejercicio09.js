document.getElementById("buscarBtn").addEventListener("click", async () => {

    const pokemonName = document.getElementById("pokemonInput").value.toLowerCase();
    const resultado = document.getElementById("resultado");

    if (!pokemonName) {
        resultado.innerHTML = "<p>Por favor, escribe un nombre o ID.</p>";
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            resultado.innerHTML = "<p>Pokémon no encontrado 😢</p>";
            return;
        }

        const data = await response.json();

        const nombre = data.name;

        const imagen = data.sprites.front_default;

        const tipos = data.types.map(t => t.type.name).join(", ");

        resultado.innerHTML = `
            <h3>${nombre.toUpperCase()}</h3>
            <img src="${imagen}" alt="${nombre}">
            <p><strong>Tipos:</strong> ${tipos}</p>
        `;

    } catch (error) {
        resultado.innerHTML = "<p>Error en la búsqueda</p>";
    }
});
