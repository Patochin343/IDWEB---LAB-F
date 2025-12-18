fetch('/equipos')
    .then(res => res.json())
    .then(data => {
        const div = document.getElementById('lista-equipos');
        div.innerHTML = '';
        data.forEach(equipo => {
        div.innerHTML += `
            <div class="card">
                <h3>${equipo.nombre} (${equipo.ciudad})</h3>
                <p>Ataque: ${equipo.nivelAtaque} | Defensa: ${equipo.nivelDefensa}</p>
            </div>`;
        });
    });