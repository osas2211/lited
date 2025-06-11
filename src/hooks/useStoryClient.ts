import { custom, toHex } from "viem"
import { useWalletClient } from "wagmi"
import { StoryClient, StoryConfig } from "@story-protocol/core-sdk"

export const useStoryClient = () => {
  const { data: wallet } = useWalletClient()

  async function storyClient(): Promise<StoryClient> {
    const config: StoryConfig = {
      wallet: wallet,
      transport: custom(wallet!.transport),
      chainId: "aeneid",
    }
    const client = StoryClient.newClient(config)
    return client
  }

  return { storyClient }
}
