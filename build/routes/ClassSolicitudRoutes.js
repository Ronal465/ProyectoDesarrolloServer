"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassSolicitudControllers_1 = require("../controllers/ClassSolicitudControllers");
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
class SolicitudRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/solicitud/:id', ClassSolicitudControllers_1.ObtSolicitudControllers.GetOneSolicitud);
        this.router.get('/api/solicitud/', ClassSolicitudControllers_1.ObtSolicitudControllers.list);
        this.router.get('/api/solicitud/Numero/Id', ClassSolicitudControllers_1.ObtSolicitudControllers.MaximoSolicitud);
        this.router.post('/api/solicitud/', ClassSolicitudControllers_1.ObtSolicitudControllers.create);
        this.router.get('/api/solicitud/Estados/Solicitud', ClassSolicitudControllers_1.ObtSolicitudControllers.listEstado);
        this.router.post('/api/servicio/', ClassSolicitudControllers_1.ObtSolicitudControllers.createservicio);
        this.router.post('/api/trm/', ClassSolicitudControllers_1.ObtSolicitudControllers.createtrm);
        this.router.get('/api/trm/:id', ClassSolicitudControllers_1.ObtSolicitudControllers.gettrm);
    }
}
const ObtSolicitudRoutes = new SolicitudRoutes();
exports.default = ObtSolicitudRoutes.router;
