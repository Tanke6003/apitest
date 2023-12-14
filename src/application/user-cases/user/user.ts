// domain/usecases/CreateUserUseCase.ts
import { User,UserModel } from "../../../domain/models";
import { MariadbUserRepository } from "../../../infrastructure/repositories/user.repository";

export class UserUseCase {
  constructor(private userRepository: MariadbUserRepository) {}

  async createUser(user: User): Promise<User> {
    console.log("use-case")
    // Implementa lógica de validación o de negocio si es necesario
    const createdUser = await this.userRepository.create(user);
    return createdUser;
  }
  async getUserById(id: number): Promise<User | null> {
    // Implementa lógica de validación o de negocio si es necesario
    const user = await this.userRepository.getById(id);
    return user;
  }
}
