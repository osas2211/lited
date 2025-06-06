import React from "react"
import { Button, Typography } from "@/components"
import {
  ArrowRightIcon,
  CopyIcon,
  CopyOutlinedIcon,
  DiscountCircleIcon,
  DollarCircleIcon,
  FirstLineIcon,
  LinkIcon,
  Profile2UserIcon,
} from "@/components/Icons"
import Image from "next/image"

export const AdditionalDetails = () => {
  const { H3, H4, Caption2Regular, Subtitle0Regular } = Typography
  return (
    <div className="md:my-[80px] my-[40px]">
      <H4 className="md:mb-[30px] mb-[16px]">Additional Details</H4>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-[10px]">
        <div className="md:pl-[89px] md:py-[60px] pl-[40px] py-[30px] w-full h-[150px] md:h-[208px] rounded-[16px] border-[1px] border-grey-600">
          <div>
            <Subtitle0Regular className="flex items-center gap-[18px] text-grey-300 mb-[6px]">
              <DollarCircleIcon />
              <span>Price</span>
            </Subtitle0Regular>
            <H4>200 ETH</H4>
          </div>
        </div>

        <div className="md:pl-[89px] md:py-[60px] pl-[40px] py-[30px] w-full h-[150px] md:h-[208px] rounded-[16px] border-[1px] border-grey-600">
          <div>
            <Subtitle0Regular className="flex items-center gap-[18px] text-grey-300 mb-[6px]">
              <CopyOutlinedIcon />
              <span>Total supply</span>
            </Subtitle0Regular>
            <H4>10,000,000</H4>
          </div>
        </div>

        <div className="md:pl-[89px] md:py-[60px] pl-[40px] py-[30px] w-full h-[150px] md:h-[208px] rounded-[16px] border-[1px] border-grey-600">
          <div>
            <Subtitle0Regular className="flex items-center gap-[18px] text-grey-300 mb-[6px]">
              <Profile2UserIcon />
              <span>Total NFTs owned</span>
            </Subtitle0Regular>
            <H4>2</H4>
          </div>
        </div>

        <div className="md:pl-[89px] md:py-[60px] pl-[40px] py-[30px] w-full h-[150px] md:h-[208px] rounded-[16px] border-[1px] border-grey-600">
          <div>
            <Subtitle0Regular className="flex items-center gap-[18px] text-grey-300 mb-[6px]">
              <DiscountCircleIcon />
              <span>Supply in circulation</span>
            </Subtitle0Regular>
            <H4>10,000,000</H4>
          </div>
        </div>

        <div className="md:pl-[89px] md:py-[60px] pl-[40px] py-[30px] w-full h-[150px] md:h-[208px] rounded-[16px] border-[1px] border-grey-600">
          <div>
            <Subtitle0Regular className="flex items-center gap-[18px] text-grey-300 mb-[6px]">
              <FirstLineIcon />
              <span>Initial supply</span>
            </Subtitle0Regular>
            <H4>100,000,000</H4>
          </div>
        </div>

        <div className="flex items-center md:pl-[89px] md:py-[60px] pl-[40px] py-[30px] pr-[40px] w-full h-[150px] md:h-[208px] rounded-[16px] border-[1px] border-grey-600">
          <div>
            <Subtitle0Regular className="flex items-center gap-[18px] text-grey-300 mb-[6px]">
              <LinkIcon />
              <span>External link</span>
            </Subtitle0Regular>
            <div className="p-[5px] rounded-[7px] bg-grey-600">
              <div className="flex gap-[18px] items-center">
                <Image
                  src={"/eth2.png"}
                  alt="Eth Image"
                  height={27}
                  width={27}
                  className="rounded-[7px]"
                />
                <Subtitle0Regular className="text-grey-300 mb-[6px]">
                  #23211
                </Subtitle0Regular>
              </div>
              <Caption2Regular className="flex items-center gap-[3px] text-grey-300 mb-[6px]">
                <LinkIcon />
                <span>https://www.coingecko.co/en/nft/b...</span>
              </Caption2Regular>
            </div>
          </div>
        </div>
      </div>

      <Button
        sufficIcon={<ArrowRightIcon />}
        className="md:mt-[30px] mt-[16px] w-full md:w-auto"
      >
        Mint for $200,012.06
      </Button>
    </div>
  )
}
