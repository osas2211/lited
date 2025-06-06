import React from "react"
import { Typography } from "@/components"
import { HiroIcon } from "@/components/Icons"

export const TrackTab = () => {
  const { Subtitle3Medium, Caption2Regular, Caption1Bold } = Typography

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="inline-flex flex-col gap-[12px] rounded-[8px] px-[16px] py-[12px] bg-grey-800 w-full">
        <div className="inline-flex justify-between text-grey-200">
          <Caption2Regular>Track</Caption2Regular>
          <Caption2Regular className="inline-flex gap-1 items-center mb-[8px]">
            3.09
          </Caption2Regular>
        </div>

        <div className="inline-flex justify-between">
          <Caption1Bold>Track Name Title</Caption1Bold>
          <Caption1Bold className="inline-flex gap-1 items-center mb-[8px]">
            <HiroIcon /> 3.40
          </Caption1Bold>
        </div>
      </div>
    </div>
  )
}
