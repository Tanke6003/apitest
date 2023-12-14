// routes/UserRouter.ts

import { Router } from 'express';
import { BaseRouter } from './baserouter';
import { UserController } from './../controllers/user.controller'
import { UserUseCase } from './../../application/user-cases/user/user'

export class UserRouter extends BaseRouter {
  constructor(private userUseCase: UserUseCase) {
    super();
  }

  configureRoutes(): void {
    const userController = new UserController(this.userUseCase);
    this.router.post('/createuser', userController.createUser);
    // Agregar otras rutas según sea necesario para usuarios
  }
}
