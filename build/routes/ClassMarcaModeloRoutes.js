"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassMarcaModeloController_1 = require("../controllers/ClassMarcaModeloController");
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
class MarcaModeloRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/MarcaModelo/Modelos/:id', ClassMarcaModeloController_1.ObtMarcaModeloCotrollers.ObtenerModelos);
        this.router.put('/api/MarcaModelo/', ClassMarcaModeloController_1.ObtMarcaModeloCotrollers.create);
        this.router.put('/api/MarcaModelo/Modelos/', ClassMarcaModeloController_1.ObtMarcaModeloCotrollers.createModelo);
    }
}
const ObtMarcaModeloRoutes = new MarcaModeloRoutes();
exports.default = ObtMarcaModeloRoutes.router;
