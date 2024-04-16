import User from '../model/User';

class UserRepository{
    async create(userData){
        try {
            const newUser = await User.create(userData);
            return newUser;
        } catch (error) {
            throw new Error('Erro ao criar usuario: ' + error.message);
        }
    }

    async getAll(){
        try {
            const user = await User.findAll();
            return user;
        } catch (error) {
            throw new Error('Erro ao achar usuarios: ' + error.message);
        }
    }

    async getOne(userId){
        try {
            const user = await User.findById(userId);
            if (!user) 
                throw new Error(`Usuário com id ${userId} não foi encontrado.`);
            return user;
        } catch (error) {
            throw new Error('Id inválido' + error.message);
        }
    }

    async patch(userId, userData){
        try {
            const user = await User.findById(userId);
            if (!user) 
                throw new Error(`Usuário com id ${userId} não foi encontrado.`);
            await user.update(userData);
            return 'Sucesso';
        } catch (error) {
            throw new Error('Erro ao atualizar cadastro: ' + error.message);
        }
    }

    async delete(userId){
        try {
            let user = await this.findById(userId);
        if (!user) 
            throw new Error(`Usuário com id ${userId} não foi encontrado.`)
        await user.destroy();
        return 'Sucesso'
        } catch (error) {
            throw new Error('Erro ao deletar usuario: ' + error.message);
        }
    }
}

export default new UserRepository();