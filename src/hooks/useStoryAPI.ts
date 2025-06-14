import { getIpAssets } from "@/services/story.service"
import { GetIpAssetsRequestI } from "@/types/story.api"
import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"

export const useGetIpAssets = (options: GetIpAssetsRequestI) => {
  return useQuery({
    queryKey: ["getIpAssets", options],
    queryFn: () => getIpAssets(options),
  })
}
