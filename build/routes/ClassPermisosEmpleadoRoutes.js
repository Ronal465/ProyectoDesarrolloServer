"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassPermisosEmpleadoControllers_1 = require("../controllers/ClassPermisosEmpleadoControllers");
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
class PermisosEmpleadoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/PermisosEmpleado/list', ClassPermisosEmpleadoControllers_1.ObtPermisosEmpleadoCotrollers.list);
    }
}
const ObtPermisosEmpleadoRoutes = new PermisosEmpleadoRoutes();
exports.default = ObtPermisosEmpleadoRoutes.router;
