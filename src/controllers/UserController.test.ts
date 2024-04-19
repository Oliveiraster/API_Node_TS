import { mockReq } from "../__mocks__/mockRequest.mock"
import { makeMockRes } from "../__mocks__/mockResponse.mock"
import { UserService } from "../service/UserService"
import { UserController } from "./UserController"
import { Request } from "express"


describe('UserController', ()=>{
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        getAllUsers: jest.fn()
    }
    const userController = new UserController(mockUserService as UserService)
    const mockRes = makeMockRes()


    it(' Adicionar Usuario ', () => {
        const mockRequest = {
            body: {
                name:'Raphael',
                email: 'rapha@email.com'
            }
        } as Request
  
        userController.createUser(mockRequest, mockRes)
        expect(mockRes.state.status).toBe(201)
        expect(mockRes.state.json).toMatchObject({message: "Usuario cadastrado!"}) 
    })

    it('Retorna erro caso o usuario não informe o name', () => {
        const mockRequest = {
            body: {
                name:'',
                email: 'rapha@email.com'
            }
        } as Request
        userController.createUser(mockRequest, mockRes)
        expect(mockRes.state.status).toBe(400)
        expect(mockRes.state.json).toMatchObject({message: 'Bad request: Nome e email obrigatório'}) 
    })

    it('Retorna erro caso o usuario não informe o email', () => {
        const mockRequest = {
            body: {
                name:'Raphael',
                email: ''
            }
        } as Request
        userController.createUser(mockRequest, mockRes)
        expect(mockRes.state.status).toBe(400)
        expect(mockRes.state.json).toMatchObject({message: 'Bad request: Nome e email obrigatório'}) 
    })

    it('Retorna a lista de usuarios', () => {
        const mockRequest = mockReq({})
        userController.getAllUsers(mockRequest, mockRes)
        expect(mockRes.state.status).toBe(200)
    })

    it('Retorna msg so usuario deletado', () => {
        const mockRequest = {
            body: {
                name:'Raphael',
                email: ''
            }
        } as Request
        userController.deleteUser(mockRequest, mockRes)
        expect(mockRes.state.status).toBe(200)
        expect(mockRes.state.json).toMatchObject({message: `${mockRequest} Deletado!`}) 
    })
}) 