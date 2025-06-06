import Image from "next/image"
import React from "react"
import { Avatar, Typography } from "@/components"
import {
  DiscordIcon,
  OpenIcon,
  TelegramIcon,
  TwitterIcon,
} from "@/components/Icons"
import Link from "next/link"

export const MetaData = () => {
  const { H5, Subtitle3Regular } = Typography

  return (
    <div className="flex md:flex-row flex-col md:items-center gap-[30px] md:mb-[90px] mb-[40px]">
      <div className="relative md:w-[208px] md:h-[208px] w-[114px] h-[114px] rounded-[16px]  border-[1px] border-grey-600">
        <Image
          src={"/eth.png"}
          fill
          alt="NFT Image"
          objectFit="cover"
          className=" border-[1px] border-grey-600 rounded-[16px]"
        />
      </div>
      <div>
        <div className="flex gap-[18px] items-center">
          <Avatar src="/nft.png" size="small" />
          <Subtitle3Regular className="text-grey-300">
            Jacob Kavanaugh
          </Subtitle3Regular>
        </div>
        <H5 className="mt-[8px]">The lost sounds of the jungle</H5>
        <div className="flex gap-[4px] my-[12px]">
          <TwitterIcon />
          <DiscordIcon />
          <TelegramIcon />
        </div>
        <Link href={""} className="flex gap-[5px] items-center">
          <span style={{ color: "#7879F1" }}>View on ether scan</span>{" "}
          <OpenIcon />
        </Link>
      </div>
    </div>
  )
}
