"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
class MarcaModeloCotrollers {
    ObtenerModelos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const ObtenerModelos = yield database_1.default.query('SELECT modelo.IdModelo, modelo.Descripcion from modelo INNER JOIN marcamodelo where marcamodelo.FK_Marca = ? and marcamodelo.FK_Modelo = modelo.IdModelo;', [id], function (err, result, fields) {
                if (err) {
                    throw err;
                }
                ;
                if (result.length > 0) {
                    return res.json(result);
                }
                else {
                    res.status(404).json({ text: "No Existe Esa Marca" });
                }
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("insert into marcamodelo (FK_Marca, FK_Modelo) values"
                + "(( select IdMarca from marca where Descripcion = ?),"
                + "( select IdModelo from Modelo where Descripcion = ?))", [req.body.ObtInterfaceMarca.Descripcion,
                req.body.ObtInterfaceModelo.Descripcion], function (err, result, fields) {
                if (err)
                    throw err;
                res.json({ message: 'El marcamodelo a sido creado' });
            });
        });
    }
    createModelo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO modelo set ? ', [req.body], function (err, result, fields) {
                if (err)
                    throw err;
                res.json({ message: 'el modelo a sido creado' });
            });
        });
    }
}
exports.ObtMarcaModeloCotrollers = new MarcaModeloCotrollers();
