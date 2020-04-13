"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassEquipoControllers_1 = require("../controllers/ClassEquipoControllers");
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
class EquipoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/api/Equipo/list", ClassEquipoControllers_1.ObtEquipoCotrollers.list);
        this.router.put("/api/Equipo", ClassEquipoControllers_1.ObtEquipoCotrollers.create);
        this.router.get("/api/Equipo/:id", ClassEquipoControllers_1.ObtEquipoCotrollers.GetOnelist);
    }
}
const ObtEquipoRoutes = new EquipoRoutes();
exports.default = ObtEquipoRoutes.router;
