import { Router } from 'express';

import { ObtEnviarCorreoController } from '../controllers/ClassEnviarCorreoController';
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
class CorreoRoutes {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {
                this.router.put('/api/EnviarCorreo/:Correo', ObtEnviarCorreoController.EnviarCorreo);

        }
}


const ObtEnviarCorreoRoutes = new CorreoRoutes();

export default ObtEnviarCorreoRoutes.router;