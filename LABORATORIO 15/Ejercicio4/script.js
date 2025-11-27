const lista = document.getElementsByTagName("li");

for (let i = 0; i < lista.length; i++) {
    if (lista[i].getAttribute("class") === "oculto") 
    {
        lista[i].remove();
    }
    else
    {
        lista[i].setAttribute("class", "resaltado");
    }
}