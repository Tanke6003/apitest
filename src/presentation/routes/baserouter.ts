// routes/BaseRouter.ts

import { Router } from 'express';

export abstract class BaseRouter {
  protected router: Router = Router();

  abstract configureRoutes(): void;

  getRouter(): Router {
    this.configureRoutes();
    return this.router;
  }
}