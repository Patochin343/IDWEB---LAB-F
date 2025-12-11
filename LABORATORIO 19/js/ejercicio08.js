async function cargarPokemones() {
    const contenedor = document.getElementById("contenedor");
    const listaPokemones = [];

    for (let i = 1; i <= 10; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        listaPokemones.push(data);
    }

    listaPokemones.forEach(pokemon => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "card";

        tarjeta.innerHTML = `
            <h3>${pokemon.name.toUpperCase()}</h3>
            <img src="${pokemon.sprites.front_default}" alt="pokemon">
            <p>ID: ${pokemon.id}</p>
        `;

        contenedor.appendChild(tarjeta);
    });
}

cargarPokemones();
