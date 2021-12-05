import { randomUUID } from 'crypto'

import {
  CircleApplicationService,
  CircleJoinCommand,
  CircleCreateCommand,
} from '@use-cases/circleUsecase'
import { CircleFactory } from '@factories/circleFactory'
import { CircleRepository } from '@repositories/circleRepository'
import { UserRepository } from '@repositories/userRepository'
import { CircleService } from '@models/circle/circleService'

const main = async (): Promise<void> => {
  const circleFactory = new CircleFactory()
  const circleRepository = new CircleRepository()
  const circleService = new CircleService(circleRepository)
  const userRepository = new UserRepository()

  const circleApplicationService = new CircleApplicationService(
    circleFactory,
    circleRepository,
    circleService,
    userRepository
  )

  const userId = 'my-first-user-' + randomUUID()
  const circleName = 'my-circle-name'

  const circleCreateCommand = new CircleCreateCommand(userId, circleName)

  circleApplicationService.create(circleCreateCommand)

  const circleJoinCommand = new CircleJoinCommand(userId, randomUUID())
  circleApplicationService.join(circleJoinCommand)
}

main()
