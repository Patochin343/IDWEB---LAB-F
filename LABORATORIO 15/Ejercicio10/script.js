document.getElementById('btn-eliminar-p').addEventListener('click', () => {
    const parrafos = document.querySelectorAll('p');
    if (parrafos.length > 0) {
        parrafos[parrafos.length - 1].remove();
    }
});