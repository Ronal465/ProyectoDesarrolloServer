
class Encriptacion{

    
private bcrypt  = require('bcryptjs');
//private salt =  this.bcrypt.genSaltSync(10);  Genera un Salt nuevo, pero cada vez que se reinicia el servidor cambia.

 
private  salt =  "$2a$10$hNgsptL/.XAWLDNYVKjQa."; // Un salt por defecto para que genere siempre las mismas contraseña encriptadas

    constructor(){

    }


    encriptar(Password:String){

      
        var hash = this.bcrypt.hashSync(Password, this.salt);

        return  hash;
    }


}

export const encriptacion =  new Encriptacion();