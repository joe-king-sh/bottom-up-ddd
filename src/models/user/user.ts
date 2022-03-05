export class User {
  id: UserId
  name: UserName

  constructor(id: UserId, name: UserName) {
    this.isValid(id, name)

    this.id = id
    this.name = name
  }

  isValid(id: UserId, name: UserName) {
    if (id == null) throw Error()
    if (name == null) throw Error()
  }
}

export class UserId {
  readonly #value: string
  constructor(value: string) {
    if (value == null) throw Error()
    this.#value = value
  }
  value() {
    return this.#value
  }
}

export class UserName {
  #value: string
  constructor(value: string) {
    if (value == null) throw Error()
    if (value.length < 3) throw Error('ユーザ名は3文字以上です。')

    this.#value = value
  }
  value() {
    return this.#value
  }

  equals(other: UserName): boolean {
    if (other == null) {
      return false
    }
    return this.#value == other.value()
  }
}
