import { UserController } from "./UserController"
import { Request } from "express"
import { makeMockRes } from "../__mocks__/mockResponse.mock"
import { makeMockReq } from '../__mocks__/mockRequest.mock'



const mockUserService = {
    createUser: jest.fn(),
    getUser: jest.fn()
}
jest.mock("../service/UserService", () => {
    return {
        UserService: jest.fn().mockImplementation(() => {
            return mockUserService
        })
    }
})

describe('UserController', ()=>{
  
    const userController = new UserController()
    const mockRes = makeMockRes()

    it(' Adicionar Usuario ', () => {
        const mockRequest = {
            body: {
                name:'Raphael',
                email: 'rapha@email.com',
                password: '12345'
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
                email: 'rapha@email.com',
                password: '12345'
            }
        } as Request

        userController.createUser(mockRequest, mockRes)
        expect(mockRes.state.status).toBe(400)
        expect(mockRes.state.json).toMatchObject({message: "Bad request: Nome, email e senha obrigatório"}) 
    })

    it('Retorna erro caso o usuario não informe o email', () => {
        const mockRequest = {
            body: {
                name:'Raphael',
                email: '',
                password: '12345'
            }
        } as Request
        userController.createUser(mockRequest, mockRes)
        expect(mockRes.state.status).toBe(400)
        expect(mockRes.state.json).toMatchObject({message: "Bad request: Nome, email e senha obrigatório"}) 
    })

    it('Retorna erro caso o usuario não informe o senha', () => {
        const mockRequest = {
            body: {
                 name:'Raphael',
                email: 'rapha@email.com',
                password: ''
            }
        } as Request
        userController.createUser(mockRequest, mockRes)
        expect(mockRes.state.status).toBe(400)
        expect(mockRes.state.json).toMatchObject({message: "Bad request: Nome, email e senha obrigatório"}) 
    })


    it('Retorna msg so usuario deletado', () => {
        const mockRequest = {
            body: {
                name:'Raphael',
                email: '',
                password: '12345'
            }
        } as Request
        userController.deleteUser(mockRequest, mockRes)
        expect(mockRes.state.status).toBe(200)
        expect(mockRes.state.json).toMatchObject({message: `${mockRequest} Deletado!`}) 
    })
       it('Retorna o usuario com o ID informado', () => {
        const mockRequest = makeMockReq({
            params:{
                userId: '12345'
            }
        })
        userController.getUser(mockRequest, mockRes)
        expect(mockUserService.getUser).toHaveBeenCalledWith('12345')
        expect(mockRes.state.status).toBe(200)
    })
}) 