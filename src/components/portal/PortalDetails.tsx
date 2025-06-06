import { ExportPrimaryIcon } from "@/components/Icons"
import Image from "next/image"
import React from "react"
import { Typography } from "@/components"
import Link from "next/link"

const { Subtitle1Regular, Subtitle2Regular, Subtitle2Bold } = Typography

export const PortalDetails = () => {
  return (
    <div className="md:my-[48px] my-[20px] p-[20px] md:p-[32px] grid md:grid-cols-2 md:gap-[48px] gap-[20px] bg-grey-900 border-[1px] border-grey-800 rounded-[16px]">
      <div className="flex flex-col md:flex-row gap-[24px] md:items-center md:flex-wrap lg:flex-nowrap">
        <div className="relative md:min-w-[286px] md:h-[286px] w-full h-[330px] border-[1px] border-grey-800">
          <Image
            src={
              "https://images.unsplash.com/photo-1439434768192-c60615c1b3c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="nft"
            objectFit="cover"
            fill
            className="rounded-[20px]"
          />
        </div>
        <div className="w-[100%]">
          <Subtitle1Regular className="capitalize mb-[18px]">
            Rare NFT #2134
          </Subtitle1Regular>
          <ul className="flex flex-col gap-[16px]">
            <li className="flex justify-between items-center">
              <Subtitle2Regular>Creator ID:</Subtitle2Regular>
              <Subtitle2Regular className="text-end">
                Jacob Mike
              </Subtitle2Regular>
            </li>
            <li className="flex justify-between items-center">
              <Subtitle2Regular>Usercase:</Subtitle2Regular>
              <Subtitle2Regular className="text-end">
                VIP NFT pass
              </Subtitle2Regular>
            </li>
            <li className="flex justify-between items-center">
              <Subtitle2Regular>Trades:</Subtitle2Regular>
              <Subtitle2Regular className="text-end">2,000</Subtitle2Regular>
            </li>
            <li className="flex justify-between items-center">
              <Subtitle2Regular>Price:</Subtitle2Regular>
              <Subtitle2Regular className="text-end flex gap-[8px] items-center">
                <Image src={"/STX.svg"} width={20} height={20} alt="stx" />
                <span>12.16</span>
              </Subtitle2Regular>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {/* Description */}
        <Subtitle2Regular>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          nobis corrupti minima in tenetur eligendi quis dolor maiores ex,
          pariatur laboriosam consectetur enim reprehenderit cupiditate nihil
          magni minus fugiat reiciendis veniam tempora quibusdam! Non dolorum
          rerum qui vel quae minima doloribus veritatis dolore, atque
        </Subtitle2Regular>
        <Subtitle2Regular className="my-[16px]">
          Attribute Details: Attribute details Attribute details Attribute
          details
        </Subtitle2Regular>
        <Subtitle2Regular>
          License/Copright Info: License/Copright Info License/Copright Info
        </Subtitle2Regular>
        <div className="mt-[1rem] flex flex-wrap justify-end md:gap-[64px] gap-[20px]">
          <Link href={""} className="text-primary-default">
            <Subtitle2Bold className="flex items-center gap-[8px]">
              <span>View on marketplace</span> <ExportPrimaryIcon />
            </Subtitle2Bold>
          </Link>
          <Link href={""} className="text-primary-default">
            <Subtitle2Bold className="flex items-center gap-[8px]">
              <span>View on Stacks explorer</span> <ExportPrimaryIcon />
            </Subtitle2Bold>
          </Link>
        </div>
      </div>
    </div>
  )
}
