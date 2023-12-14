import 'dotenv/config';
import { Server } from './presentation/server';
import { MariadbUserRepository } from './infrastructure/repositories/user.repository'
import { UserUseCase } from './application/user-cases/user/user';

import { UserRouter } from './presentation/routes/user.routes';
import { Router } from 'express';

const userRepository = new MariadbUserRepository();
const userUseCase = new UserUseCase(userRepository);
const userRouter = new UserRouter(userUseCase);
const routes:Router[] = [userRouter]; 
const main  = async () => {
    const server = new Server(routes);
    await server.run();
}

(async () => {
    await main()
    }
)();