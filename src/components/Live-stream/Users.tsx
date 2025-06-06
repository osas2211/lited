import React from "react"
import { Avatar, Button, Typography } from ".."
import { AddCircleIcon } from "../Icons"

const { Caption2Regular } = Typography

const users = [
  "/nft.png",
  "/nft4.png",
  "/nft2.png",
  "/nft3.png",
  "/nft.png",
  "/nft2.png",
  "/nft3.png",
  "/nft.png",
]

export const Users = () => {
  return (
    <div>
      <div className="md:max-h-[300px] max-h-[200px] overflow-y-scroll no-scrollbar">
        {/* USERS */}
        {users.map((user, index) => (
          <div
            className="flex justify-between items-center py-[10px] px-[10px] border-b-[1px] border-black"
            key={index}
          >
            <div className="flex items-center gap-[12px] ">
              <Avatar src={user} className="h-[28px] w-[28px]" />
              <div>
                <Caption2Regular className="text-white">
                  John Doe
                </Caption2Regular>
                <small className="text-white font-thin">0x3321427y32t2t</small>
              </div>
            </div>
            <Button
              className="min-w-[40px] max-h-[40px] min-h-[40px] min-h-[40px] md:rounded-full rounded-[100px] flex justify-center items-center"
              style={{ padding: 0 }}
            >
              <AddCircleIcon />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
