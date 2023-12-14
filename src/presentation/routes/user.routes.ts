// Path: src/presentation/routes/user.routes.ts
import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

export class UserRouter {
  private router: Router = Router();
  private userController: UserController;

  constructor(userController: UserController) {
    this.userController = userController;
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/createuser', this.userController.createUser);
    //test route
    this.router.get('/test', (req, res) => {
      res.send('GET PRODUCTS');
    });
  }


  public getRouter(): Router {
    return this.router;
  }
}
