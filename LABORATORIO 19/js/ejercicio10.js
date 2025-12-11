document.getElementById("buscarBtn").addEventListener("click", buscarPokemon);

async function buscarPokemon() {
    const nombre = document.getElementById("pokemonInput").value.toLowerCase();
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "Cargando...";

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        const data = await res.json();

        const stats = data.stats; 

        let html = `
            <div class="card">
                <h3>${data.name.toUpperCase()}</h3>
                <img src="${data.sprites.front_default}">
        `;

        stats.forEach(s => {
            html += `
                <div class="stat">
                    ${s.stat.name}: ${s.base_stat}
                    <div class="barra">
                        <div class="relleno" style="width:${s.base_stat / 2}%"></div>
                    </div>
                </div>
            `;
        });

        html += `</div>`;
        resultado.innerHTML = html;

    } catch (error) {
        resultado.innerHTML = "Pokémon no encontrado :(";
    }
}
