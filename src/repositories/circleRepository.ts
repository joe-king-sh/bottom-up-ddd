import { Circle, CircleId, CircleName } from '@models/circle/circle'
import { User, UserId, UserName } from '@models/user/user'
import { ICircleRepository } from '@repositories/circleRepository.interface'

export class CircleRepository implements ICircleRepository {
  #InMemoryCircleArrays: Circle[]
  constructor() {
    this.#InMemoryCircleArrays = []
  }
  save(circle: Circle): void {
    this.#InMemoryCircleArrays.push(circle)
  }
  findById(_: CircleId): Circle | undefined {
    return new Circle(
      new CircleId('id'),
      new CircleName('name'),
      new User(new UserId('user-id'), new UserName('user-name')),
      []
    )
  }
  findByName(_: CircleName): Circle | undefined {
    return undefined
  }
}
