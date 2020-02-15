"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassPermisosEmpleadoControllers_1 = require("../controllers/ClassPermisosEmpleadoControllers");
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
