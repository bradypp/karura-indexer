import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Account} from "./account.model"
import {Token} from "./token.model"

@Entity_()
export class Transfer {
  constructor(props?: Partial<Transfer>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Account, {nullable: true})
  from!: Account | undefined | null

  @Index_()
  @ManyToOne_(() => Account, {nullable: true})
  to!: Account | undefined | null

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  token!: Token | undefined | null

  @Column_("text", {nullable: true})
  amount!: string | undefined | null

  @Column_("text", {nullable: true})
  amountInUSD!: string | undefined | null

  @Column_("timestamp with time zone", {nullable: true})
  timestamp!: Date | undefined | null

  @Column_("bool", {nullable: true})
  isSuccess!: boolean | undefined | null
}
