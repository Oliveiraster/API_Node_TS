"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockRequest_mock_1 = require("../__mocks__/mockRequest.mock");
const mockResponse_mock_1 = require("../__mocks__/mockResponse.mock");
const UserController_1 = require("./UserController");
describe('UserController', () => {
    const mockUserService = {
        createUser: jest.fn(),
        getAllUsers: jest.fn()
    };
    const userController = new UserController_1.UserController(mockUserService);
    const mockRes = (0, mockResponse_mock_1.makeMockRes)();
    it(' Adicionar Usuario ', () => {
        const mockRequest = {
            body: {
                name: 'Raphael',
                email: 'rapha@email.com'
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
                email: 'rapha@email.com'
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
                email: ''
            }
        };
        userController.createUser(mockRequest, mockRes);
        expect(mockRes.state.status).toBe(400);
        expect(mockRes.state.json).toMatchObject({ message: 'Bad request: Nome e email obrigatório' });
    });
    it('Retorna a lista de usuarios', () => {
        const mockRequest = (0, mockRequest_mock_1.mockReq)({});
        userController.getAllUsers(mockRequest, mockRes);
        expect(mockRes.state.status).toBe(200);
    });
    it('Retorna msg so usuario deletado', () => {
        const mockRequest = {
            body: {
                name: 'Raphael',
                email: ''
            }
        };
        userController.deleteUser(mockRequest, mockRes);
        expect(mockRes.state.status).toBe(200);
        expect(mockRes.state.json).toMatchObject({ message: `${mockRequest} Deletado!` });
    });
});
