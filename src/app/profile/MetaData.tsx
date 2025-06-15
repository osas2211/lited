"use client"
import React from "react"
import { Avatar, Button, Typography } from "@/components"
import {
  ArrowRightIcon,
  ArrowRightLinearIcon,
  FacebookIcon,
  InstagramIcon,
  ShareIcon,
  TwitterIcon,
  WebIcon,
} from "@/components/Icons"
import { useAccount } from "wagmi"
import { truncateString } from "@/utils/truncateString"

export const MetaData = () => {
  const { H3, H4, Subtitle2Bold, Button2, Subtitle3Medium } = Typography
  const account = useAccount()

  return (
    <div
      className="md:rounded-[40px] rounded-[12px] bg-grey-800 md:p-[40px] py-[20px] px-[16px] 
    mt-[40px] flex md:flex-row flex-col justify-between md:items-center gap-[32px]"
    >
      <div className="md:flex gap-[32px] md:items-center">
        <Avatar
          src="/nft.png"
          className="md:w-[164px] md:h-[164px] h-[64px] w-[64px]"
        />
        <div className="flex gap-[20px] flex-col items-start mt-[16px] md:mt-0">
          <H4>@LiTED_Tester</H4>
          <div className="flex md:flex-col gap-[20px] justify-between items-center md:items-start">
            <Button2 className="bg-grey-700 md:p-[8px] p-[6px] text-grey-200 flex items-center gap-[8px] rounded-[80px] pr-[16px]">
              <Avatar size="small" src="/story.png" />{" "}
              {truncateString(account?.address || "")}
            </Button2>
            <div className="flex md:gap-[16px] gap-[8px]">
              <ShareIcon />
              <TwitterIcon />
              <FacebookIcon />
              <InstagramIcon />
              <WebIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-x-[56px] md:gap-y-[24px] flex justify-between">
        <div>
          <Subtitle3Medium className="text-grey-200 text-[11px] md:text-[16px]">
            Owned
          </Subtitle3Medium>
          <Subtitle2Bold>1,983</Subtitle2Bold>
        </div>
        <div>
          <Subtitle3Medium className="text-grey-200 text-[11px] md:text-[16px]">
            Items
          </Subtitle3Medium>
          <Subtitle2Bold>500</Subtitle2Bold>
        </div>
        <div>
          <Subtitle3Medium className="text-grey-200 text-[11px] md:text-[16px]">
            All IPs Total Supply
          </Subtitle3Medium>
          <Subtitle2Bold className="inline-flex items-center gap-[8px]">
            <Avatar size="small" src="/wip.png" /> 254.01
          </Subtitle2Bold>
        </div>
        <div>
          <Subtitle3Medium className="text-grey-200 text-[11px] md:text-[16px]">
            Volumn Traded
          </Subtitle3Medium>
          <Subtitle2Bold className="inline-flex items-center gap-[8px]">
            <Avatar size="small" src="/wip.png" /> 254.01
          </Subtitle2Bold>
        </div>
      </div>

      <div className="grid grid-cols-2 md:flex md:flex-col md:gap-[40px] gap-[16px] justify-between">
        <Button sufficIcon={<ArrowRightIcon />} size="small">
          Market
        </Button>
        <Button
          sufficIcon={<ArrowRightLinearIcon />}
          variant="secondary"
          size="small"
        >
          Explorer
        </Button>
      </div>
    </div>
  )
}
