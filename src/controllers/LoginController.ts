import {Request, Response} from 'express'
import{ sign } from 'jsonwebtoken'


const user = {
    userId: '12345',
    name: 'Raphael',
    email: 'rapha@email.com',
    password: 'password'
}

export class LoginController {
    login = async (req: Request, res: Response) => {

        const tokenData = {
            name: user.name,
            email:user.email,

        }

        const tokenKey = '123456789'

        const tokenOption = {
            subject:  user.userId
        }

        const token = sign(tokenData, tokenKey, tokenOption)

        return res.status(200).json({token})
    }
}