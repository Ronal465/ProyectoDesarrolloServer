import { Request, Response } from 'express';

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
const JWT_Secret = 'CABRON1';
const jwt = require('jsonwebtoken');

class JWTCotrollers {

    public async Login(req: Request, res: Response){

       var token = jwt.sign(req.body, JWT_Secret);
        res.status(200).send({ 
        Empleado: req.body,
        token: token
     });
    }

    public async Verificar(req: Request, res: Response){

      
      try {
         var token = jwt.verify(req.body.token, JWT_Secret);
         res.json({Validar: true,token});
       } catch(err) {
         res.json({Validar: false})
       }

   }
   


}

export const ObtJWTCotrollers = new JWTCotrollers();