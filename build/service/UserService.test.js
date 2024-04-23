"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("./UserService");
jest.mock('../repositories/UserRepository');
jest.mock('../database', () => {
    intialize: jest.fn();
});
const mockUserRepository = require('../repositories/UserRepository');
describe('UserService', () => {
    const userService = new UserService_1.UserService(mockUserRepository);
    it('Cria um novo usuario', () => __awaiter(void 0, void 0, void 0, function* () {
        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve({
            id_user: '12345',
            name: 'Ralph',
            email: 'ralph@email.com',
            password: '12345'
        }));
        const response = yield userService.createUser('Ralph', 'ralph@email.com', '12345');
        expect(mockUserRepository.createUser).toHaveBeenCalled();
        expect(response).toMatchObject({ id_user: '12345',
            name: 'Ralph',
            email: 'ralph@email.com',
            password: '12345' });
    }));
});
