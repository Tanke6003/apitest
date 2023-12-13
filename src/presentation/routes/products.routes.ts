//generate a class to handle the routes
import { Router } from 'express';

export class ProductsRoutes {
    public router: Router = Router();

    constructor() {
    }

    static getRoutes(): Router {
        const router = Router();
        //GET PRODUCTS WITH PATH /products
        router.get('/getallproducts', (req, res) => {
            res.send('GET PRODUCTS');
        });
        return router;
    }
}