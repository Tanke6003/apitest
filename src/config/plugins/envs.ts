
import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    MARIADB_HOST: env.get('MARIADB_HOST').required().asString(),
    MARIADB_PORT: env.get('MARIADB_PORT').required().asPortNumber(),
    MARIADB_USERNAME: env.get('MARIADB_USERNAME').required().asString(),
    MARIADB_PASSWORD: env.get('MARIADB_PASSWORD').required().asString(),
    MARIADB_DATABASE: env.get('MARIADB_DATABASE').required().asString(),
}