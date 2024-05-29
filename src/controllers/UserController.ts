import { Request, Response } from "express"
import { UserService } from "../service/UserService"



export class UserController {

    userService: UserService

    constructor(userService = new UserService()){
        this.userService = userService
    }


     createUser = (req: Request, res:Response):Response => {
        const body = req.body
       
        if(!body.name || !body.email|| !body.password){
            return res.status(400).json({message:'Bad request: Nome, email e senha obrigatório' })
        }

        this.userService.createUser(body.name, body.email, body.password)
        return res.status(201).json({message: 'Usuario cadastrado!'})
    }

    getUser = async (req: Request, res:Response) => {
        const {userId} = req.params
        const user = await this.userService.getUser(userId)
        return res.status(200).json({
            userId: user?.id_user,
            email: user?.email,
            name: user?.name
        })
    }

    deleteUser = (req: Request, res:Response) => {
        const user = req.body
        console.log('Delete User', user)
        return res.status(200).json({message: `${user} Deletado!`})
    }   
}  