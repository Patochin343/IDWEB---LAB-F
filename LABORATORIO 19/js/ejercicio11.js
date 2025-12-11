document.getElementById("buscarBtn").addEventListener("click", obtenerStats);

async function obtenerStats() {
    const nombre = document.getElementById("pokeInput").value.toLowerCase();
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "Cargando...";

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        
        if (!res.ok) {
            resultado.innerHTML = "Pokémon no encontrado 😞";
            return;
        }

        const data = await res.json();

        const stats = data.stats;

        let tabla = `
            <table>
                <tr><th>Estadística</th><th>Valor</th></tr>
        `;

        stats.forEach(s => {
            tabla += `
                <tr>
                    <td>${s.stat.name.toUpperCase()}</td>
                    <td>${s.base_stat}</td>
                </tr>
            `;
        });

        tabla += `</table>`;

        resultado.innerHTML = tabla;

    } catch (error) {
        resultado.innerHTML = "Error al obtener datos.";
    }
}
