import { User } from '../user/user'

export class Circle {
  id: CircleId
  name: CircleName
  owner: User
  members: User[]

  constructor(id: CircleId, name: CircleName, owner: User, members: User[]) {
    if (id == null) throw Error()
    if (name == null) throw Error()
    if (owner == null) throw Error()
    if (members == null) throw Error()

    this.id = id
    this.name = name
    this.owner = owner
    this.members = members
  }
  count() {
    // + 1 is the owner self
    return this.members.length + 1
  }
  isFull() {
    return this.count() > 30
  }
}

export class CircleId {
  #value: string
  constructor(value: string) {
    if (value == null) throw Error()
    this.#value = value
  }
  value() {
    return this.#value
  }
}

export class CircleName {
  #value: string
  constructor(value: string) {
    if (value == null) throw Error()
    if (value.length < 3) throw Error('サークル名は3文字以上です。')
    if (value.length > 20) throw Error('サークル名は20文字以下です。')

    this.#value = value
  }
  value() {
    return this.#value
  }

  equals(other: CircleName): boolean {
    if (other == null) {
      return false
    }
    return this.#value == other.value()
  }
}
