"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassRepuestrosControllers_1 = require("../controllers/ClassRepuestrosControllers");
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
class MarcaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/repuestos/list', ClassRepuestrosControllers_1.ObtRepuestosCotrollers.list);
        this.router.put('/api/repuestos', ClassRepuestrosControllers_1.ObtRepuestosCotrollers.create);
    }
}
const ObtMarcaRoutes = new MarcaRoutes();
exports.default = ObtMarcaRoutes.router;
