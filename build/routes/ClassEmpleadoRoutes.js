"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassEmpleadoController_1 = require("../controllers/ClassEmpleadoController");
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
class EmpleadoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/empleado', ClassEmpleadoController_1.ObtEmpleadoCotrollers.list);
        this.router.get('/api/empleado/password/:password', ClassEmpleadoController_1.ObtEmpleadoCotrollers.ObtenerContraseñaI);
        this.router.get('/api/empleado/:id', ClassEmpleadoController_1.ObtEmpleadoCotrollers.GetOneEmpleado);
        this.router.get('/api/empleado/correo/list', ClassEmpleadoController_1.ObtEmpleadoCotrollers.listCorreo);
        this.router.post('/api/empleado', ClassEmpleadoController_1.ObtEmpleadoCotrollers.create);
        this.router.delete('/api/empleado/:id', ClassEmpleadoController_1.ObtEmpleadoCotrollers.delete);
        this.router.put('/api/empleado/:id', ClassEmpleadoController_1.ObtEmpleadoCotrollers.update);
        this.router.put('/api/empleado/bloquear/:id', ClassEmpleadoController_1.ObtEmpleadoCotrollers.BloquearEmpleado);
    }
}
const ObtEmpleadoRoutes = new EmpleadoRoutes();
exports.default = ObtEmpleadoRoutes.router;
