import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {ProvisionPool} from "./provisionPool.model"
import {Token} from "./token.model"

@Entity_()
export class UserProvision {
  constructor(props?: Partial<UserProvision>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => ProvisionPool, {nullable: true})
  pool!: ProvisionPool | undefined | null

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
}
