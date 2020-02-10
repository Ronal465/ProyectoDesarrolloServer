import {Router} from 'express';
import {ObtEstadoEmpleadoCotrollers} from '../controllers/ClassEstadoEmpleadoControllers';


class EstadoEmpleadoRoutes{

        public router : Router = Router();

        constructor(){
                this.config();

        }
 
        config(): void{

            this.router.get('/api/EstadoEmpleado/list',ObtEstadoEmpleadoCotrollers.list);

            }
 }


 const ObtEstadoEmpleadoRoutes= new EstadoEmpleadoRoutes();

 export default ObtEstadoEmpleadoRoutes.router;