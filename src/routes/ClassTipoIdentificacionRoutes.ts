
import { Router } from 'express';
import { ObtTipoIdentificacionCotrollers } from '../controllers/ClassTipoIdentificacionControllers';

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/

class TipoIdentificacionRoutes {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {

                this.router.get('/api/TipoIdentificacion/list', ObtTipoIdentificacionCotrollers.list);

        }
}


const ObtTipoIdentificacionRoutes = new TipoIdentificacionRoutes();

export default ObtTipoIdentificacionRoutes.router;