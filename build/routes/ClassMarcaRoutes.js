"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassMarcaController_1 = require("../controllers/ClassMarcaController");
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
        this.router.get('/api/Marca/list', ClassMarcaController_1.ObtMarcaCotrollers.list);
        this.router.put('/api/Marca', ClassMarcaController_1.ObtMarcaCotrollers.create);
    }
}
const ObtMarcaRoutes = new MarcaRoutes();
exports.default = ObtMarcaRoutes.router;
