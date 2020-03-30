import { Request, Response } from 'express';
import pool from '../database';

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/

class TipoIdentificacionCotrollers {


    public async list(req: Request, res: Response) {

        await pool.query('SELECT * FROM tipoidentificacion', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

}

export const ObtTipoIdentificacionCotrollers = new TipoIdentificacionCotrollers();