import { Request, Response } from 'express';

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/


import pool from '../database';

class ClienteCotrollers {


    public async list(req: Request, res: Response): Promise<void> {

        await pool.query("select * from cliente", function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async create(req: Request, res: Response): Promise<void> {

        await pool.query('INSERT INTO cliente set ? ', [req.body], function (err, result, fields) {
            if (err) throw err;
            res.json({ message: 'El Cliente a sido creado' });
        });

    }

}

export const ObtClienteCotrollers = new ClienteCotrollers();