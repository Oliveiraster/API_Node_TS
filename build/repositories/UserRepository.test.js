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
const mockEntityManager_mock_1 = require("../__mocks__/mockEntityManager.mock");
const UserRepository_1 = require("./UserRepository");
describe('UserRepository', () => {
    let userRepository;
    let managerMock;
    const mockUser = {
        id_user: '12345',
        name: 'Testando',
        email: 'teste@email.com',
        password: 'teste123'
    };
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        managerMock = yield (0, mockEntityManager_mock_1.getMockEntityManager)({
            saveReturn: mockUser
        });
        userRepository = new UserRepository_1.UserRepository(managerMock);
    }));
    it('Cadastra Usuario no DB', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield userRepository.createUser(mockUser);
        expect(managerMock.save).toHaveBeenCalled();
        // expect(response).toEqual(mockUser)
    }));
});
