// domain/usecases/CreateUserUseCase.ts
import { User,UserModel } from "../../../domain/models";
import { UserRepository } from "../../../domain/repositories/user.repository"

export class UserUseCase {
  constructor(private userRepository: UserRepository) {}

  async createUser(user: User): Promise<User> {
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
