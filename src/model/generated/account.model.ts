import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Block} from "./block.model"
import {Extrinsic} from "./extrinsic.model"
import {Call} from "./call.model"
import {Transfer} from "./transfer.model"
import {LoanPosition} from "./loanPosition.model"

@Entity_()
export class Account {
  constructor(props?: Partial<Account>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  txCount!: bigint | undefined | null

  @Index_()
  @ManyToOne_(() => Block, {nullable: true})
  createAtBlock!: Block | undefined | null

  @OneToMany_(() => Extrinsic, e => e.signer)
  extrinsics!: Extrinsic[]

  @OneToMany_(() => Call, e => e.signer)
  calls!: Call[]

  @OneToMany_(() => Transfer, e => e.to)
  transferIn!: Transfer[]

  @OneToMany_(() => Transfer, e => e.from)
  transferOut!: Transfer[]

  @OneToMany_(() => LoanPosition, e => e.owner)
  position!: LoanPosition[]
}
