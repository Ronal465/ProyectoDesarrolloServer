"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
class EnviarCorreoController {
    EnviarCorreo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var StrContrasenaNueva = req.body.StrContrasenaNueva;
            var nodemailer = require('nodemailer');
            // create reusable transporter object using the default SMTP transport
            // var transporter = nodemailer.createTransport('smtps://proyectocelutel@gmail.com:Celutel2019*');
            var transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: "proyectocelutel@gmail.com",
                    pass: "Celutel2019*"
                }
            });
            // setup e-mail data with unicode symbols
            const { Correo } = req.params;
            var mailOptions = {
                from: 'proyectocelutel@gmail.com',
                to: '' + Correo,
                subject: 'Objetivo ',
                text: 'Texto De Ejemplo',
                html: `<p>Su Nueva Contraseña Es:</p><p>${StrContrasenaNueva}</p>` // html body
            };
            res.json({ Message: 'Correo Enviado' });
            // send mail with defined transport object
            yield transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return console.log(error);
                }
            });
        });
    }
}
exports.ObtEnviarCorreoController = new EnviarCorreoController();
