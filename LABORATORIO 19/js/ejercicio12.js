const contenedor = document.getElementById("contenedor");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

let listaPokemon = [];   // Aquí guardaremos los 12 Pokémon
let indiceInicio = 0;    // Controla qué grupo de 3 se muestra

// Cargar los Pokémon 1 al 12
async function cargarPokemones() {
    for (let id = 1; id <= 12; id++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        listaPokemon.push(data);
    }

    mostrarPokemones();
}

// Mostrar 3 Pokémon según el índice actual
function mostrarPokemones() {
    contenedor.innerHTML = ""; 

    const fin = indiceInicio + 3;
    const grupo = listaPokemon.slice(indiceInicio, fin);

    grupo.forEach(poke => {
        const card = `
            <div class="card">
                <img src="${poke.sprites.front_default}">
                <h3>${poke.name.toUpperCase()}</h3>
                <p>ID: ${poke.id}</p>
            </div>
        `;
        contenedor.innerHTML += card;
    });
}

// Botón SIGUIENTE
btnSiguiente.addEventListener("click", () => {
    if (indiceInicio + 3 < listaPokemon.length) {
        indiceInicio += 3;
        mostrarPokemones();
    }
});

// Botón ANTERIOR
btnAnterior.addEventListener("click", () => {
    if (indiceInicio - 3 >= 0) {
        indiceInicio -= 3;
        mostrarPokemones();
    }
});

// Iniciar
cargarPokemones();
