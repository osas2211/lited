import { Avatar, Button, Tab, Typography } from "@/components"
import React from "react"
import { InfoTab } from "./InfoTab"
import { TrackTab } from "./trackTab"
import { BidsTab } from "./BidsTab"
import { OwnersTab } from "./OwnersTab"
import { MoreIcon } from "@/components/Icons"
import { Actions } from "./Actions"
import { IpAssetI } from "@/types/story.api"
import { truncateString } from "@/utils/truncateString"
import { useGetNFTInstance } from "@/hooks/useStoryAPI"
import { spg_contract } from "@/constants/contract_addresses"
import { Skeleton } from "@mui/joy"
import Link from "next/link"

export const Details = ({ nft }: { nft: IpAssetI }) => {
  const { Subtitle2Medium, H5, Subtitle3Medium, Caption1Bold } = Typography
  const tabItems = [
    { heading: "info", element: <InfoTab nft={nft} /> },
    // { heading: "track", element: <TrackTab nft={nft} /> },
    { heading: "creators", element: <OwnersTab nft={nft} /> },
    { heading: "bids", element: <BidsTab /> },
  ]
  const { data: nftInstance, isLoading } = useGetNFTInstance({
    id: nft?.nftMetadata?.tokenId || "",
    tokenContractId: spg_contract.address || "",
  })
  return (
    <div className="md:w-[400px] h-full md:h-[600px] bg-grey-1000 md:rounded-r-[28px] p-[20px] md:pb-[20px] pb-[5rem] relative">
      <div className="md:max-h-[508px] overflow-y-scroll no-scrollbar">
        <div className="flex justify-between">
          <Subtitle2Medium>{nft?.nftMetadata?.name}</Subtitle2Medium>

          {/* Copy, share..... */}
          <Actions />
        </div>
        <H5 className="mb-[12px] mt-[16px]">{nftInstance?.metadata?.name}</H5>
        <div className="inline-flex gap-[12px]">
          <Subtitle3Medium>by</Subtitle3Medium>
          <Avatar src="/nft.png" size="small" />
          <Caption1Bold className="capitalize underline">
            {isLoading ? (
              "loading..."
            ) : (
              <>
                {" "}
                {nftInstance?.owner?.name ||
                  truncateString(nftInstance?.owner?.hash || "") ||
                  "Unknown Owner"}
              </>
            )}
          </Caption1Bold>
        </div>
        <Tab items={tabItems} />
      </div>
      <div className="absolute bottom-0 left-0 z-10 w-full bg-grey-1000 p-[20px] rounded-b-[28px]">
        <Link
          href={`https://aeneid.explorer.story.foundation/ipa/${nft?.ipId}`}
          target="_blank"
        >
          <Button className="w-full" size="small" variant="secondary">
            View on explorer
          </Button>
        </Link>
      </div>
    </div>
  )
}
