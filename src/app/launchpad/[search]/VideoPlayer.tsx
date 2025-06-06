import { Button } from "@/components"
import { EthAltIcon } from "@/components/Icons"
import React from "react"

export const VideoPlayer = () => {
  return (
    <div className="relative md:w-[30%] w-full md:h-[590px] h-[457px]">
      <div className="absolute top-[16px] left-[16px]">
        <Button prefixIcon={<EthAltIcon />} style={{ background: "#EA3A60" }}>
          Ethereum chain
        </Button>
      </div>

      <video
        src="/video.mp4"
        className="w-full h-full rounded-[16px] border-[1px] border-grey-600"
        controls
        style={{ objectFit: "cover" }}
        autoPlay
      />
    </div>
  )
}
