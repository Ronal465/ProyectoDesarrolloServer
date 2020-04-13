import { Request, Response } from 'express';
import pool from '../database';

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/

class RepuestosCotrollers {


    public async list(req: Request, res: Response) {

        await pool.query('SELECT * FROM repuestos', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async create(req: Request, res: Response): Promise<void> {

        await pool.query('INSERT INTO repuestos set ? ', [req.body], function (err, result, fields) {
            if (err) throw err;
            res.json({ message: 'El repuestos a sido creado' });
        });

    }



}

export const ObtRepuestosCotrollers = new RepuestosCotrollers();