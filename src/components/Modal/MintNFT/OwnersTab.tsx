import React from "react"
import { Avatar, Typography } from "@/components"
import { IpAssetI } from "@/types/story.api"
import { useGetNFTInstance } from "@/hooks/useStoryAPI"
import { spg_contract } from "@/constants/contract_addresses"
import { truncateString } from "@/utils/truncateString"

export const OwnersTab = ({ nft }: { nft: IpAssetI }) => {
  const { Subtitle3Medium, Caption1Regular, Caption1Bold } = Typography
  const { data: nftInstance, isLoading } = useGetNFTInstance({
    id: nft?.nftMetadata?.tokenId || "",
    tokenContractId: spg_contract.address || "",
  })
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="inline-flex justify-between rounded-[8px] px-[16px] py-[12px] bg-grey-800 w-full">
        <div className="inline-flex gap-[12px] text-grey-200">
          <Avatar src="/nft.png" size="small" />
          <Caption1Bold className="capitalize">
            {truncateString(nftInstance?.owner?.hash || "", 10)}
          </Caption1Bold>
        </div>
        <Caption1Regular>Edition 1</Caption1Regular>
      </div>
    </div>
  )
}
