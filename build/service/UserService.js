"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const db = [
    {
        name: 'Raphael',
        email: 'raphael@email.com'
    }
];
class UserService {
    constructor(database = db) {
        this.createUser = (name, email) => {
            const user = {
                name,
                email
            };
            console.log(user);
            this.db.push(user);
            console.log('DB atualizado', this.db);
        };
        this.getAllUsers = () => {
            return this.db;
        };
        this.db = database;
    }
}
exports.UserService = UserService;
