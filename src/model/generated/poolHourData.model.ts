import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Pool} from "./pool.model"
import {Token} from "./token.model"

@Entity_()
export class PoolHourData {
  constructor(props?: Partial<PoolHourData>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Pool, {nullable: true})
  pool!: Pool | undefined | null

  @Column_("timestamp with time zone", {nullable: true})
  date!: Date | undefined | null

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  token0!: Token | undefined | null

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  token1!: Token | undefined | null

  @Column_("text", {nullable: true})
  token0Amount!: string | undefined | null

  @Column_("text", {nullable: true})
  token1Amount!: string | undefined | null

  @Column_("text", {nullable: true})
  exchange0!: string | undefined | null

  @Column_("text", {nullable: true})
  exchange1!: string | undefined | null

  @Column_("text", {nullable: true})
  volumeToken0!: string | undefined | null

  @Column_("text", {nullable: true})
  volumeToken1!: string | undefined | null

  @Column_("text", {nullable: true})
  volumeUSD!: string | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  txCount!: bigint | undefined | null

  @Column_("text", {nullable: true})
  tvlUSD!: string | undefined | null

  @Column_("text", {nullable: true})
  token0Open!: string | undefined | null

  @Column_("text", {nullable: true})
  token0High!: string | undefined | null

  @Column_("text", {nullable: true})
  token0Low!: string | undefined | null

  @Column_("text", {nullable: true})
  token0Close!: string | undefined | null
}
