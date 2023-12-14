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
    const userDataSource = new UserDataSource();
    const userRepository = new MariadbUserRepository(userDataSource); 
    const userUseCase = new UserUseCase(userRepository);
    const userController = new UserController(userUseCase);
    const userRouter = new UserRouter(userController);


    router.use('/users', userRouter.getRouter());
    
    return router;
  }
}
