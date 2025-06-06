"use client"
import React, { FC, ReactNode, useState } from "react"
import { TabPanel } from "./TabPanel"
import { Empty, NftGrid } from ".."
import { nfts } from "../Grid/nftsDummyData"
import { GridFilter } from "../Grid/GridFilter"
import { ElementIcon, ElementPlusIcon, Heart2Icon, PenAddIcon } from "../Icons"

export const NftsTab = () => {
  const [grid, setGrid] = useState<number>(4)
  const defaultPanel = 0
  const [activePanel, setActivePanel] = useState<string | number>(defaultPanel)
  const items = [
    {
      heading: <Tabheader icon={<PenAddIcon />} name="Created" count={12} />,
      element: <NftGrid nfts={nfts} grid={grid} />,
    },
    {
      heading: (
        <Tabheader icon={<ElementPlusIcon />} name="Collected" count={0} />
      ),
      element: <Empty />,
    },
    {
      heading: (
        <Tabheader icon={<ElementIcon />} name="My Collections" count={0} />
      ),
      element: <Empty />,
    },
    {
      heading: <Tabheader icon={<Heart2Icon />} name="Favourites" count={3} />,
      element: (
        <NftGrid nfts={nfts?.filter((nft) => nft.inFavourites)} grid={grid} />
      ),
    },
  ]
  return (
    <div className="">
      <div className="flex md:flex-row flex-col gap-[30px] md:items-center md:justify-between my-[40px]">
        <div className="md:order-1 order-2 overflow-x-scroll md:overflow-x-hidden no-scrollbar md:w-auto w-[100%]">
          <TabPanel items={items} {...{ activePanel, setActivePanel }} />
        </div>
        <div className="md:order-2 order-1">
          <GridFilter showSearch {...{ setGrid, grid }} />
        </div>
      </div>
      <div className="py-[16px]">{items[Number(activePanel)].element}</div>
    </div>
  )
}

const Tabheader: FC<{
  name: string
  icon: React.ReactNode
  count: string | number
}> = ({ name, icon, count }) => (
  <div className="inline-flex items-center gap-[8px]">
    {icon} <span>{name}</span>
    <div className="bg-grey-700 h-[19px] w-[19px] flex justify-center items-center rounded-[100%]">
      <span className="to-white text-[10px]">{count}</span>
    </div>
  </div>
)
