import multiplicar, { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

function ejecutarOperaciones() {
    const a = Number(num1.value);
    const b = Number(num2.value);

    document.getElementById("suma").textContent = sumar(a, b);
    document.getElementById("resta").textContent = restar(a, b);
    document.getElementById("producto").textContent = multiplicar(a, b);

    try {
        document.getElementById("division").textContent = dividir(a, b);
    } catch (error) {
        document.getElementById("division").textContent =
            "Error en división: " + error.message;
    }
}

document.getElementById("btnCalcular").addEventListener("click", ejecutarOperaciones);
