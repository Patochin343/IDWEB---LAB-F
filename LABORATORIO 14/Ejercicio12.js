class Empleado {
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }

    calcularSueldo() {
        return this.sueldoBase;
    }
}

class Programador extends Empleado {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase);
        this.lenguaje = lenguaje;
    }

    calcularSueldo() {
        const sueldoBaseCalculado = super.calcularSueldo();
        const bono = sueldoBaseCalculado * 0.10; 
        return sueldoBaseCalculado + bono;
    }
}

class ProgramadorSenior extends Programador {
    constructor(nombre, sueldoBase, lenguaje, experiencia) {
        super(nombre, sueldoBase, lenguaje);
        this.experiencia = experiencia;
    }

    calcularSueldo() {
        
        const sueldoBaseLimpia = this.sueldoBase; 
        const bono = sueldoBaseLimpia * 0.25; 
        return sueldoBaseLimpia + bono;

        
    }
}


const empl1 = new Empleado("Juan", 2000);
const prog1 = new Programador("Elena", 3000, "JavaScript");
const progSenior1 = new ProgramadorSenior("Carlos", 4000, "Python", 10);

console.log("\nJerarquía de Empleados");
console.log(`${empl1.nombre} (Base: ${empl1.sueldoBase}) - Sueldo Total: $${empl1.calcularSueldo()}`);
console.log(`${prog1.nombre} (Base: ${prog1.sueldoBase}, ${prog1.lenguaje}) - Sueldo Total: $${prog1.calcularSueldo()}`);
console.log(`${progSenior1.nombre} (Base: ${progSenior1.sueldoBase}, ${progSenior1.lenguaje}) - 
    Sueldo Total: $${progSenior1.calcularSueldo()}`);