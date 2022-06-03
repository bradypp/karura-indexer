import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {KVData} from "./_kvData"
import {Account} from "./account.model"
import {Extrinsic} from "./extrinsic.model"

@Entity_()
export class Call {
  constructor(props?: Partial<Call>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: true})
  section!: string | undefined | null

  @Column_("text", {nullable: true})
  method!: string | undefined | null

  @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val == null ? undefined : val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => val == null ? undefined : new KVData(undefined, val))}, nullable: true})
  args!: (KVData | undefined | null)[] | undefined | null

  @Column_("timestamp with time zone", {nullable: true})
  timestamp!: Date | undefined | null

  @Column_("bool", {nullable: true})
  isSuccess!: boolean | undefined | null

  @Index_()
  @ManyToOne_(() => Account, {nullable: true})
  signer!: Account | undefined | null

  @Index_()
  @ManyToOne_(() => Extrinsic, {nullable: true})
  extrinsic!: Extrinsic | undefined | null

  @Index_()
  @ManyToOne_(() => Call, {nullable: true})
  parentCall!: Call | undefined | null

  @OneToMany_(() => Call, e => e.parentCall)
  calls!: Call[]
}
