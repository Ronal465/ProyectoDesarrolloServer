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

    public async GetOneCliente(req: Request, res: Response): Promise<any> {

        const { identificacion } = req.params;


        const consultaempleado = await pool.query('SELECT * FROM cliente WHERE Numero_Identificacion= ?', [identificacion], function (err, result, fields) {
            if (err) { throw err };

            if (result.length > 0) {
                return res.json(result[0]);
            } else {
                res.status(404).json({ text: "El cliente No Existe" });
            }



        });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Cliente set ? WHERE Id_cliente = ?', [req.body, id]);

        res.json({ message: 'El Cliente A Sido Actualizado'});
    }

}

export const ObtClienteCotrollers = new ClienteCotrollers();