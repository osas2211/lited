import { spg_contract } from "@/constants/contract_addresses"
import { useStoryClient } from "./useStoryClient"
import { IpMetadata } from "@story-protocol/core-sdk"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

export const useMintAndRegisterIp = () => {
  const { storyClient } = useStoryClient()

  const mutationFn = async ({ ipMetadata }: { ipMetadata?: any }) => {
    const client = await storyClient()
    await client.ipAsset.mintAndRegisterIp({
      spgNftContract: spg_contract.address,
      ipMetadata,
    })
  }

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      toast.success("Ip Asset minted and registered successfully")
    },
    onError: () => {
      toast.error("Failed to register Ip")
    },
  })
}
