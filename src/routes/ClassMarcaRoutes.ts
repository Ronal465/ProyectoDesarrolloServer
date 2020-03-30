
import { Router } from 'express';
import { ObtMarcaCotrollers } from '../controllers/ClassMarcaController';

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
                this.router.get('/api/Marca/list', ObtMarcaCotrollers.list);
                this.router.put('/api/Marca', ObtMarcaCotrollers.create);
        }
}


const ObtMarcaRoutes = new MarcaRoutes();

export default ObtMarcaRoutes.router;