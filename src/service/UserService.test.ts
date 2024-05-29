import { UserService } from "./UserService"
import * as jwt from "jsonwebtoken"

jest.mock('../repositories/UserRepository')
jest.mock('../database', () => {
    intialize: jest.fn()
})
jest.mock('jsonwebtoken')

const mockUserRepository = require('../repositories/UserRepository')
const mockUser = {
    id_user: '12345',
    name: 'Ralph',
    email: 'ralph@email.com',
    password: '12345'

}


describe('UserService', () => {
    const userService = new UserService(mockUserRepository)

    it('Cria um novo usuario',async () => {
        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser))
        const response = await userService.createUser('Ralph', 'ralph@email.com', '12345')
        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(response).toMatchObject({  id_user: '12345',
            name: 'Ralph',
            email: 'ralph@email.com',
            password: '12345'})
    })

    it('Retorna token de usuario',async () => {
        jest.spyOn(userService, 'getAuthUser').mockImplementation(()=> Promise.resolve(mockUser))
        jest.spyOn(jwt, 'sign').mockImplementation(() => 'token')
        const token = await userService.getToken('ralph@email.com', '12345')
        expect(token).toBe('token')
       })
       it('Retorna um erro, caso nao exista usuario', async () => {
        jest.spyOn(userService, 'getAuthUser').mockImplementation(() => Promise.resolve(null))
        await expect(userService.getToken('invali@test.com', '123456')).rejects.toThrowError(new Error('Usiario nao encontrado!'))
       })
})