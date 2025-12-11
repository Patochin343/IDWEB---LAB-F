async function obtenerSpriteCharizard() {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/6");
            const data = await response.json();

            console.log("URL del sprite de Charizard:", data.sprites.front_default);
        } catch (error) {
            console.log("Error al obtener datos de Charizard");
        }
}



