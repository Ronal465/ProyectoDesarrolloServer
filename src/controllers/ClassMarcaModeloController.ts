import { Request, Response } from 'express';
import pool from '../database';

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/

class MarcaModeloCotrollers {


    public async ObtenerModelos(req: Request, res: Response): Promise<any> {

        const { id } = req.params;


        const ObtenerModelos = await pool.query('SELECT modelo.IdModelo, modelo.Descripcion from modelo INNER JOIN marcamodelo where marcamodelo.FK_Marca = ? and marcamodelo.FK_Modelo = modelo.IdModelo;', [id], function (err, result, fields) {
            if (err) { throw err };
            if (result.length > 0) {
                return res.json(result);
            } else {
                res.status(404).json({ text: "No Existe Esa Marca" });
            }
        });

    }
    public async create(req: Request, res: Response): Promise<void> {

        await pool.query(
            "insert into marcamodelo (FK_Marca, FK_Modelo) values"
            + "(( select IdMarca from marca where Descripcion = ?),"
            + "( select IdModelo from Modelo where Descripcion = ?))", [req.body.ObtInterfaceMarca.Descripcion
            , req.body.ObtInterfaceModelo.Descripcion]
            , function (err, result, fields) {
                if (err) throw err;
                res.json({ message: 'El marcamodelo a sido creado' });
            });


    }
    public async createModelo(req: Request, res: Response): Promise<void> {

        await pool.query('INSERT INTO modelo set ? ', [req.body], function (err, result, fields) {
            if (err) throw err;
            res.json({ message: 'el modelo a sido creado' });
        });

    }


}

export const ObtMarcaModeloCotrollers = new MarcaModeloCotrollers();