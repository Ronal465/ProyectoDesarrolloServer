import { Request, Response } from 'express';

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/

class IndexCotrollers {


    public index(req: Request, res: Response) {

        // res.json();
        res.send('eviado desde index');


    }


}

export const ObtIndexCotrollers = new IndexCotrollers();