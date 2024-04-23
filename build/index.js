"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const router_1 = require("./router");
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use(router_1.router);
server.get('/', (req, res) => {
    return res.status(200).json({ message: 'JraBank API' });
});
server.listen(5000, () => console.log('Servidor Ativo'));
