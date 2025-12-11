export default function multiplicar (num1, num2) {
    return num1 * num2;
}

export function dividir(num1, num2) {
    if(num2 === 0) {
        throw new Error("No se puede divir entre cero.");
    }
    return num1/num2;
}