"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassModeloController_1 = require("../controllers/ClassModeloController");
class ModeloRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/Modelo/list', ClassModeloController_1.ObtModeloCotrollers.list);
    }
}
const ObtModeloRoutes = new ModeloRoutes();
exports.default = ObtModeloRoutes.router;
