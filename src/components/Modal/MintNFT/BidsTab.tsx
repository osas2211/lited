import React from "react"
import { Avatar, Typography } from "@/components"
import { HiroIcon } from "@/components/Icons"

export const BidsTab = () => {
  const { Subtitle3Medium, Caption2Regular, Caption1Bold } = Typography

  return (
    <div className="flex flex-col gap-[16px]">
      {/* <div className="inline-flex flex-col gap-[12px] rounded-[8px] px-[16px] py-[12px] bg-grey-800 w-full">
        <div className="inline-flex justify-between text-grey-200">
          <Caption2Regular>May 20th, 2022</Caption2Regular>
          <Caption2Regular className="inline-flex gap-1 items-center mb-[8px]">
            3:35 PM
          </Caption2Regular>
        </div>

        <div className="inline-flex justify-between">
          <div className="inline-flex gap-[12px] text-grey-200">
            <Avatar src="/nft.png" size="small" />
            <Caption1Bold className="capitalize">Jacob mark</Caption1Bold>
          </div>
          <Subtitle3Medium className="inline-flex gap-1 items-center mb-[8px]">
            <HiroIcon /> 23.40
          </Subtitle3Medium>
        </div>
      </div> */}

      <div className="text-center mt-10">
        <Caption1Bold className="capitalize">Coming soon</Caption1Bold>
        <Caption2Regular className="text-grey-400 mt-[8px]">
          The Bids feature is still under development and will be available
          soon.
        </Caption2Regular>
      </div>
    </div>
  )
}
