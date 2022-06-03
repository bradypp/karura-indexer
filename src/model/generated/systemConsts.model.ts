import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Token} from "./token.model"

@Entity_()
export class SystemConsts {
  constructor(props?: Partial<SystemConsts>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  liquidToken!: Token | undefined | null

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  stakignToken!: Token | undefined | null

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  nativeToken!: Token | undefined | null

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  stableToken!: Token | undefined | null
}
