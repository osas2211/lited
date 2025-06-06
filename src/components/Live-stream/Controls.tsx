import React from "react"
import { Button } from ".."
import { CancelIconAlt, StreamIcon } from "../Icons"
import { MicroPhone } from "./MicroPhone"
import { ShowVideo } from "./ShowVideo"
import { Share } from "./Share"
import { Message } from "./Message"

export const Controls = () => {
  return (
    <div className="absolute bottom-[30px] left-[50%] translate-x-[-50%] z-50">
      <div className="bg-gradient-linear backdrop-blur-[20px] py-[8px] px-[12px] rounded-[500px] border-[1px] border-grey-700 flex md:gap-[24px] gap-[10px] items-center">
        <Button
          prefixIcon={<StreamIcon />}
          className="md:min-w-[110px] md:max-h-[45px] md:min-h-[45px] min-w-[90px] max-h-[35px] min-h-[35px]"
          style={{ padding: 0 }}
        >
          <small>Go Live</small>
        </Button>
        <MicroPhone />
        <ShowVideo />
        <Message />
        <Share />
        <span className="cursor-pointer">
          <CancelIconAlt />
        </span>
      </div>
    </div>
  )
}
