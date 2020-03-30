"use strict";
// imports nescesarios para montar el servidor
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const ClassIndexRoutes_1 = __importDefault(require("./routes/ClassIndexRoutes"));
const ClassEmpleadoRoutes_1 = __importDefault(require("./routes/ClassEmpleadoRoutes"));
const ClassEnviarCorreoRoutes_1 = __importDefault(require("./routes/ClassEnviarCorreoRoutes"));
const ClassEstadoEmpleadoRoutes_1 = __importDefault(require("./routes/ClassEstadoEmpleadoRoutes"));
const ClassPermisosEmpleadoRoutes_1 = __importDefault(require("./routes/ClassPermisosEmpleadoRoutes"));
const ClassTipoIdentificacionRoutes_1 = __importDefault(require("./routes/ClassTipoIdentificacionRoutes"));
const ClassMarcaModeloRoutes_1 = __importDefault(require("./routes/ClassMarcaModeloRoutes"));
const ClassMarcaRoutes_1 = __importDefault(require("./routes/ClassMarcaRoutes"));
const ClassClienteRoutes_1 = __importDefault(require("./routes/ClassClienteRoutes"));
const ClassEquipoRoutes_1 = __importDefault(require("./routes/ClassEquipoRoutes"));
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev')); // sirve para que lea las peticiones
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); // sirve para que cuando angular le mande un .json lo entienda
        this.app.use(express_1.default.urlencoded({ extended: false })); // sirve para que se pueda usar en html pas peticiones
    }
    routes() {
        this.app.use(ClassIndexRoutes_1.default);
        this.app.use(ClassEmpleadoRoutes_1.default);
        this.app.use(ClassEnviarCorreoRoutes_1.default);
        this.app.use(ClassEstadoEmpleadoRoutes_1.default);
        this.app.use(ClassPermisosEmpleadoRoutes_1.default);
        this.app.use(ClassTipoIdentificacionRoutes_1.default);
        this.app.use(ClassMarcaModeloRoutes_1.default);
        this.app.use(ClassMarcaRoutes_1.default);
        this.app.use(ClassClienteRoutes_1.default);
        this.app.use(ClassEquipoRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port " + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
