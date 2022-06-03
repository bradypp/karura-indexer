import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class DexDayData {
  constructor(props?: Partial<DexDayData>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("integer", {nullable: true})
  poolCount!: number | undefined | null

  @Column_("timestamp with time zone", {nullable: true})
  date!: Date | undefined | null

  @Column_("text", {nullable: true})
  dailyVolumeUSD!: string | undefined | null

  @Column_("text", {nullable: true})
  totalVolumeUSD!: string | undefined | null

  @Column_("text", {nullable: true})
  totalTVLUSD!: string | undefined | null
}
