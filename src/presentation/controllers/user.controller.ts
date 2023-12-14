// controllers/UserController.ts
import { Request, Response } from 'express';
import { UserUseCase } from '../../application/user-cases/user/user';
import { User, UserModel } from '../../domain/models';

export class UserController {
  constructor(private UserUseCase: UserUseCase) {

  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      // Extrae datos del cuerpo de la solicitud
      const userReq:User = req.body;
      console.log(userReq)
      // Crea una instancia de la entidad User
      const user = new UserModel(userReq);
      console.log(user)
      // Utiliza el caso de uso para crear al usuario
      const createdUser = await this.UserUseCase.createUser(user);

      // Responde con el usuario creado
      res.status(201).json(createdUser);
    } catch (error) {
      // Manejo de errores
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
