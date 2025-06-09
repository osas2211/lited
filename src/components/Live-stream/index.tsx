import React from "react"
import { Controls } from "./Controls"
import { Avatar, Button, Typography } from ".."
import { StreamIcon } from "../Icons"
import { AvatarGroup } from "@mui/joy"
import { UserActivities } from "./UserActivities"

const { Caption2Regular } = Typography

export const LiveStream = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="relative">
        <video
          src="/earth.mp4"
          autoPlay
          // width={1440}
          // height={820}
          className="rounded-[20px] bg-[rgba(10, 10, 10, 0.64)] border-[1px] border-grey-700 backdrop-blur-[20px] h-[85vh] lg:h-[auto] md:w-[1320px]"
          loop
          controls
        ></video>
        <div className="absolute top-[30px] left-[0px] z-10 w-full">
          <div className="flex justify-between w-full md:px-[30px] px-[16px]">
            <div className="bg-[#0A0A0A33] backdrop-blur-[20px] p-[10px] rounded-[20px]">
              <p className="text-[12px] md:text-[16px]">20k watching</p>
            </div>
            <div className="flex md:gap-6 gap-2 items-center">
              <div className="py-[2px] px-[8px] rounded-[80px] bg-white card-shadow">
                <div className="flex justify-between items-center gap-2">
                  <Avatar src={"/nft.png"} className="h-[28px] w-[28px]" />
                  <div>
                    <small className="text-grey-700 md:text-[14px] text-[12px] font-semibold">
                      John Mark
                    </small>
                    <small className="md:text-[11px] text-[9px] text-grey-500 block">
                      Description...{" "}
                      <span className="text-primary-default">See more</span>
                    </small>
                  </div>
                </div>
              </div>

              <Button
                prefixicon={<StreamIcon />}
                className="md:min-w-[110px] md:max-h-[45px] md:min-h-[45px] min-w-[90px] max-h-[35px] min-h-[35px]"
                style={{ padding: 0 }}
              >
                <small>Live</small>
              </Button>
            </div>
          </div>
        </div>
        <Controls />
        <UserActivities />
      </div>
      {/*Controls  */}
    </div>
  )
}
