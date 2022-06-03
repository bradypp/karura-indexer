import { lookupArchive } from "@subsquid/archive-registry"
import { SubstrateProcessor } from "@subsquid/substrate-processor"

const processor = new SubstrateProcessor("karura_indexer")

processor.setBatchSize(500)
processor.setDataSource({
  archive: lookupArchive("karura")[0].url,
  chain: "wss://karura-rpc-0.aca-api.network",
})
processor.setTypesBundle("karura")
processor.setBlockRange({ from: 1600000 })
processor.run()
