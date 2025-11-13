class Figura {
    area() {
        return 0;
    }
    perimetro() {
        return 0;
    }
}

class Cuadrado extends Figura {

    #lado;

    constructor(Lado) {
        super();
        this.#lado = Lado;
    }

    area() {
        return this.#lado * this.#lado;
    }
    perimetro() {
        return this.#lado * 4;
    }
}

class Triangulo extends Figura {

    #base;
    #altura;
    #lado1;
    #lado2;
    #lado3; 

    constructor(base, altura, lado1, lado2, lado3) {
        super();
        this.#base = base;
        this.#altura = altura;
        this.#lado1 = lado1;
        this.#lado2 = lado2;
        this.#lado3 = lado3;
    }
    area() {
        return (this.#base * this.#altura) / 2;
    }
    perimetro() {
        return this.#lado1 + this.#lado2 + this.#lado3;
    }
}

const cuadrado = new Cuadrado(5);
console.log("Área del cuadrado: " + cuadrado.area());
console.log("Perímetro del cuadrado: " + cuadrado.perimetro());

const triangulo = new Triangulo(4, 3, 4, 5, 6);
console.log("Área del triángulo: " + triangulo.area());
console.log("Perímetro del triángulo: " + triangulo.perimetro());