import { Request, Response } from 'express';
import pool from '../database';

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/

class MarcaCotrollers {


    public async list(req: Request, res: Response) {

        await pool.query('SELECT * FROM marca', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async create(req: Request, res: Response): Promise<void> {

        await pool.query('INSERT INTO marca set ? ', [req.body], function (err, result, fields) {
            if (err) throw err;
            res.json({ message: 'El marca a sido creado' });
        });

    }



}

export const ObtMarcaCotrollers = new MarcaCotrollers();