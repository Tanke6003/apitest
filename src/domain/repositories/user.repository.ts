// domain/repositories/UserRepository.ts
import { User } from "../models";

export interface UserRepository {
  getById(id: number): Promise<User | null>;
  create(user: User): Promise<User>;
  update(user: User): Promise<void>;
  delete(id: number): Promise<void>;
  getAll(): Promise<User[]>;
}
