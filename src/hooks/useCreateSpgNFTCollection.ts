import { zeroAddress } from "viem"
import { useStoryClient } from "./useStoryClient"

export const useCreateSpgNFTCollection = () => {
  const { storyClient } = useStoryClient()
  async function createSpgNftCollection() {
    const client = await storyClient()
    const newCollection = await client.nftClient.createNFTCollection({
      name: "LiTED NFTs",
      symbol: "LiTED",
      isPublicMinting: true,
      mintOpen: true,
      mintFeeRecipient: zeroAddress,
      contractURI: "",
    })

    console.log("New collection created:", {
      "SPG NFT Contract Address": newCollection.spgNftContract,
      "Transaction Hash": newCollection.txHash,
    })
  }

  return { createSpgNftCollection }
}
