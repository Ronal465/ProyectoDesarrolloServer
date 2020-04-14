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
class SolicitudControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM solicitud', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    MaximoSolicitud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT MAX(IdSolicitud) +1 AS IdSolicitud FROM solicitud', function (err, result, fields) {
                if (err)
                    throw err;
                if (result.IdSolicitud == null) {
                    res.json({ IdSolicitud: 0 });
                }
                else {
                    res.json(result[0]);
                }
            });
        });
    }
    listEstado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM estadosolicitud', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    GetOneSolicitud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const consultaempleado = yield database_1.default.query('SELECT * FROM solicitud WHERE IdSolicitud= ?', [id], function (err, result, fields) {
                if (err) {
                    throw err;
                }
                ;
                if (result.length > 0) {
                    return res.json(result[0]);
                }
                else {
                    res.status(404).json({ text: "La solicitud No Existe" });
                }
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO solicitud set ?', [req.body]);
            res.json({ message: 'La solicitud a sido creado' });
        });
    }
    createservicio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO servicio set ?', [req.body]);
            res.json({ message: 'el servicio a sido creado' });
        });
    }
    createtrm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO trm set ?', [req.body]);
            res.json(this.gettrm(req, res));
        });
    }
    gettrm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const consultaempleado = yield database_1.default.query('SELECT * FROM trm WHERE Valor= ?', [id], function (err, result, fields) {
                if (err) {
                    throw err;
                }
                ;
                if (result.length > 0) {
                    return res.json(result[0]);
                }
                else {
                    res.status(404).json({ text: "el trm No Existe" });
                }
            });
        });
    }
}
exports.ObtSolicitudControllers = new SolicitudControllers();
