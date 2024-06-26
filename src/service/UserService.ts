import { sign } from "jsonwebtoken"
import { AppDataSource } from "../database"
import { User } from "../entities/User"
import { UserRepository } from "../repositories/UserRepository"

export class UserService {
    private userRepository:UserRepository

    constructor(userRepository =  new UserRepository(AppDataSource.manager)){
        this.userRepository = userRepository
    }

    createUser = async (name:string, email:string, password:string):Promise<User> => {
      

         const user = new User(name, email, password)
         return  await this.userRepository. createUser(user)
    }

    getUser = (userId:string): Promise<User | null> => {
       return this.userRepository.getUser(userId)  
    }

    getAuthUser = (email:string, password:string):Promise<User|null> =>{
        return this.userRepository.getUserByEmailAndPassword(email, password)
    }

    getToken = async (email:string, password:string):Promise<string> =>{

        
        const user = await this.getAuthUser(email, password)
        if(!user){
            throw new Error('Usiario nao encontrado')
        }
        const tokenData = {
            name: user?.name,
            email: user?.email
        }

        const tokenKey = '123456789'

        const tokenOptions = {
            subject: user?.id_user
        }

        const token = sign(tokenData, tokenKey, tokenOptions)

        return token
    }
}