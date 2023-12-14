// infrastructure/repositories/MariadbUserRepository.ts
import { User, UserModel } from "../../domain/models";
import { UserRepository } from "../../domain/repositories/user.repository";
import { UserDataSource } from "../datasources/mariadb/users.datasource";

export class MariadbUserRepository implements UserRepository {
  private dataSource: UserDataSource;

  constructor(dataSource: UserDataSource) {
    this.dataSource = dataSource;
  }

  async getById(id: number): Promise<UserModel | null> {
    // Utiliza el método getUserById de MariadbDataSource
    const result = await this.dataSource.getUserById(id);
    // Mapea el resultado a la entidad User y devuelve
    return result ? new UserModel(result as User) : null;
  }

  async create(user: User): Promise<User> {
    // Utiliza el método createUser de MariadbDataSource
    const result = await this.dataSource.createUser(user);
    // Mapea el resultado a la entidad User y devuelve
    return new UserModel(result as User);
  }

  async update(user: User): Promise<void> {
    // Implementa lógica para actualizar el usuario en la base de datos
  }

  async delete(id: number): Promise<void> {
    // Implementa lógica para eliminar el usuario de la base de datos
  }

  async getAll(): Promise<User[]> {
    // Implementa lógica para obtener todos los usuarios de la base de datos
    return [];
  }
}
