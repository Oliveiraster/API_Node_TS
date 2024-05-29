import { EntityManager } from "typeorm"
import { getMockEntityManager } from "../__mocks__/mockEntityManager.mock"
import { User } from "../entities/User"
import { UserRepository } from "./UserRepository"
import { makeMockReq } from "../__mocks__/mockRequest.mock"

describe('UserRepository', () => {
    let userRepository: UserRepository
    let managerMock: Partial<EntityManager>

    const mockUser :User ={
        id_user:'12345',
        name: 'Testando',
        email: 'teste@email.com',
        password: 'teste123'
    }

    beforeAll( async()=>{
        managerMock = await getMockEntityManager({
            saveReturn: mockUser
        })
        userRepository = new UserRepository(managerMock as EntityManager)
    })
    it('Cadastra Usuario no DB', async () => {
        const response = await userRepository.createUser(mockUser)
        expect(managerMock.save).toHaveBeenCalled()
        // expect(response).toEqual(mockUser)
    })

 
})