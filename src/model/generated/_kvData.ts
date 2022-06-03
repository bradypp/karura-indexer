import assert from "assert"
import * as marshal from "./marshal"

export class KVData {
  private _key!: string | undefined | null
  private _value!: string | undefined | null
  private _type!: string | undefined | null

  constructor(props?: Partial<Omit<KVData, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._key = json.key == null ? undefined : marshal.string.fromJSON(json.key)
      this._value = json.value == null ? undefined : marshal.string.fromJSON(json.value)
      this._type = json.type == null ? undefined : marshal.string.fromJSON(json.type)
    }
  }

  get key(): string | undefined | null {
    return this._key
  }

  set key(value: string | undefined | null) {
    this._key = value
  }

  get value(): string | undefined | null {
    return this._value
  }

  set value(value: string | undefined | null) {
    this._value = value
  }

  get type(): string | undefined | null {
    return this._type
  }

  set type(value: string | undefined | null) {
    this._type = value
  }

  toJSON(): object {
    return {
      key: this.key,
      value: this.value,
      type: this.type,
    }
  }
}
