import {Request,Response}   from 'express';



    class IndexCotrollers{


        public index (req : Request,res :Response){

           // res.json();
           res.send('eviado desde index');
           console.log("entra index indexcontroller");

        }


    }
    
    export const ObtIndexCotrollers =  new IndexCotrollers();