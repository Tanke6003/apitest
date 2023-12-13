import express from 'express';
import { Routes } from './routes/index.routes';
import { envs } from '../config/plugins/envs';
export class Server {

    private app: express.Application = express();
    private readonly port: number = 3000;

    constructor() {
        this.port = envs.PORT;
    }

    public async run(): Promise<void> {
        // add middleware
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        // add upload folder
        this.app.use('/uploads', express.static('uploads'));

        // add cors
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
            next();
        });

        // add public folder
        this.app.use(express.static('public'));
        // add routes
        this.app.use(Routes.getRoutes());        
        // run the server
        this.app.listen(this.port, () => {
            console.log('\x1b[32m%s\x1b[0m', `Server running on port ${this.port}\nhttp://localhost:${this.port}`);
        });
    }

}