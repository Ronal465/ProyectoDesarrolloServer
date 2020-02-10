"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassEstadoEmpleadoControllers_1 = require("../controllers/ClassEstadoEmpleadoControllers");
class EstadoEmpleadoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/EstadoEmpleado/list', ClassEstadoEmpleadoControllers_1.ObtEstadoEmpleadoCotrollers.list);
    }
}
const ObtEstadoEmpleadoRoutes = new EstadoEmpleadoRoutes();
exports.default = ObtEstadoEmpleadoRoutes.router;
