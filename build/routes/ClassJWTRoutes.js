"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassJWTControllers_1 = require("../controllers/ClassJWTControllers");
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
class JWTRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post("/api/Login", ClassJWTControllers_1.ObtJWTCotrollers.Login);
        this.router.post("/api/Verificar", ClassJWTControllers_1.ObtJWTCotrollers.Verificar);
    }
}
const ObtJWTRoutes = new JWTRoutes();
exports.default = ObtJWTRoutes.router;
