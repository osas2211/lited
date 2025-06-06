import React from "react"
import { Button, Typography } from "@/components"
import {
  ArrowRightIcon,
  DollarCircleIcon,
  EyeIcon,
  PlayCircleIcon,
  TimerStartIcon,
} from "@/components/Icons"
import { VideoPlayer } from "./VideoPlayer"

export const NFTData = () => {
  const { H3, H4, Caption2Regular, Subtitle1Regular } = Typography
  return (
    <div className="flex gap-[32px] md:flex-row flex-col">
      <VideoPlayer />
      <div className="flex flex-col md:w-[60%] w-full gap-[27px]">
        <div className="flex">
          <div className="flex flex-col gap-[5px] border-[1px] border-grey-600 md:pl-[89px] pl-[24px] md:pt-[24px] py-[20px] md:pb-[10px] rounded-l-[16px] w-full">
            <Caption2Regular className="text-grey-300 flex items-center gap-[5px]">
              <EyeIcon /> <span>Views</span>
            </Caption2Regular>
            <H4>100</H4>
          </div>
          <div className="flex flex-col gap-[5px] border-[1px] border-grey-600 md:pl-[89px] pl-[24px] md:pt-[24px] py-[20px] md:pb-[10px] rounded-r-[16px] w-full">
            <Caption2Regular className="text-grey-300 flex items-center gap-[5px]">
              <PlayCircleIcon /> <span>Streams</span>
            </Caption2Regular>
            <H4>12</H4>
          </div>
        </div>

        <div
          className="border-[1px] border-grey-600 rounded-[16px] py-[20px] md:px-[32px] px-[16px] flex flex-col gap-[29px]"
          style={{
            background:
              " linear-gradient(180deg, rgba(15, 23, 42, 0.16) 0%, rgba(234, 58, 96, 0.16) 100%)",
          }}
        >
          <div className="flex w-full md:flex-row flex-col">
            <div className="flex flex-col gap-[5px] md:border-r-[1px] border-b-[1px] md:border-b-[0px] border-grey-600 md:px-[0px] px-[16px] py-[20px]  w-full">
              <Caption2Regular className="text-grey-300 ">
                Initial price
              </Caption2Regular>
              <H4>10 ETH</H4>
              <Caption2Regular className="flex gap-[5px] items-center text-grey-300 ">
                <DollarCircleIcon /> <span>⁓18,221.23</span>
              </Caption2Regular>
            </div>
            <div className="flex flex-col gap-[5px] md:px-[10px] px-[16px] py-[20px] w-full">
              <Caption2Regular className="text-grey-300">
                Current floor price
              </Caption2Regular>
              <H4>200 ETH</H4>
              <Caption2Regular className="flex gap-[5px] items-center text-grey-300 ">
                <DollarCircleIcon /> <span>⁓18,221.23</span>
              </Caption2Regular>
            </div>
          </div>

          <div className="h-[1px] w-full bg-grey-600" />

          <div className="flex md:flex-row flex-col gap-[20px]">
            <Button sufficIcon={<ArrowRightIcon />} variant="secondary">
              Mint now for $200,012.06
            </Button>

            <Button sufficIcon={<ArrowRightIcon />} variant="secondary">
              Add to favourites
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-[18px] md:px-[32px] px-[16px] py-[20px] w-full border-[1px] border-grey-600 rounded-[16px]">
          <Caption2Regular className="flex gap-[5px] items-center text-grey-300 ">
            <TimerStartIcon /> <span>There is currently no waitlist</span>
          </Caption2Regular>
          <H4>00 : 00 : 00</H4>
        </div>
      </div>
    </div>
  )
}
