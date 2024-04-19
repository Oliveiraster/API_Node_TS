export interface User{
    name: string
    email: string
}
const db= [
   {    
    name:'Raphael',
    email: 'raphael@email.com'
   }
]


export class UserService {

    db: User []
    constructor(
        database = db 
    ){
        this.db = database
    }
        createUser = (name:string, email:string) => {
            const user = {
                name,
                email
            }
            console.log(user)

            this.db.push(user)
            console.log('DB atualizado', this.db)
        }
        getAllUsers = () => {
            return this.db
        }
}