import { Circle, CircleId, CircleName } from '@models/circle/circle'

export interface ICircleRepository {
  save(circle: Circle): void
  findById(id: CircleId): Circle | undefined
  findByName(name: CircleName): Circle | undefined
}
