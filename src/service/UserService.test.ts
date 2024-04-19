import { User, UserService } from "./UserService"

describe('UserService', () => {
    const mockDB:User[] = []
    const userService = new UserService(mockDB)

    it('Cria um novo usuario', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('Ralph' , 'ralph@email.com')
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDB)
    })
})