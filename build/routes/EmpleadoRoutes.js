"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleadoController_1 = require("../controllers/empleadoController");
class empleadoroutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/empleado', empleadoController_1.empleadoCotrollers.list);
        this.router.get('/api/empleado/password/:password', empleadoController_1.empleadoCotrollers.ObtenerContraseñaI);
        this.router.get('/api/empleado/:id', empleadoController_1.empleadoCotrollers.GetOneEmpleado);
        this.router.get('/api/empleado/correo/list', empleadoController_1.empleadoCotrollers.listCorreo);
        this.router.post('/api/empleado', empleadoController_1.empleadoCotrollers.create);
        this.router.delete('/api/empleado/:id', empleadoController_1.empleadoCotrollers.delete);
        this.router.put('/api/empleado/:id', empleadoController_1.empleadoCotrollers.update);
    }
}
const empleadoRoutes = new empleadoroutes();
exports.default = empleadoRoutes.router;
