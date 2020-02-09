import {Router} from 'express';

import {ObtIndexCotrollers} from '../controllers/ClassIndexController';

class IndexRoutes{

        public router : Router = Router();

        constructor(){
                this.config();

        }

        config(): void{
            this.router.get('/',ObtIndexCotrollers.index);
            }
 }


const ObtIndexRoutes= new IndexRoutes();

export default ObtIndexRoutes.router;