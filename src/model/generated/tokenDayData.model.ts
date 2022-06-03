import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Token} from "./token.model"

@Entity_()
export class TokenDayData {
  constructor(props?: Partial<TokenDayData>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("timestamp with time zone", {nullable: true})
  date!: Date | undefined | null

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  token!: Token | undefined | null

  @Column_("text", {nullable: true})
  price!: string | undefined | null

  @Column_("text", {nullable: true})
  dailyVolumeToken!: string | undefined | null

  @Column_("text", {nullable: true})
  dailyVolumeUSD!: string | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  dailyTxCount!: bigint | undefined | null
}
