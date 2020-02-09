"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexCotrollers {
    index(req, res) {
        // res.json();
        res.send('eviado desde index');
    }
}
exports.indexCotrollers = new IndexCotrollers();
