
import { Router } from 'express';
import { ObtEquipoCotrollers } from "../controllers/ClassEquipoControllers";

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/

class EquipoRoutes {

        public router: Router = Router();

        constructor() {
                this.config();
        }

        config(): void {

                this.router.get("/api/Equipo/list", ObtEquipoCotrollers.list);
                this.router.put("/api/Equipo", ObtEquipoCotrollers.create);

        }
}


const ObtEquipoRoutes = new EquipoRoutes();

export default ObtEquipoRoutes.router;