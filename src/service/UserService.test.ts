import { UserService } from "./UserService"

jest.mock('../repositories/UserRepository')
jest.mock('../database', () => {
    intialize: jest.fn()
})

const mockUserRepository = require('../repositories/UserRepository')


describe('UserService', () => {
    const userService = new UserService(mockUserRepository)

    it('Cria um novo usuario',async () => {
        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve({
            id_user: '12345',
            name: 'Ralph',
            email: 'ralph@email.com',
            password: '12345'
        }))
        const response = await userService.createUser('Ralph', 'ralph@email.com', '12345')
        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(response).toMatchObject({  id_user: '12345',
            name: 'Ralph',
            email: 'ralph@email.com',
            password: '12345'})
    })

    it('Retorna token de usuario', () => {
        const token = userService.getAuthUser 
       })
})