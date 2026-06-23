import { AzureUserInfo } from '../value-objects/AzureUserInfo'

export interface AuthProvider {
  validateAzureToken(token: string): Promise<boolean>
  getUserInfoFromAzure(token: string): Promise<AzureUserInfo>
}
