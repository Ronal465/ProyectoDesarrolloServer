"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassEnviarCorreoController_1 = require("../controllers/ClassEnviarCorreoController");
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
class CorreoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.put('/api/EnviarCorreo/:Correo', ClassEnviarCorreoController_1.ObtEnviarCorreoController.EnviarCorreo);
    }
}
const ObtEnviarCorreoRoutes = new CorreoRoutes();
exports.default = ObtEnviarCorreoRoutes.router;
