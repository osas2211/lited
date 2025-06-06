import React from "react"
import { Button, Typography } from "@/components"
import { Tag } from "@/components/Tag"
import { TimerStartIcon } from "@/components/Icons"
import { PortalDetails } from "@/components/portal/PortalDetails"

const { H6, Subtitle2Regular } = Typography

export const PortalInfo = () => {
  return (
    <div className="my-[2rem]">
      <div className="flex justify-between">
        <div>
          <H6 className="mb-[20px]">Portal Title</H6>
          <Subtitle2Regular>
            Portal description Portal description Portal description Portal
            description
          </Subtitle2Regular>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-[8px] bg-[#0a0a0aa3] box-shadow border-[1px] border-grey-700 p-[16px] py-[12px] rounded-[20px] max-h-[56px]">
            <TimerStartIcon />
            <div>
              <p className="m-0 p-0">
                <small>Duration</small>
              </p>
              <p className="mt-[-5px] p-0">
                <small className="text-[12px] text-grey-300">00:00:00</small>
              </p>
            </div>
          </button>
          <button className="flex items-center gap-[8px] bg-[#0a0a0aa3] box-shadow border-[1px] border-grey-700 p-[16px] py-[12px] rounded-[20px] max-h-[56px]">
            <small>Following</small>
          </button>
        </div>
      </div>
      <div className="my-[1rem]">
        <Tag>Tag 1</Tag>
      </div>
      <div className="mt-[2rem]">
        <H6 className="mb-[20px]">Nft to own to be a premium member</H6>
        <Subtitle2Regular>Details about it</Subtitle2Regular>
      </div>
      <PortalDetails />
      <Button>Purchase NFT</Button>
    </div>
  )
}
