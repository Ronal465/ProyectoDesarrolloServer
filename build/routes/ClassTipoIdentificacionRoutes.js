"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassTipoIdentificacionControllers_1 = require("../controllers/ClassTipoIdentificacionControllers");
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
class TipoIdentificacionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/TipoIdentificacion/list', ClassTipoIdentificacionControllers_1.ObtTipoIdentificacionCotrollers.list);
    }
}
const ObtTipoIdentificacionRoutes = new TipoIdentificacionRoutes();
exports.default = ObtTipoIdentificacionRoutes.router;
