"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const index_routes_1 = require("./routes/index.routes");
const envs_1 = require("../config/plugins/envs");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 3000;
        this.port = envs_1.envs.PORT;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            // add middleware
            this.app.use(express_1.default.json());
            this.app.use(express_1.default.urlencoded({ extended: true }));
            // add upload folder
            this.app.use('/uploads', express_1.default.static('uploads'));
            // add cors
            this.app.use((req, res, next) => {
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
                res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
                next();
            });
            // add public folder
            this.app.use(express_1.default.static('public'));
            // add routes
            this.app.use(index_routes_1.Routes.getRoutes());
            // run the server
            this.app.listen(this.port, () => {
                console.log('\x1b[32m%s\x1b[0m', `Server running on port ${this.port}\nhttp://localhost:${this.port}`);
            });
        });
    }
}
exports.Server = Server;
