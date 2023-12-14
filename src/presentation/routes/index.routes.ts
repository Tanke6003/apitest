import { Router } from 'express';
import { ProductsRoutes } from './products.routes';
import { UserRouter } from './user.routes';
import { UserController } from '../controllers/user.controller';
import { UserUseCase } from '../../application/user-cases/user/user';
import { MariadbUserRepository } from '../../infrastructure/repositories/user.repository';
import { UserDataSource } from '../../infrastructure/datasources/mariadb/users.datasource';

export class Routes {
  public router: Router = Router();

  constructor() {}

  static getRoutes(): Router {
    const router = Router();

    router.use('/users', UserRouter.getRouter());
    router.use('/products',ProductsRoutes.getRoutes())
    return router;
  }
}
