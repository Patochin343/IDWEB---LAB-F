class Cuenta {
    #saldo = 0;

    constructor(saldoInicial = 0) {
        if (saldoInicial < 0) {
            console.error("El saldo inicial no puede ser negativo.");
            this.#saldo = 0;
        } else {
            this.#saldo = saldoInicial;
        }
    }

    getSaldo() {
        return this.#saldo;
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
            return true;
        }
        console.log("El depósito debe ser una cantidad positiva.");
        return false;
    }

    retirar(cantidad) {
        if (cantidad > 0 && this.#saldo >= cantidad) {
            this.#saldo -= cantidad;
            return true;
        }
        console.log("Fondos insuficientes o cantidad no válida.");
        return false;
    }

    transferir(cuentaDestino, cantidad) {
        if (this.retirar(cantidad)) {
            cuentaDestino.depositar(cantidad);
            console.log(`Transferencia de $${cantidad} a ${cuentaDestino.constructor.name} exitosa.`);
            return true;
        }
        console.log(`Fallo en la transferencia de $${cantidad}.`);
        return false;
    }
}

class CuentaAhorro extends Cuenta {
    retirar(cantidad) {
        if (cantidad > 0 && this.getSaldo() >= cantidad) {
            return super.retirar(cantidad);
        }
        console.log(`(Ahorro) Retiro de $${cantidad} denegado. Saldo insuficiente.`);
        return false;
    }
}

class CuentaCorriente extends Cuenta {
    constructor(saldoInicial, limiteSobregiro = 500) {
        super(saldoInicial);
        this.limiteSobregiro = limiteSobregiro;
    }

    retirar(cantidad) {
        if (cantidad <= 0) {
            console.log("La cantidad a retirar debe ser positiva.");
            return false;
        }

        const saldoActual = this.getSaldo();
        const saldoTrasRetiro = saldoActual - cantidad;
        const limiteInferior = -this.limiteSobregiro;

        if (saldoTrasRetiro >= limiteInferior) {
            console.log(`(Corriente) Retiro de $${cantidad} exitoso. Saldo actual: $${this.getSaldo()}`);
            return true;
        }
        console.log(`(Corriente) Retiro de $${cantidad} denegado. Excede el límite de sobregiro de $${this.limiteSobregiro}.`);
        return false;
    }

    _modificarSaldo(monto) {
        this.depositar(monto); 
    }
}


const cuentaAhorro = new CuentaAhorro(100);
const cuentaCorriente = new CuentaCorriente(50);

console.log("\n---Cuenta---");

cuentaAhorro.retirar(50);
cuentaAhorro.retirar(60);
console.log(`Saldo Ahorro: $${cuentaAhorro.getSaldo()}`);

cuentaCorriente.retirar(100); 
cuentaCorriente.retirar(450); 
cuentaCorriente.retirar(1); 
console.log(`Saldo Corriente: $${cuentaCorriente.getSaldo()}`);


cuentaCorriente.depositar(500); 
cuentaCorriente.transferir(cuentaAhorro, 50); 
console.log(`Saldo Ahorro (final): $${cuentaAhorro.getSaldo()}`); 
console.log(`Saldo Corriente (final): $${cuentaCorriente.getSaldo()}`); 