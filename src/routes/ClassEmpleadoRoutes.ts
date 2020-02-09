import {Router} from 'express';

import {ObtEmpleadoCotrollers} from '../controllers/ClassEmpleadoController';

class EmpleadoRoutes{

        public router : Router = Router();

        constructor(){
                this.config();

        }
 
        config(): void{

            this.router.get('/api/empleado',ObtEmpleadoCotrollers.list);
            this.router.get('/api/empleado/password/:password',ObtEmpleadoCotrollers.ObtenerContraseñaI);
            this.router.get('/api/empleado/:id',ObtEmpleadoCotrollers.GetOneEmpleado);
            this.router.get('/api/empleado/correo/list',ObtEmpleadoCotrollers.listCorreo);
            this.router.post('/api/empleado',ObtEmpleadoCotrollers.create);
            this.router.delete('/api/empleado/:id',ObtEmpleadoCotrollers.delete);
            this.router.put('/api/empleado/:id',ObtEmpleadoCotrollers.update);
            this.router.put('/api/empleado/bloquear/:id',ObtEmpleadoCotrollers.BloquearEmpleado);
            

            
            }
 }


 const ObtEmpleadoRoutes= new EmpleadoRoutes();

 export default ObtEmpleadoRoutes.router;