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
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
const database_1 = __importDefault(require("../database"));
class EquipoCotrollers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("select * from equipo", function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO equipo set ? ', [req.body], function (err, result, fields) {
                if (err)
                    throw err;
                res.json({ message: 'El equipo a sido creado' });
            });
        });
    }
    GetOnelist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const consultaempleado = yield database_1.default.query('SELECT * FROM equipo WHERE FK_Id_cliente= ?', [id], function (err, result, fields) {
                if (err) {
                    throw err;
                }
                ;
                if (result.length > 0) {
                    return res.json(result);
                }
                else {
                    return res.json({ message: "No Se Encontraron Equipos" });
                }
            });
        });
    }
}
exports.ObtEquipoCotrollers = new EquipoCotrollers();
