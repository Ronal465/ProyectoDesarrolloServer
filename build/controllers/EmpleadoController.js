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
const Bcrypts_1 = require("../Incriptacion/Bcrypts");
const database_1 = __importDefault(require("../database"));
class EmpleadoCotrollers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM empleado', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    listCorreo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT Correo FROM empleado', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    GetOneEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const consultaempleado = yield database_1.default.query('SELECT * FROM empleado WHERE Username= ?', [id], function (err, result, fields) {
                if (err) {
                    throw err;
                }
                ;
                console.log(result[0]);
                if (result.length > 0) {
                    return res.json(result[0]);
                }
                else {
                    res.status(404).json({ text: "El Empleado No Existe" });
                }
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO empleado set ?', [req.body]);
            res.json({ message: 'El Empleado a sido creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM empleado WHERE Id_Empleado = ?', [id]);
            res.json({ message: 'El Empleado con el id:  ' + req.params.id + " A Sido Eliminado" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE empleado set ? WHERE Id_Empleado = ?', [req.body, id]);
            res.json({ message: 'El Empleado con el id:  ' + req.params.id + " A Sido Actualizado" });
        });
    }
    ObtenerContraseñaI(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { password } = req.params;
            var encriptado = Bcrypts_1.encriptacion.encriptar(password);
            res.json(encriptado);
        });
    }
}
exports.empleadoCotrollers = new EmpleadoCotrollers();
