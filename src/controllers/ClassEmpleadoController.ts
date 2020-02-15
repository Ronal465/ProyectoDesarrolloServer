import {Request,Response}   from 'express';
import {encriptacion} from '../Incriptacion/Bcrypts';
import pool from '../database';

    class EmpleadoCotrollers{


        public async list (req : Request,res :Response){

                await pool.query('SELECT * FROM empleado', function(err, result, fields) {
                    if (err) throw err;
                    res.json(result);
                });

        }
        public async listCorreo (req : Request,res :Response){

           
            await pool.query('SELECT Correo FROM empleado', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        
      

        }
        public async GetOneEmpleado(req :Request, res : Response): Promise<any>{

            const {id} = req.params;

            
            const consultaempleado = await pool.query('SELECT * FROM empleado WHERE Username= ?',[id],function(err, result, fields) {
                if (err) {throw err};
                console.log(result[0]);

                if(result.length >0){
                    return  res.json(result[0]);
                }else{
                    res.status(404).json({text: "El Empleado No Existe"});
                }

                   
               
            });
               
        }  
        public async create(req : Request , res: Response): Promise<void>{

            await pool.query('INSERT INTO empleado set ?', [req.body]);
            
            res.json({message:'El Empleado a sido creado'}); 
            console.log(req.body );
            
        }
        public async delete(req : Request, res: Response) :Promise<void> {

            const {id} = req.params;

            await pool.query('DELETE FROM empleado WHERE Id_Empleado = ?',[id]);

            res.json({message : 'El Empleado con el id:  '+ req.params.id + " A Sido Eliminado"});

        }
        public async update(req : Request, res :Response) : Promise<void> {
            const {id} = req.params;

            console.log(req.body);

            await pool.query('UPDATE empleado set ? WHERE Id_Empleado = ?',[req.body,id]);

            res.json({message : 'El Empleado con el id:  '+ id + " A Sido Actualizado"});
        }
        public async BloquearEmpleado(req : Request, res :Response) : Promise<void> {
            const {id} = req.params;

            console.log(req.body);

            await pool.query('UPDATE empleado set ? WHERE Id_Empleado = ?',[req.body,id]);

            res.json({message : 'El Empleado con el id:  '+ id + " A Sido Bloqueado"});
        }
        public async ObtenerContraseñaI(req : Request, res :Response) : Promise<void> {
            const {password} = req.params;

             
             var encriptado = encriptacion.encriptar(password);
             res.json(encriptado);
        }
    }
    
    export const ObtEmpleadoCotrollers =  new EmpleadoCotrollers();