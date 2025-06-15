import { Avatar, Button, Tab, Typography } from "@/components"
import React from "react"
import { InfoTab } from "./InfoTab"
import { TrackTab } from "./trackTab"
import { BidsTab } from "./BidsTab"
import { OwnersTab } from "./OwnersTab"
import { MoreIcon } from "@/components/Icons"
import { Actions } from "./Actions"
import { NFTInstanceI } from "@/types/story.api"
import { truncateString } from "@/utils/truncateString"

export const Details = ({ nft }: { nft: NFTInstanceI }) => {
  const { Subtitle2Medium, H5, Subtitle3Medium, Caption1Bold } = Typography
  const tabItems = [
    { heading: "info", element: <InfoTab nft={nft} /> },
    // { heading: "track", element: <TrackTab nft={nft} /> },
    { heading: "creators", element: <OwnersTab /> },
    { heading: "bids", element: <BidsTab /> },
  ]
  return (
    <div className="md:w-[400px] h-full md:h-[600px] bg-grey-1000 md:rounded-r-[28px] p-[20px] md:pb-[20px] pb-[5rem] relative">
      <div className="md:max-h-[508px] overflow-y-scroll no-scrollbar">
        <div className="flex justify-between">
          <Subtitle2Medium>{nft?.token?.type}</Subtitle2Medium>

          {/* Copy, share..... */}
          <Actions />
        </div>
        <H5 className="mb-[12px] mt-[16px]">{nft?.metadata?.name}</H5>
        <div className="inline-flex gap-[12px]">
          <Subtitle3Medium>by</Subtitle3Medium>
          <Avatar src="/nft.png" size="small" />
          <Caption1Bold className="capitalize underline">
            {nft?.owner?.name ||
              truncateString(nft?.owner?.hash) ||
              "Unknown Owner"}
          </Caption1Bold>
        </div>
        <Tab items={tabItems} />
      </div>
      <div className="absolute bottom-0 left-0 z-10 w-full bg-grey-1000 p-[20px] rounded-b-[28px]">
        <Button className="w-full" size="small">
          Buy Now
        </Button>
      </div>
    </div>
  )
}
