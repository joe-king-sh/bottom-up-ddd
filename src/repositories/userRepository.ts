import { User, UserId, UserName } from '@models/user/user'
import { randomUUID } from 'crypto'
import { IUserRepository } from '@repositories/userRepository.interface'

export class UserRepository implements IUserRepository {
  #InMemoryUserArrays: User[]
  constructor() {
    this.#InMemoryUserArrays = []

    for (let i = 0; i < 3; i++) {
      this.#InMemoryUserArrays.push(
        new User(new UserId(randomUUID()), new UserName('user-' + i))
      )
    }
  }

  save(user: User): void {
    this.#InMemoryUserArrays.push(user)
  }
  find(id: UserId): User {
    return this.#InMemoryUserArrays[1]
  }
}
