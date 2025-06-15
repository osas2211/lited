import React from "react"
import { Typography, Input, Avatar } from "@/components"
import { CopyIcon, InfoIcon } from "@/components/Icons"
import { NFTInstanceI } from "@/types/story.api"
import { truncateString } from "@/utils/truncateString"

export const InfoTab = ({ nft }: { nft: NFTInstanceI }) => {
  const { Subtitle3Medium, Caption1Regular, Caption2Regular, Caption1Bold } =
    Typography
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="">
        <Subtitle3Medium className="flex gap-1 items-center mb-[8px]">
          Description <InfoIcon />
        </Subtitle3Medium>
        <div className="inline-flex gap-[12px] rounded-[8px] px-[16px] py-[12px] bg-grey-800 w-full">
          <Caption2Regular className="capitalize">
            {nft?.metadata?.description}
          </Caption2Regular>
        </div>
      </div>

      <div className="">
        <Subtitle3Medium className="flex gap-1 items-center mb-[8px]">
          Owner <InfoIcon />
        </Subtitle3Medium>
        <div className="inline-flex gap-[12px] rounded-[8px] px-[16px] py-[12px] bg-grey-800 w-full">
          <Avatar src="/story.png" size="small" />
          <Caption1Regular className="capitalize">
            {truncateString(nft?.owner?.hash || "")}
          </Caption1Regular>
        </div>
      </div>

      <div className="flex gap-[16px]">
        <div className="w-[50%]">
          <Subtitle3Medium className="flex gap-1 items-center mb-[8px]">
            Royalty <InfoIcon />
          </Subtitle3Medium>
          <div className="rounded-[8px] px-[16px] py-[12px] bg-grey-800 w-full">
            <Caption2Regular className="capitalize">10%</Caption2Regular>
          </div>
        </div>

        <div className="w-[50%]">
          <Subtitle3Medium className="flex gap-1 items-center mb-[8px]">
            Likes <InfoIcon />
          </Subtitle3Medium>
          <div className="rounded-[8px] px-[16px] py-[12px] bg-grey-800 w-full">
            <Caption1Regular className="capitalize">0</Caption1Regular>
          </div>
        </div>
      </div>
      <div className="flex gap-[16px] items-end">
        <div className="w-[50%]">
          <Subtitle3Medium className="flex gap-1 items-center mb-[8px]">
            Attributes <InfoIcon />
          </Subtitle3Medium>
          <div className="rounded-[8px] px-[16px] py-[12px] bg-grey-800 w-full text-center">
            <Caption1Regular className="capitalize text-grey-200">
              Classic
            </Caption1Regular>
            <Caption1Bold>60% rarity</Caption1Bold>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="rounded-[8px] px-[16px] py-[12px] bg-grey-800 w-full text-center">
            <Caption1Regular className="capitalize text-grey-200">
              Rarity
            </Caption1Regular>
            <Caption1Bold>40% rarity</Caption1Bold>
          </div>
        </div>
      </div>

      <div className="">
        <Subtitle3Medium className="flex gap-1 items-center mb-[8px]">
          Token <InfoIcon />
        </Subtitle3Medium>
        <div className="inline-flex flex-col gap-[12px] rounded-[8px] px-[16px] py-[12px] bg-grey-800 w-full">
          <div className="inline-flex justify-between">
            <Caption1Regular>Smart Contract</Caption1Regular>
            <Caption1Regular className="inline-flex gap-1 items-center mb-[8px]">
              x.str.contract <CopyIcon />
            </Caption1Regular>
          </div>

          <div className="inline-flex justify-between">
            <Caption1Regular>Image Link</Caption1Regular>
            <Caption1Regular className="inline-flex gap-1 items-center mb-[8px]">
              x.str.contract <CopyIcon />
            </Caption1Regular>
          </div>

          <div className="inline-flex justify-between">
            <Caption1Regular>Locked Fee</Caption1Regular>
            <Caption1Regular className="inline-flex gap-1 items-center mb-[8px]">
              4% <InfoIcon />
            </Caption1Regular>
          </div>
        </div>
      </div>
    </div>
  )
}
