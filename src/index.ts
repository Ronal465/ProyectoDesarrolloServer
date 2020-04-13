// imports nescesarios para montar el servidor

import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import ObtIndexRoutes from './routes/ClassIndexRoutes';
import ObtEmpleadoRoutes from './routes/ClassEmpleadoRoutes';
import ObtEnviarCorreoRoutes from './routes/ClassEnviarCorreoRoutes';
import ObtEstadoEmpleadoRoutes from './routes/ClassEstadoEmpleadoRoutes';
import ObtPermisosEmpleadoRoutes from './routes/ClassPermisosEmpleadoRoutes';
import ObtTipoIdentificacionRoutes from './routes/ClassTipoIdentificacionRoutes';
import ObtMarcaModeloRoutes from './routes/ClassMarcaModeloRoutes';
import ObtMarcaRoutes from './routes/ClassMarcaRoutes';
import ObtClienteRoutes from "./routes/ClassClienteRoutes";
import ObtEquipoRoutes from "./routes/ClassEquipoRoutes";
import ObtRepuestosRoutes from "./routes/ClassRepuestosRoutes";
import ObtJWTRoutes from "./routes/ClassJWTRoutes";

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
const bodyParser = require('body-parser');

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));    // sirve para que lea las peticiones
        this.app.use(cors());
        this.app.use(express.json()); // sirve para que cuando angular le mande un .json lo entienda
        this.app.use(express.urlencoded({ extended: false })); // sirve para que se pueda usar en html pas peticiones
        this.app.use(bodyParser.json());

    }

    routes(): void {

        this.app.use(ObtIndexRoutes);
        this.app.use(ObtEmpleadoRoutes);
        this.app.use(ObtEnviarCorreoRoutes);
        this.app.use(ObtEstadoEmpleadoRoutes);
        this.app.use(ObtPermisosEmpleadoRoutes);
        this.app.use(ObtTipoIdentificacionRoutes);
        this.app.use(ObtMarcaModeloRoutes);
        this.app.use(ObtMarcaRoutes);
        this.app.use(ObtClienteRoutes);
        this.app.use(ObtEquipoRoutes);
        this.app.use(ObtRepuestosRoutes);
        this.app.use(ObtJWTRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port " + this.app.get('port'));
        });
    }

}


const server = new Server();
server.start();