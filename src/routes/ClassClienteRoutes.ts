
import { Router } from 'express';
import { ObtClienteCotrollers } from "../controllers/ClassClienteControllers";
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/


class ClienteRoutes {

        public router: Router = Router();

        constructor() {
                this.config();
        }

        config(): void {

                this.router.get("/api/Cliente/list", ObtClienteCotrollers.list);
                this.router.put("/api/Cliente", ObtClienteCotrollers.create);

        }
}


const ObtClienteRoutes = new ClienteRoutes();

export default ObtClienteRoutes.router;