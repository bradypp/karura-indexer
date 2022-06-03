import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {TokenDayData} from "./tokenDayData.model"
import {PoolDayData} from "./poolDayData.model"
import {Pool} from "./pool.model"

@Entity_()
export class Token {
  constructor(props?: Partial<Token>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: true})
  name!: string | undefined | null

  @Column_("integer", {nullable: true})
  decimal!: number | undefined | null

  @Column_("text", {nullable: true})
  price!: string | undefined | null

  @Column_("text", {nullable: true})
  issuance!: string | undefined | null

  @Column_("text", {nullable: true})
  lockedInLoan!: string | undefined | null

  @Column_("text", {nullable: true})
  lockedInDex!: string | undefined | null

  @Column_("text", {nullable: true})
  lockedInIncentive!: string | undefined | null

  @Column_("text", {nullable: true})
  volume!: string | undefined | null

  @Column_("text", {nullable: true})
  volumeUSD!: string | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  txCount!: bigint | undefined | null

  @OneToMany_(() => TokenDayData, e => e.token)
  dayData!: TokenDayData[]

  @OneToMany_(() => PoolDayData, e => e.token0)
  poolDayDataBase!: PoolDayData[]

  @OneToMany_(() => PoolDayData, e => e.token1)
  poolDayDataQuote!: PoolDayData[]

  @OneToMany_(() => Pool, e => e.token0)
  poolBase!: Pool[]

  @OneToMany_(() => Pool, e => e.token1)
  poolQuote!: Pool[]
}
