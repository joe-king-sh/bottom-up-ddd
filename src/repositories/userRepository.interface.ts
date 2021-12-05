import { User, UserId, UserName } from '@models/user/user'

export interface IUserRepository {
  save(user: User): void
  find(id: UserId): User
}
