import {Request,Response}   from 'express';
import pool from '../database';

    class EstadoEmpleadoCotrollers{


        public async list (req : Request,res :Response){

                await pool.query('SELECT * FROM estadoempleado', function(err, result, fields) {
                    if (err) throw err;
                    res.json(result);
                });

        }

    }
    
    export const ObtEstadoEmpleadoCotrollers =  new EstadoEmpleadoCotrollers();