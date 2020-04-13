import { Request, Response } from 'express';

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/

import pool from '../database';

class EquipoCotrollers {


    public async list(req: Request, res: Response): Promise<void> {

        await pool.query("select * from equipo", function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async create(req: Request, res: Response): Promise<void> {

        await pool.query('INSERT INTO equipo set ? ', [req.body], function (err, result, fields) {
            if (err) throw err;
            res.json({ message: 'El equipo a sido creado' });
        });

    }

    public async GetOnelist(req: Request, res: Response): Promise<any> {

        const { id } = req.params;


        const consultaempleado = await pool.query('SELECT * FROM equipo WHERE FK_Id_cliente= ?', [id], function (err, result, fields) {
            if (err) { throw err };

            if (result.length > 0) {
                return res.json(result);
            }else{
                return res.json({message:"No Se Encontraron Equipos"});
            }



        });

    }

}

export const ObtEquipoCotrollers = new EquipoCotrollers();