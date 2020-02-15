import {Request,Response}   from 'express';
import pool from '../database';

    class PermisosEmpleadoCotrollers{


        public async list (req : Request,res :Response){

                await pool.query('SELECT * FROM permisosempleado', function(err, result, fields) {
                    if (err) throw err;
                    res.json(result);
                });

        }

    }
    
    export const ObtPermisosEmpleadoCotrollers =  new PermisosEmpleadoCotrollers();