import { User } from "../models/user.model";

export abstract class UserDatasource {
    abstract getUserById(id: number): Promise<User>;
    abstract createUser(user: User): Promise<User>;
    abstract updateUser(user: User): Promise<User>;
    abstract deleteUser(id: number): Promise<User>;
    abstract getUsers(): Promise<User[]>;
}