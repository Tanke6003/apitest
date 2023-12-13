import { Server } from "./presentation/server";


const main  = async () => {
    const server = new Server();
    await server.run();
}

(async () => {
    await main()
    }
)();