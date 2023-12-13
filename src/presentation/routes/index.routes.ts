import { Router } from 'express';
import { ProductsRoutes } from './products.routes';

export class Routes{
    public router: Router = Router();

    constructor(){}

    static getRoutes(): Router{
        const router = Router();
        router.use('/products',ProductsRoutes.getRoutes());
        return router;
    }
}