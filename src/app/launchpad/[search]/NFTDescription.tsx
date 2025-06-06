import React from "react"
import { Typography } from "@/components"

export const NFTDescription = () => {
  const { H3, H4, Caption2Regular, Subtitle1Regular } = Typography
  return (
    <div className="md:my-[80px] my-[40px]">
      <H4 className="mb-[16px]">NFT Description</H4>
      <Subtitle1Regular>
        Description information Description information Description information
      </Subtitle1Regular>
    </div>
  )
}
