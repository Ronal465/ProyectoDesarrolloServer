"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassIndexController_1 = require("../controllers/ClassIndexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ClassIndexController_1.ObtIndexCotrollers.index);
    }
}
const ObtIndexRoutes = new IndexRoutes();
exports.default = ObtIndexRoutes.router;
