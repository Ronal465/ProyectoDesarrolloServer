"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Encriptacion {
    constructor() {
        /* Autor:
          Ronaldo Carlos Rodriguez Perez
          Ultima Edicion Por:
          Ronaldo Carlos Rodriguez Perez
       */
        this.bcrypt = require('bcryptjs');
        //private salt =  this.bcrypt.genSaltSync(10);  Genera un Salt nuevo, pero cada vez que se reinicia el servidor cambia.
        this.salt = "$2a$10$hNgsptL/.XAWLDNYVKjQa."; // Un salt por defecto para que genere siempre las mismas contraseña encriptadas
    }
    encriptar(Password) {
        var hash = this.bcrypt.hashSync(Password, this.salt);
        return hash;
    }
}
exports.encriptacion = new Encriptacion();
