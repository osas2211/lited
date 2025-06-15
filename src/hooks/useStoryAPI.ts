import {
  getIpAssets,
  getNFTInstance,
  getNFTInstances,
} from "@/services/story.service"
import { GetIpAssetsRequestI, GetNFTInstancesRequestI } from "@/types/story.api"
import { useQuery } from "@tanstack/react-query"

export const useGetIpAssets = (options: GetIpAssetsRequestI) => {
  return useQuery({
    queryKey: ["getIpAssets", options],
    queryFn: () => getIpAssets(options),
  })
}

export const useGetNFTInstances = (options: GetNFTInstancesRequestI) => {
  return useQuery({
    queryKey: ["getNFTInstances", options],
    queryFn: () => getNFTInstances(options),
  })
}

export const useGetNFTInstance = (options: {
  id: string
  tokenContractId: string
  holder_address_hash?: string
}) => {
  return useQuery({
    queryKey: ["getNFTInstances", options],
    queryFn: () => getNFTInstance(options),
  })
}
