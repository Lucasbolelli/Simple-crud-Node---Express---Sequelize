import {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import UserRepository from '../repository/UserRepository';


class UserController{
    async newUser(req: Request, res:Response){
        console.log(req.body);
        
        try {
            const {name, email, password} = req.body; 
            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = await UserRepository.create({ name: name, email: email, password_hash: hashedPassword });
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }


    async allUser(req: Request, res: Response){
    try {
        const users = await UserRepository.getAll();
        return res.json(users);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async showUserById(req: Request, res: Response){
            try {
                const {id} = req.params;
                const user = await UserRepository.getOne(id);
                if(!user)
                    return res.status(404).json({ error: 'Usuario não encontrado' }); 
                return res.json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async updateUser(req: Request, res: Response){
            try {
                const {id} = req.params;
                const { name, email, password } = req.body;
                const hashedPassword = await bcrypt.hash(password, 10);
                const user = await UserRepository.getOne(id);
                if(!user)
                    return res.status(404).json({ error: 'Usuario não encontrado' });
                let data = {
                name:  name,
                user:  email,
                password: hashedPassword
                }
                await UserRepository.patch(id, data)
                return 'Sucess'
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async deleteUser(req: Request, res: Response){
        try {
            const { id } = req.params;
            const user = await UserRepository.getOne(id);
            if (!user) 
                return res.status(404).json({ error: 'Usuario não encontrado' });
            await UserRepository.delete(id);
            return res.status(204).end();
          } catch (error) {
            return res.status(500).json({ error: error.message });
          }
    }
}

export default new UserController();
