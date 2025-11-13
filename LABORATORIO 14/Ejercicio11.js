class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    mostrarInfo() {
        return `Usuario: ${this.nombre}, Email: ${this.email}`;
    }
}

class Cliente extends Usuario {
    constructor(nombre, email, nivelFidelidad) {
        super(nombre, email);
        this.nivelFidelidad = Math.min(5, Math.max(1, nivelFidelidad));
    }

    mostrarInfo() {
        return `${super.mostrarInfo()} | Cliente, Nivel de Fidelidad: ${this.nivelFidelidad}`;
    }
}

class Administrador extends Usuario {
    constructor(nombre, email, permisos) {
        super(nombre, email);
        this.permisos = permisos;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()} | Administrador, Permisos: ${this.permisos.join(', ')}`;
    }
}


const clienteA = new Cliente("Marta Gómez", "marta@empresa.com", 4);
const adminB = new Administrador("Javier Cruz", "javi@empresa.com", ["crear", "editar"]);
const clienteC = new Cliente("Pedro Salas", "pedro@empresa.com", 2);
const usuarioD = new Usuario("Supervisor", "super@empresa.com");

const listaUsuarios = [clienteA, adminB, clienteC, usuarioD];

console.log("Recorrido de la Lista de Usuarios");

for (const usuario of listaUsuarios) {
    console.log(usuario.mostrarInfo());
}
