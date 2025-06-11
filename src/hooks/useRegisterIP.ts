import { toHex } from "viem"
import { useStoryClient } from "./useStoryClient"

export const useRegisterIP = () => {
  const { storyClient } = useStoryClient()
  async function registerIp() {
    const client = await storyClient()
    const response = await client.ipAsset.mintAndRegisterIp({
      spgNftContract: "0xc32A8a0FF3beDDDa58393d022aF433e78739FAbc",
      ipMetadata: {
        ipMetadataURI: "test-metadata-uri",
        ipMetadataHash: toHex("test-metadata-hash", { size: 32 }),
        nftMetadataURI: "test-nft-metadata-uri",
        nftMetadataHash: toHex("test-nft-metadata-hash", { size: 32 }),
      },
    })
    console.log(
      `Root IPA created at tx hash ${response.txHash}, IPA ID: ${response.ipId}`
    )
  }
  return { registerIp }
}
