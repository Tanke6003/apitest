import { connect } from "http2";
import { MariaDB } from "../../../config/plugins/mariadb";
import { UserDatasource } from "../../../domain/datasource/User.datasource";


export class UserDataSource implements UserDatasource{

    private static connection: MariaDB = MariaDB.getInstance();

    constructor() {}

    async getUserById(id: number): Promise<any> {
        return null;
    }
    async createUser(user: any): Promise<any> {
        try {
            return await  UserDataSource.connection.executeProcedure('up_AddUser', user.name, user.email, user.password);
        } catch (error) {
            throw new Error(`Error creating user: ${error}`);
        }
    }
    async updateUser(user: any): Promise<any> {
        return null;
    }
    async deleteUser(id: number): Promise<any> {
        return null;
    }
    async getUsers(): Promise<any[]> {
        return [];
    }

}