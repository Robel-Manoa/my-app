import { User } from '../entities/User'

export interface UserRepository {
  findByAzureId(azureId: string): Promise<User | null>
  save(user: User): Promise<User>
  findByEmail(email: string): Promise<User | null>
}
