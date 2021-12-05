import { ICircleFactory } from '@factories/circleFactory.interface'
import { Circle, CircleId, CircleName } from '@models/circle/circle'
import { CircleService } from '@models/circle/circleService'
import { UserId } from '@models/user/user'
import { ICircleRepository } from '@repositories/circleRepository.interface'
import { IUserRepository } from '@repositories/userRepository.interface'

export class CircleCreateCommand {
  #userId: string
  #name: string
  constructor(userId: string, name: string) {
    this.#userId = userId
    this.#name = name
  }
  userId() {
    return this.#userId
  }
  name() {
    return this.#name
  }
}

export class CircleJoinCommand {
  #userId: string
  #circleId: string
  constructor(userId: string, circleId: string) {
    this.#userId = userId
    this.#circleId = circleId
  }

  userId() {
    return this.#userId
  }
  circleId() {
    return this.#circleId
  }
}

export class CircleApplicationService {
  #circleFactory: ICircleFactory
  #circleRepository: ICircleRepository
  #circleService: CircleService
  #userRepository: IUserRepository

  constructor(
    circleFactory: ICircleFactory,
    circleRepository: ICircleRepository,
    circleService: CircleService,
    userRepository: IUserRepository
  ) {
    this.#circleFactory = circleFactory
    this.#circleRepository = circleRepository
    this.#circleService = circleService
    this.#userRepository = userRepository
  }

  create(command: CircleCreateCommand) {
    const ownerId = new UserId(command.userId())
    const owner = this.#userRepository.find(ownerId)

    if (owner == null)
      throw Error('サークルのオーナーとなるユーザが見つかりませんでした。')

    const name = new CircleName(command.name())
    const circle = this.#circleFactory.create(name, owner)

    if (this.#circleService.exists(circle))
      throw Error('サークルは既に存在しています。')

    this.#circleRepository.save(circle)
  }

  join(command: CircleJoinCommand) {
    console.log('join method is called')

    const userId = new UserId(command.userId())
    const user = this.#userRepository.find(userId)

    if (user == null) throw Error('指定されたユーザが存在しません')

    const circleId = new CircleId(command.circleId())
    const circle = this.#circleRepository.findById(circleId)

    console.log(circle)

    if (circle == null) throw Error('指定されたサークルが存在しません')

    if (circle.isFull())
      throw Error('サークルのメンバーは30人以内にしてください')

    circle.members.push(user)

    this.#circleRepository.save(circle)
  }

  invite() {}
}
