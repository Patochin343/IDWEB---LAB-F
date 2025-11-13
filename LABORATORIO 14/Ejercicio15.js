class Notificacion {
    constructor(mensaje) {
        this.mensaje = mensaje;
    }

    enviar() {
        console.log("Notificación base enviada:", this.mensaje);
    }
}

class Email extends Notificacion {
    constructor(mensaje, destinatario) {
        super(mensaje);
        this.destinatario = destinatario;
    }

    enviar() {
        console.log(`ENVIANDO EMAIL a ${this.destinatario}: "${this.mensaje}"`);
    }
}

class SMS extends Notificacion {
    constructor(mensaje, telefono) {
        super(mensaje);
        this.telefono = telefono;
    }

    enviar() {
        console.log(`ENVIANDO SMS al ${this.telefono}: "${this.mensaje.substring(0, 50)}..."`);
    }
}

class Push extends Notificacion {
    constructor(mensaje, plataforma) {
        super(mensaje);
        this.plataforma = plataforma;
    }

    enviar() {
        console.log(`ENVIANDO PUSH a ${this.plataforma}: "${this.mensaje}"`);
    }
}

function procesarNotificaciones(listaNotificaciones) {
    console.log("\n--- Procesando Notificaciones ---");
    listaNotificaciones.forEach((notificacion, index) => {
        console.log(`[#${index + 1}] Tipo: ${notificacion.constructor.name}`);
        notificacion.enviar();
    });
}

const noti1 = new Email("Oferta exclusiva para clientes", "usuario@dominio.com");
const noti2 = new SMS("Tu código de verificación es 9876", "555-1234");
const noti3 = new Push("¡Nuevo artículo publicado!", "Android/iOS");

const listaDeNotificaciones = [noti1, noti2, noti3];

procesarNotificaciones(listaDeNotificaciones);