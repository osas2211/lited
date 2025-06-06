"use client"
import React, { useState } from "react"
import Image from "next/image"
import { Avatar, Button, Typography } from "@/components"
import { AddCircleIcon, StreamIcon } from "../Icons"
import { CreatePortalModalAlt } from "../Modal/CreatePortalModal/alt"
import { Tag } from "../Tag"

interface props {
  poster: string
  artistIcon: string
  artistName: string
  name: string
  id?: string
  description?: string
}

const { Subtitle3Regular, Subtitle2Regular, Caption2Regular } = Typography

export const PortalCardAlt: React.FC<props> = ({ ...props }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="p-[1rem] min-w-[260px] h-[400px] rounded-[24px] border-[1px] border-grey-600 bg-grey-900 flex-initial no-scrollbar">
      <div className="relative w-full h-full">
        <div className="p-[10px] rounded-[20px] absolute top-[0] left-[0] z-10 w-full">
          <div className="w-[100%] flex justify-between">
            <Button
              prefixIcon={<StreamIcon />}
              className="min-w-[80px] max-h-[30px] min-h-[30px] min-h-[30px]"
              style={{ padding: 0 }}
            >
              <small>Live</small>
            </Button>
            <Button
              className="min-w-[30px] max-h-[30px] min-h-[30px] min-h-[30px] md:rounded-full rounded-[100px] flex justify-center items-center"
              style={{ padding: 0 }}
              onClick={() => setOpen(true)}
            >
              <AddCircleIcon />
            </Button>
          </div>
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
        <div className="absolute bottom-0 left-0 min-h-[124px] z-1 w-full ">
          <div className="bg-[#0A0A0A33] backdrop-blur-[20px] p-[10px] rounded-[20px] inline-block ml-[10px] mb-[10px]">
            20k watching
          </div>
          <div className="backdrop-blur-[20px] p-[16px] md:p-[16px] rounded-b-[14px] bg-[#0A0A0AA3] card-shadow">
            <div className="flex flex-col justify-between gap-[1rem] ">
              <div>
                <Subtitle3Regular>{props.name}</Subtitle3Regular>
                <small className="text-[11px] text-grey-300">
                  Description description...{" "}
                  <span className="text-primary-default">See more</span>
                </small>
              </div>
              <div className="flex gap-2">
                <Tag variant="primary">Music</Tag>
                <Tag variant="primary">Art</Tag>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[8px] ">
                  <Avatar
                    src={props.artistIcon}
                    className="h-[28px] w-[28px]"
                  />
                  <Caption2Regular className="text-white">
                    {props.artistName}
                  </Caption2Regular>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreatePortalModalAlt {...{ open, setOpen }} />
    </div>
  )
}
