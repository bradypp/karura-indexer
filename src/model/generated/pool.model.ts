import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Token} from "./token.model"
import {PoolHourData} from "./poolHourData.model"
import {PoolDayData} from "./poolDayData.model"
import {DexAction} from "./dexAction.model"

@Entity_()
export class Pool {
  constructor(props?: Partial<Pool>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

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
  fee!: string | undefined | null

  @Column_("text", {nullable: true})
  token0Volume!: string | undefined | null

  @Column_("text", {nullable: true})
  token1Volume!: string | undefined | null

  @Column_("text", {nullable: true})
  volumeUSD!: string | undefined | null

  @Column_("text", {nullable: true})
  token0TVL!: string | undefined | null

  @Column_("text", {nullable: true})
  token1TVL!: string | undefined | null

  @Column_("text", {nullable: true})
  tvlUSD!: string | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  txCount!: bigint | undefined | null

  @OneToMany_(() => PoolHourData, e => e.pool)
  hourData!: PoolHourData[]

  @OneToMany_(() => PoolDayData, e => e.pool)
  dayData!: PoolDayData[]

  @OneToMany_(() => DexAction, e => e.pool)
  actions!: DexAction[]
}
