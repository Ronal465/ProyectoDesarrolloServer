
import { Router } from 'express';
import { ObtMarcaModeloCotrollers } from '../controllers/ClassMarcaModeloController'

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/

class MarcaModeloRoutes {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {

                this.router.get('/api/MarcaModelo/Modelos/:id', ObtMarcaModeloCotrollers.ObtenerModelos);
                this.router.put('/api/MarcaModelo/', ObtMarcaModeloCotrollers.create);
                this.router.put('/api/MarcaModelo/Modelos/', ObtMarcaModeloCotrollers.createModelo);

        }
}


const ObtMarcaModeloRoutes = new MarcaModeloRoutes();

export default ObtMarcaModeloRoutes.router;