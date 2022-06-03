import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Token} from "./token.model"

@Entity_()
export class BalanceChangedRecord {
  constructor(props?: Partial<BalanceChangedRecord>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Account, {nullable: true})
  account!: Account | undefined | null

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  token!: Token | undefined | null

  @Column_("text", {nullable: true})
  collateral!: string | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  blockNumber!: bigint | undefined | null

  @Column_("text", {nullable: true})
  total!: string | undefined | null

  @Column_("timestamp with time zone", {nullable: true})
  timestamp!: Date | undefined | null

  @Column_("text", {nullable: true})
  balance!: string | undefined | null

  @Column_("text", {nullable: true})
  incentive!: string | undefined | null
}
