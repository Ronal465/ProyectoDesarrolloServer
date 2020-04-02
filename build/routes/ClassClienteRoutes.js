"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassClienteControllers_1 = require("../controllers/ClassClienteControllers");
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
class ClienteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/api/Cliente/list", ClassClienteControllers_1.ObtClienteCotrollers.list);
        this.router.put("/api/Cliente", ClassClienteControllers_1.ObtClienteCotrollers.create);
        this.router.get("/api/Cliente/:identificacion", ClassClienteControllers_1.ObtClienteCotrollers.GetOneCliente);
        this.router.post("/api/Cliente/:id", ClassClienteControllers_1.ObtClienteCotrollers.update);
    }
}
const ObtClienteRoutes = new ClienteRoutes();
exports.default = ObtClienteRoutes.router;
