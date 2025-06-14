import { GetIpAssetsRequestI, GetIpAssetsResponseI } from "@/types/story.api"
import { storyApi } from "./api.instance"

export const getIpAssets = async (
  options: GetIpAssetsRequestI
): Promise<GetIpAssetsResponseI> => {
  const response = await storyApi.post(`/assets`, { options })
  return response.data
}
