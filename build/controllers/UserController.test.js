"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockResponse_mock_1 = require("../__mocks__/mockResponse.mock");
const UserController_1 = require("./UserController");
const mockUserService = {
    createUser: jest.fn()
};
jest.mock("../service/UserService", () => {
    return {
        userService: jest.fn().mockImplementation(() => {
            return mockUserService;
        })
    };
});
describe('UserController', () => {
    const userController = new UserController_1.UserController();
    const mockRes = (0, mockResponse_mock_1.makeMockRes)();
    it(' Adicionar Usuario ', () => {
        const mockRequest = {
            body: {
                name: 'Raphael',
                email: 'rapha@email.com',
                password: '12345'
            }
        };
        userController.createUser(mockRequest, mockRes);
        expect(mockRes.state.status).toBe(201);
        expect(mockRes.state.json).toMatchObject({ message: "Usuario cadastrado!" });
    });
    it('Retorna erro caso o usuario não informe o name', () => {
        const mockRequest = {
            body: {
                name: '',
                email: 'rapha@email.com',
                password: '12345'
            }
        };
        userController.createUser(mockRequest, mockRes);
        expect(mockRes.state.status).toBe(400);
        expect(mockRes.state.json).toMatchObject({ message: 'Bad request: Nome e email obrigatório' });
    });
    it('Retorna erro caso o usuario não informe o email', () => {
        const mockRequest = {
            body: {
                name: 'Raphael',
                email: '',
                password: '12345'
            }
        };
        userController.createUser(mockRequest, mockRes);
        expect(mockRes.state.status).toBe(400);
        expect(mockRes.state.json).toMatchObject({ message: 'Bad request: Nome e email obrigatório' });
    });
    it('Retorna erro caso o usuario não informe o senha', () => {
        const mockRequest = {
            body: {
                name: 'Raphael',
                email: 'rapha@email.com',
                password: ''
            }
        };
        userController.createUser(mockRequest, mockRes);
        expect(mockRes.state.status).toBe(400);
        expect(mockRes.state.json).toMatchObject({ message: 'Bad request: Nome e email obrigatório' });
    });
    it('Retorna msg so usuario deletado', () => {
        const mockRequest = {
            body: {
                name: 'Raphael',
                email: '',
                password: '12345'
            }
        };
        userController.deleteUser(mockRequest, mockRes);
        expect(mockRes.state.status).toBe(200);
        expect(mockRes.state.json).toMatchObject({ message: `${mockRequest} Deletado!` });
    });
});
