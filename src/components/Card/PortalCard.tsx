"use client"
import React, { useState } from "react"
import Image from "next/image"
import { Avatar, Button, Typography } from "@/components"
import { AddCircleIcon } from "../Icons"
import { CreatePortalModal } from "../Modal/CreatePortalModal"

interface props {
  poster: string
  artistIcon: string
  artistName: string
  name: string
  id?: string
}

const { Subtitle1Regular, Subtitle2Regular, Caption2Regular } = Typography

export const PortalCard: React.FC<props> = ({ ...props }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="p-[1rem] min-w-[260px] h-[400px] rounded-[24px] border-[1px] border-grey-600 bg-grey-900 flex-initial no-scrollbar">
      <div className="relative w-full h-full">
        <div className="bg-[#0A0A0A33] backdrop-blur-[20px] p-[10px] rounded-[20px] absolute top-[18px] right-[18px] z-10">
          20k watching
        </div>
        <Image
          src={props.poster}
          fill
          alt={props.name}
          className="rounded-[14px]"
          objectFit="cover"
        />
      </div>
      <div className="relative">
        <div className="backdrop-blur-[20px] p-[16px] md:p-[16px] mt-[-2rem] rounded-b-[14px] bg-[#0A0A0AA3] card-shadow absolute bottom-0 left-0 min-h-[124px] z-1 w-full">
          <div className="flex flex-col justify-between gap-[1rem] ">
            <Subtitle2Regular>{props.name}</Subtitle2Regular>
            <div className="flex justify-between items-center rounded-[80px] border-[1px] border-grey-500 py-[6px] px-[10px] bg-gradient-linear">
              <div className="flex items-center gap-[8px] ">
                <Avatar src={props.artistIcon} className="h-[28px] w-[28px]" />
                <Caption2Regular className="text-white">
                  {props.artistName}
                </Caption2Regular>
              </div>
              <Button
                className="min-w-[40px] max-h-[40px] min-h-[40px] min-h-[40px] md:rounded-full rounded-[100px] flex justify-center items-center"
                style={{ padding: 0 }}
                onClick={() => setOpen(true)}
              >
                <AddCircleIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CreatePortalModal {...{ open, setOpen }} />
    </div>
  )
}
