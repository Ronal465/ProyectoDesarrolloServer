// imports nescesarios para montar el servidor

import express,{Application} from 'express';

import cors from 'cors';
import morgan from 'morgan';


import ObtIndexRoutes from './routes/ClassIndexRoutes';
import ObtEmpleadoRoutes from './routes/ClassEmpleadoRoutes';
import ObtEnviarCorreoRoutes from './routes/ClassEnviarCorreoRoutes';

class Server {

    public app : Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));    // sirve para que lea las peticiones
        this.app.use(cors());
        this.app.use(express.json()); // sirve para que cuando angular le mande un .json lo entienda
        this.app.use(express.urlencoded({extended:false})); // sirve para que se pueda usar en html pas peticiones


    }

    routes():void{

        this.app.use(ObtIndexRoutes);
        this.app.use(ObtEmpleadoRoutes);
        this.app.use(ObtEnviarCorreoRoutes);

    }
    
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log("Server on port " + this.app.get('port'));
        });
    }

}


const server = new Server();
server.start();