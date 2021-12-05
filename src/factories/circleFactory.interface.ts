import { CircleName, Circle } from '@models/circle/circle'
import { User } from '@models/user/user'

export interface ICircleFactory {
  create(name: CircleName, owner: User): Circle
}
