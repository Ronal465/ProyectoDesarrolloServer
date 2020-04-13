
import { Router } from 'express';
import { ObtRepuestosCotrollers } from '../controllers/ClassRepuestrosControllers';

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/

class MarcaRoutes {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {
                this.router.get('/api/repuestos/list', ObtRepuestosCotrollers.list);
                this.router.put('/api/repuestos', ObtRepuestosCotrollers.create);
        }
}


const ObtMarcaRoutes = new MarcaRoutes();

export default ObtMarcaRoutes.router;