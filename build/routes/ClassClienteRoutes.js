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
    }
}
const ObtClienteRoutes = new ClienteRoutes();
exports.default = ObtClienteRoutes.router;
