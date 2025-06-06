import React from "react"
import { Avatar, Button, Typography } from ".."
import { HeartIcon, Messages3Icon } from "../Icons"

const { Caption2Regular } = Typography

const commenters = [
  "/nft.png",
  "/nft4.png",
  "/nft2.png",
  "/nft3.png",
  "/nft.png",
  "/nft2.png",
  "/nft3.png",
  "/nft.png",
]

export const Commenters = () => {
  return (
    <div>
      <div className="md:max-h-[300px] max-h-[200px] overflow-y-scroll no-scrollbar">
        {/* COMMENTERS */}
        {commenters.map((user, index) => (
          <div
            className="py-[16px] px-[10px] border-b-[1px] border-black comment"
            key={index}
          >
            <div className="flex gap-[12px] ">
              <Avatar src={user} className="h-[28px] min-w-[28px]" />
              <div>
                <Caption2Regular className="text-white">
                  John Doe
                </Caption2Regular>
                <small className="text-white font-thin">
                  This such an amazing performance, i&apos;m really impressed by
                  your growth over the years
                </small>
                <div className="comment-actions">
                  <button className="comment-like flex gap-2 items-center">
                    <HeartIcon />
                    <span>100 Likes</span>
                  </button>
                  <button className="comment-like flex gap-2 items-center">
                    <Messages3Icon />
                    <span>100 Comments</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
