import { ICircleRepository } from '@repositories/circleRepository.interface'
import { Circle } from './circle'

export class CircleService {
  #circleRepository: ICircleRepository
  constructor(circleRepository: ICircleRepository) {
    this.#circleRepository = circleRepository
  }

  exists(circle: Circle) {
    const duplicated = this.#circleRepository.findByName(circle.name)
    return duplicated != null
  }
}
