import React from "react"
import { Button, Typography } from "@/components"
import { Checkbox } from "@mui/joy"

export const Notifications = () => {
  const { Subtitle1Regular, H4, Caption2Bold, Caption2Regular } = Typography

  return (
    <div className="mt-[32px] md:w-[400px] md:max-h-[65vh] md:overflow-scroll no-scrollbar">
      <H4 className="text-grey-100">Notifications</H4>
      <Subtitle1Regular className="text-grey-100">
        Select which notifications you would like to receive for 0x6991...2e12
      </Subtitle1Regular>

      <div className="p-[16px] rounded-[8px] bg-grey-800 flex flex-col gap-[4px] mt-[32px]">
        <div className="flex items-center gap-[12px] p-[12px]">
          <Checkbox />
          <div>
            <Caption2Bold>Item Sold</Caption2Bold>
            <Caption2Regular className="text-grey-100">
              When someone purchased one of your items
            </Caption2Regular>
          </div>
        </div>
        <div className="flex items-center gap-[12px] p-[12px]">
          <Checkbox />
          <div>
            <Caption2Bold>Bid Activity</Caption2Bold>
            <Caption2Regular className="text-grey-100">
              When someone bids on one of your items
            </Caption2Regular>
          </div>
        </div>
        <div className="flex items-center gap-[12px] p-[12px]">
          <Checkbox />
          <div>
            <Caption2Bold>Price Change</Caption2Bold>
            <Caption2Regular className="text-grey-100">
              When an item you made an offer on changes in price
            </Caption2Regular>
          </div>
        </div>
        <div className="flex items-center gap-[12px] p-[12px]">
          <Checkbox />
          <div>
            <Caption2Bold>Successful Purchase</Caption2Bold>
            <Caption2Regular className="text-grey-100">
              When you successfully buy an item
            </Caption2Regular>
          </div>
        </div>
        <div className="flex items-center gap-[12px] p-[12px]">
          <Checkbox />
          <div>
            <Caption2Bold>SongsToRadio Newsletter</Caption2Bold>
            <Caption2Regular className="text-grey-100">
              Occasional updates from the OpenSea team
            </Caption2Regular>
          </div>
        </div>
      </div>

      <Button className="w-full md:w-auto mt-[40px]" size="small">
        Save
      </Button>
    </div>
  )
}
