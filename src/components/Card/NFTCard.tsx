import React, { FC } from "react"
import Image from "next/image"
import { Button, Typography } from ".."
import { Avatar } from ".."
import { ArrowUpIcon, Heart2Icon, HeartIcon } from "../Icons"
import { NFTInstanceI } from "@/types/story.api"
import { truncateString } from "@/utils/truncateString"

interface NFTCardI
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "id" | "value">,
    NFTInstanceI {
  inFavourites?: boolean
  size: "large" | "small"
  ButtonText: React.ReactNode
  onButtonClick?: () => void
}

export const NFTCard: FC<NFTCardI> = ({
  className,
  style,
  size,
  ButtonText,
  inFavourites,
  onButtonClick,
  ...props
}) => {
  const { image_url, metadata, token, owner } = props
  const { Subtitle2Medium, Caption2Bold, Label2Medium, Subtitle3Medium } =
    Typography
  return (
    <div {...props} className={`relative w-full rounded-[20px] ${className}`}>
      <div
        className={`relative w-full ${
          size === "large" ? "h-[280px]" : "h-[200px]"
        }`}
      >
        <Image
          src={image_url}
          alt={metadata?.name || "NFT Image"}
          fill={true}
          quality={100}
          className="rounded-t-[20px]"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="backdrop-blur-[20px] p-[12px] md:p-[16px] mt-[-2rem] rounded-[20px] bg-[#0A0A0AA3] card-shadow">
        <Subtitle2Medium className="mb-[20px]">
          {metadata?.name || "NFT Image"}
        </Subtitle2Medium>
        <div className="flex justify-between items-center mb-[16px]">
          <div className="flex md:gap-[12px] gap-[8px] items-center">
            <Avatar src={"/story.png"} size="small" />
            <Caption2Bold className={`${size === "small" ? "text-[9px]" : ""}`}>
              {owner?.name || truncateString(owner?.hash) || "Unknown Owner"}
            </Caption2Bold>
          </div>

          <div className="md:px-[8px] md:pt-[4px] md:pb-[6px] pt-[0px] px-[5px] pb-[4px] bg-grey-800 rounded-[4px]">
            <Label2Medium className={`${size === "small" ? "text-[8px]" : ""}`}>
              {props?.media_type || "IP"}
            </Label2Medium>
          </div>
        </div>

        <div className="md:p-[16px] p-[8px] bg-grey-800 rounded-[20px] flex justify-between items-center">
          <div className="flex items-center gap-[8px]">
            <div className="relative h-[24px] w-[24px]">
              <Image
                src={"/wip.png"}
                alt="currency"
                fill={true}
                objectFit="cover"
              />
            </div>
            <Subtitle3Medium
              className={`${size === "small" ? "text-[9px]" : ""}`}
            >
              {Number(Number(props?.value || 0).toFixed(2)).toLocaleString()}
            </Subtitle3Medium>
          </div>

          <Button
            size="small"
            onClick={onButtonClick}
            className={`${size === "small" ? "min-w-[48px] py-[8px]" : ""}`}
          >
            {ButtonText}
          </Button>
        </div>
      </div>

      <div
        className="absolute top-[16px] right-[16px] backdrop-blur-[20px] bg-[#0A0A0AA3] rounded-[20px] flex gap-[12px]"
        style={{ padding: size === "large" ? "12px" : "8px" }}
      >
        {inFavourites ? (
          <Heart2Icon
            width={size === "small" ? 16 : 20}
            height={size === "small" ? 16 : 20}
          />
        ) : (
          <HeartIcon
            width={size === "small" ? 16 : 20}
            height={size === "small" ? 16 : 20}
          />
        )}
        <ArrowUpIcon
          width={size === "small" ? 16 : 20}
          height={size === "small" ? 16 : 20}
        />
      </div>
    </div>
  )
}
