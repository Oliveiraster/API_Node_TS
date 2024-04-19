"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../service/UserService");
class UserController {
    constructor(userService = new UserService_1.UserService()) {
        this.createUser = (req, res) => {
            const body = req.body;
            if (!body.name || !body.email) {
                return res.status(400).json({ message: 'Bad request: Nome e email obrigatório' });
            }
            this.userService.createUser(body.name, body.email);
            return res.status(201).json({ message: 'Usuario cadastrado!' });
        };
        this.getAllUsers = (req, res) => {
            const users = this.userService.getAllUsers();
            return res.status(200).json(users);
        };
        this.deleteUser = (req, res) => {
            const user = req.body;
            console.log('Delete User', user);
            return res.status(200).json({ message: `${user} Deletado!` });
        };
        this.userService = userService;
    }
}
exports.UserController = UserController;
