import express from 'express';
import UserController from '../controller/UserController';

const router = express.Router();

/**
 * @swagger
    localhost:3333/users:
 *   get:
 *     summary: Retorna todos os usuários
 *     description: Retorna uma lista de todos os usuários cadastrados no sistema
 *     responses:
 *       200:
 *         description: Lista de usuários
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/users', UserController.allUser);

/**
 * @swagger
   localhost/newuser:
 *   post:
 *     summary: Cria um novo usuário
 *     description: Cria um novo usuário com os dados fornecidos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: Usuário criado com sucesso
 *       '400':
 *         description: Requisição inválida, verifique os dados fornecidos
 *       '500':
 *         description: Erro interno do servidor
 */
router.post('/newuser', UserController.newUser);

/**
 * @swagger
   /user/{id}:
 *   get:
 *     summary: Retorna um usuário específico
 *     description: Retorna os detalhes de um usuário específico com base no ID fornecido
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalhes do usuário
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/user/:id', UserController.showUserById);

/**
 * @swagger
    localhost:3333/updateuser/{id}:
 *   put:
 *     summary: Atualiza um usuário existente
 *     description: Atualiza as informações de um usuário existente com base no ID fornecido
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser atualizado
 *         schema:
 *           type: string
 *       - in: body
 *         name: user
 *         description: Dados do usuário a serem atualizados
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: Novo nome do usuário
 *             email:
 *               type: string
 *               description: Novo email do usuário
 *             password:
 *               type: string
 *               description: Nova senha do usuário
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       400:
 *         description: Requisição inválida
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/updateuser/:id', UserController.updateUser);

/**
 * @swagger
    localhost:3333/deleteuser/{id}:
 *   delete:
 *     summary: deleta tudo dde um usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Deleção de Usuario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucess
 *       404:
 *         description: Usuário não encontrado
 */
router.delete('/deleteuser/:id', UserController.deleteUser);

export default router;