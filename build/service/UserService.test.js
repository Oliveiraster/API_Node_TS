"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("./UserService");
describe('UserService', () => {
    const mockDB = [];
    const userService = new UserService_1.UserService(mockDB);
    it('Cria um novo usuario', () => {
        const mockConsole = jest.spyOn(global.console, 'log');
        userService.createUser('Ralph', 'ralph@email.com');
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDB);
    });
});
