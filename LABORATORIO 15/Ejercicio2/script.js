const lecturaParrafo = document.getElementsByTagName("p");

for (let i = 0; i < lecturaParrafo.length; i++) {
    lecturaParrafo[i].innerHTML = "Texto actualizado dinámicamente";
}
