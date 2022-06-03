import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Token} from "./token.model"

@Entity_()
export class TotalLoanPosition {
  constructor(props?: Partial<TotalLoanPosition>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  collateral!: Token | undefined | null

  @Column_("text", {nullable: true})
  debitAmount!: string | undefined | null

  @Column_("text", {nullable: true})
  collateralAmount!: string | undefined | null
}
