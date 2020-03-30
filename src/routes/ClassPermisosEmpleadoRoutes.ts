
import { Router } from 'express';
import { ObtPermisosEmpleadoCotrollers } from '../controllers/ClassPermisosEmpleadoControllers';

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/

class PermisosEmpleadoRoutes {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {

                this.router.get('/api/PermisosEmpleado/list', ObtPermisosEmpleadoCotrollers.list);

        }
}


const ObtPermisosEmpleadoRoutes = new PermisosEmpleadoRoutes();

export default ObtPermisosEmpleadoRoutes.router;