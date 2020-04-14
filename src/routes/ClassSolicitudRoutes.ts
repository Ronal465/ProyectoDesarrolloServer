import { Router } from 'express';
import { ObtSolicitudControllers } from "../controllers/ClassSolicitudControllers";

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/

class SolicitudRoutes {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {

                this.router.get('/api/solicitud/:id',ObtSolicitudControllers.GetOneSolicitud);
                this.router.get('/api/solicitud/',ObtSolicitudControllers.list);
                this.router.get('/api/solicitud/Numero/Id',ObtSolicitudControllers.MaximoSolicitud);
                this.router.post('/api/solicitud/',ObtSolicitudControllers.create);
                this.router.get('/api/solicitud/Estados/Solicitud',ObtSolicitudControllers.listEstado);
                this.router.post('/api/servicio/',ObtSolicitudControllers.createservicio);
                this.router.post('/api/trm/',ObtSolicitudControllers.createtrm);
                this.router.get('/api/trm/:id',ObtSolicitudControllers.gettrm);

        }
}


const ObtSolicitudRoutes = new SolicitudRoutes();

export default ObtSolicitudRoutes.router;