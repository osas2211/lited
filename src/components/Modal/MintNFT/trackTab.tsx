import React from "react"
import { Typography } from "@/components"
import { HiroIcon } from "@/components/Icons"
import { NFTInstanceI } from "@/types/story.api"
import AudioPlayer from "react-h5-audio-player"

export const TrackTab = ({ nft }: { nft: NFTInstanceI }) => {
  const { Subtitle3Medium, Caption2Regular, Caption1Bold } = Typography

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="inline-flex flex-col gap-[12px] rounded-[8px] px-[16px] py-[12px] bg-grey-800 w-full">
        <div className="inline-flex justify-between text-grey-200">
          <Caption2Regular>Song</Caption2Regular>
          <Caption2Regular className="inline-flex gap-1 items-center mb-[8px]">
            {nft?.id}
          </Caption2Regular>
        </div>

        {/* <div className="inline-flex justify-between">
          <Caption1Bold>Track Name Title</Caption1Bold>
          <Caption1Bold className="inline-flex gap-1 items-center mb-[8px]">
            <HiroIcon /> 3.40
          </Caption1Bold>
        </div> */}

        <AudioPlayer
          // autoPlay
          src={
            "https://yellow-used-unicorn-119.mypinata.cloud/files/bafybeifuqooxz2fig7zumpblzeauzpiiy3fzbmafs5ygnmvtt2jih5axee"
          }
          onPlay={(e) => console.log("onPlay")}
          // other props here
        />
      </div>
    </div>
  )
}
