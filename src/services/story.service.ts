import {
  GetIpAssetsRequestI,
  GetIpAssetsResponseI,
  GetNFTInstancesRequestI,
  GetNFTInstancesResponseI,
} from "@/types/story.api"
import { storyApi, storyScanApi } from "./api.instance"

export const getIpAssets = async (
  options: GetIpAssetsRequestI
): Promise<GetIpAssetsResponseI> => {
  const response = await storyApi.post(`/assets`, { options })
  return response.data
}

export const getNFTInstances = async (
  options: GetNFTInstancesRequestI
): Promise<GetNFTInstancesResponseI> => {
  const response = await storyScanApi.get(
    `/tokens/${options.tokenContractId}/instances`,
    {
      params: { holder_address_hash: options.holder_address_hash },
    }
  )
  return response.data
}
