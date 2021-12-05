import { CircleName, Circle, CircleId } from '@models/circle/circle'
import { User } from '@models/user/user'
import { randomUUID } from 'crypto'
import { ICircleFactory } from '@factories/circleFactory.interface'

export class CircleFactory implements ICircleFactory {
  create(name: CircleName, owner: User): Circle {
    const circleId = new CircleId(randomUUID())
    return new Circle(circleId, name, owner, [])
  }
}
