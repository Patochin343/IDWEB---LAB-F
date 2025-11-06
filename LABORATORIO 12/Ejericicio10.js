const mayusculas = (texto) => {
    return  texto.toUpperCase();
};

const agregarSigno = (texto) => {
    return texto + "!";
};

const componerTransformaciones = (fn1, fn2) => {
    return (texto) => fn2(fn1(texto));
};

const transformar = componerTransformaciones(mayusculas, agregarSigno);

console.log(transformar("hola")); 