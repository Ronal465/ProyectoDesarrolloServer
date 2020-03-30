"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/
class IndexCotrollers {
    index(req, res) {
        // res.json();
        res.send('eviado desde index');
    }
}
exports.ObtIndexCotrollers = new IndexCotrollers();
