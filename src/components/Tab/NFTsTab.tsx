"use client"
import React, { FC, ReactNode, useState } from "react"
import { TabPanel } from "./TabPanel"
import { Empty, NftGrid } from ".."
import { nfts } from "../Grid/nftsDummyData"
import { GridFilter } from "../Grid/GridFilter"
import { ElementIcon, ElementPlusIcon, Heart2Icon, PenAddIcon } from "../Icons"
import { useGetNFTInstances } from "@/hooks/useStoryAPI"
import { spg_contract } from "@/constants/contract_addresses"
import { useAccount } from "wagmi"

export const NftsTab = () => {
  const [grid, setGrid] = useState<number>(4)
  const defaultPanel = 0
  const [activePanel, setActivePanel] = useState<string | number>(defaultPanel)
  const account = useAccount()
  const { data, isLoading } = useGetNFTInstances({
    tokenContractId: spg_contract.address,
    holder_address_hash: account?.address,
  })

  const items = [
    {
      heading: (
        <Tabheader
          icon={<PenAddIcon />}
          name="Created"
          count={data?.items?.length || 0}
        />
      ),
      element: <NftGrid nfts={data?.items!!} grid={grid} />,
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
      heading: <Tabheader icon={<Heart2Icon />} name="Favourites" count={0} />,
      element: <NftGrid nfts={[]} grid={grid} />,
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
