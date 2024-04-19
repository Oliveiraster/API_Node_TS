import { Request, Response } from "express"
import { UserService } from "../service/UserService"



export class UserController {
    userService:UserService

    constructor(userService = new UserService()){
        this.userService = userService
    }


    createUser = (req: Request, res:Response) => {
        const body = req.body
       
        if(!body.name || !body.email){
            return res.status(400).json({message:'Bad request: Nome e email obrigatório' })
        }

        this.userService.createUser(body.name, body.email)
        return res.status(201).json({message: 'Usuario cadastrado!'})
    }

    getAllUsers = (req: Request, res:Response) => {

        const users = this.userService.getAllUsers()
        return res.status(200).json(users)
    }

    deleteUser = (req: Request, res:Response) => {
        const user = req.body
        console.log('Delete User', user)
        return res.status(200).json({message: `${user} Deletado!`})
    }   
} 