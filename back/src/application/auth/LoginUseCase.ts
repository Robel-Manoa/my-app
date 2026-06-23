import { UserRepository } from '../../domain/ports/UserRepository'
import { AuthProvider } from '../../domain/ports/AuthProvider'
import { User } from '../../domain/entities/User'
import { InvalidCredentialsError } from '../../domain/exceptions/InvalidCredentialsError'

export class LoginUseCase {
  constructor(
    private userRepository: UserRepository,
    private authProvider: AuthProvider,
  ) {}

  async execute(token: string) {
    const isValid = await this.authProvider.validateAzureToken(token)
    if (!isValid) {
      throw new InvalidCredentialsError()
    }

    const azureUser = await this.authProvider.getUserInfoFromAzure(token)
    const existingUser = await this.userRepository.findByAzureId(azureUser.azureId)

    if (existingUser) {
      if (!existingUser.isActive) {
        throw new Error('Account is deactivated')
      }
      return {
        user: existingUser,
        token: `jwt-${existingUser.id}`,
      }
    }

    const newUser = new User({
      id: `user-${Date.now()}`,
      azureId: azureUser.azureId,
      email: azureUser.email,
      firstName: azureUser.firstName,
      lastName: azureUser.lastName,
      role: 'EMPLOYEE',
      isActive: true,
    })

    await this.userRepository.save(newUser)

    return {
      user: newUser,
      token: `jwt-${newUser.id}`,
    }
  }
}
