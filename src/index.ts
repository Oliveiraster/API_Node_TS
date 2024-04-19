import express, {Request, Response } from 'express'
import { router } from './router'

const server = express()

server.use(express.json())
server.use(router)

server.get('/', (req: Request, res: Response) => {
    return res.status(200).json({message: 'JraBank API'})
})



server.listen(5000, () => console.log('Servidor Ativo'))