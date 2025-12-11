document.getElementById("btnListar").addEventListener("click", async () => {
    const lista = document.getElementById("lista");
    lista.innerHTML = "Cargando...";

    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await response.json();

        lista.innerHTML = ""; 

        data.results.forEach(pokemon => {
            const li = document.createElement("li");
            li.textContent = pokemon.name;
            lista.appendChild(li);
        });

        console.log("Pokémon obtenidos:", data.results);

    } catch (error) {
        console.log("Error al obtener los Pokémon");
        lista.innerHTML = "X Error al cargar datos";
    }
});
