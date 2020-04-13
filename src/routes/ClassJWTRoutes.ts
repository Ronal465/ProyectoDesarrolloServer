
import { Router } from 'express';
import {  ObtJWTCotrollers} from "../controllers/ClassJWTControllers";
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/


class JWTRoutes {

        public router: Router = Router();

        constructor() {
                this.config();
        }

        config(): void {

                this.router.post("/api/Login",ObtJWTCotrollers.Login );
                this.router.post("/api/Verificar",ObtJWTCotrollers.Verificar );
        }
}


const ObtJWTRoutes = new JWTRoutes();

export default ObtJWTRoutes.router;