import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {KVData} from "./_kvData"
import {Pool} from "./pool.model"
import {Token} from "./token.model"
import {Extrinsic} from "./extrinsic.model"

@Entity_()
export class DexAction {
  constructor(props?: Partial<DexAction>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Account, {nullable: true})
  account!: Account | undefined | null

  @Column_("text", {nullable: true})
  type!: string | undefined | null

  @Column_("text", {nullable: true})
  subType!: string | undefined | null

  @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val == null ? undefined : val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => val == null ? undefined : new KVData(undefined, val))}, nullable: true})
  data!: (KVData | undefined | null)[] | undefined | null

  @Index_()
  @ManyToOne_(() => Pool, {nullable: true})
  pool!: Pool | undefined | null

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

  @Column_("integer", {nullable: true})
  token0Decimal!: number | undefined | null

  @Column_("integer", {nullable: true})
  token1Decimal!: number | undefined | null

  @Column_("text", {nullable: true})
  volumeUSD!: string | undefined | null

  @Column_("text", {nullable: true})
  token0Price!: string | undefined | null

  @Column_("text", {nullable: true})
  token1Price!: string | undefined | null

  @Column_("text", {nullable: true})
  volume0USD!: string | undefined | null

  @Column_("text", {nullable: true})
  volume1USD!: string | undefined | null

  @Column_("integer", {nullable: true})
  pathLength!: number | undefined | null

  @Index_()
  @ManyToOne_(() => Extrinsic, {nullable: true})
  extrinsic!: Extrinsic | undefined | null

  @Column_("timestamp with time zone", {nullable: true})
  timestamp!: Date | undefined | null
}
