import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Extrinsic} from "./extrinsic.model"
import {Event} from "./event.model"

@Entity_()
export class Block {
  constructor(props?: Partial<Block>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  number!: bigint | undefined | null

  @Column_("timestamp with time zone", {nullable: true})
  timestamp!: Date | undefined | null

  @Column_("text", {nullable: true})
  parentHash!: string | undefined | null

  @Column_("text", {nullable: true})
  specVersion!: string | undefined | null

  @Column_("text", {nullable: true})
  stateRoot!: string | undefined | null

  @Column_("text", {nullable: true})
  extrinsicRoot!: string | undefined | null

  @OneToMany_(() => Extrinsic, e => e.block)
  extrinsics!: Extrinsic[]

  @OneToMany_(() => Event, e => e.block)
  events!: Event[]
}
