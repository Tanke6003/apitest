import { Server } from "./presentation/server";
import 'dotenv/config';

const main  = async () => {
    const server = new Server();
    await server.run();
}

(async () => {
    await main()
    }
)();