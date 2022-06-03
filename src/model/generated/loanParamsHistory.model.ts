import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Token} from "./token.model"
import {Block} from "./block.model"

@Entity_()
export class LoanParamsHistory {
  constructor(props?: Partial<LoanParamsHistory>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  collateral!: Token | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  startAtBlockNumber!: bigint | undefined | null

  @Index_()
  @ManyToOne_(() => Block, {nullable: true})
  startAtBlock!: Block | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  endAtBlockNumber!: bigint | undefined | null

  @Index_()
  @ManyToOne_(() => Block, {nullable: true})
  endAtBlock!: Block | undefined | null

  @Column_("text", {nullable: true})
  maximumTotalDebitValue!: string | undefined | null

  @Column_("text", {nullable: true})
  interestRatePerSec!: string | undefined | null

  @Column_("text", {nullable: true})
  liquidationRatio!: string | undefined | null

  @Column_("text", {nullable: true})
  liquidationPenalty!: string | undefined | null

  @Column_("text", {nullable: true})
  requiredCollateralRatio!: string | undefined | null

  @Column_("text", {nullable: true})
  globalInterestRatePerSec!: string | undefined | null
}
