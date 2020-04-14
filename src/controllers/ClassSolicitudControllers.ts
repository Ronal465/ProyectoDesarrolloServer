import { Request, Response } from 'express';
import pool from '../database';

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/

class SolicitudControllers {


    public async list(req: Request, res: Response) {

        await pool.query('SELECT * FROM solicitud', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async MaximoSolicitud(req: Request, res: Response) {

        await pool.query('SELECT MAX(IdSolicitud) +1 AS IdSolicitud FROM solicitud', function (err, result, fields) {
            if (err) throw err;
            if(result.IdSolicitud== null){
                res.json({IdSolicitud : 0});
            }else{
                res.json(result[0]);
            }
            
        });

    }
    public async listEstado(req: Request, res: Response) {

        await pool.query('SELECT * FROM estadosolicitud', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }
    public async GetOneSolicitud(req: Request, res: Response): Promise<any> {

        const { id } = req.params;


        const consultaempleado = await pool.query('SELECT * FROM solicitud WHERE IdSolicitud= ?', [id], function (err, result, fields) {
            if (err) { throw err };

            if (result.length > 0) {
                return res.json(result[0]);
            } else {
                res.status(404).json({ text: "La solicitud No Existe" });
            }



        });

    }
    public async create(req: Request, res: Response): Promise<void> {

        await pool.query('INSERT INTO solicitud set ?', [req.body]);

        res.json({ message: 'La solicitud a sido creado' });

    }
    public async createservicio(req: Request, res: Response): Promise<void> {

        await pool.query('INSERT INTO servicio set ?', [req.body]);

        res.json({ message: 'el servicio a sido creado' });

    }
    public async  createtrm (req: Request, res: Response): Promise<void> {

        await pool.query('INSERT INTO trm set ?', [req.body]);

        res.json(this.gettrm(req, res));

    }
    public async gettrm(req: Request, res: Response): Promise<any> {

        const { id } = req.params;

        const consultaempleado = await pool.query('SELECT * FROM trm WHERE Valor= ?', [id], function (err, result, fields) {
            if (err) { throw err };

            if (result.length > 0) {
                return res.json(result[0]);
            } else {
                res.status(404).json({ text: "el trm No Existe" });
            }
        });


    }
    
    

}

export const ObtSolicitudControllers = new SolicitudControllers();