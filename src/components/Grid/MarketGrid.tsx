"use client"
import React, { useState } from "react"
import { ArrowDownIcon } from "@/components/Icons"
import {
  Grid,
  Button,
  Cards,
  Typography,
  NFTSkeletonLoader,
} from "@/components"
import { MintModal } from "../Modal/MintNFT"
import { nfts } from "./nftsDummyData"
import { GridFilter } from "./GridFilter"
import { useGetIpAssets, useGetNFTInstances } from "@/hooks/useStoryAPI"
import { spg_contract } from "@/constants/contract_addresses"
import { IpAssetI, NFTInstanceI } from "@/types/story.api"

interface MarketGridI {
  showSearch?: boolean
  showPanel?: boolean
}

export const MarketGrid = () => {
  const { H4 } = Typography
  const { NFTCard } = Cards
  const [open, setOpen] = useState(false)
  const [grid, setGrid] = useState(4)
  // const { data, isLoading } = useGetNFTInstances({
  //   tokenContractId: spg_contract.address,
  // })

  const { data, isLoading } = useGetIpAssets({
    tokenContractIds: [spg_contract.address],
  })

  const [nftData, setNftData] = useState<IpAssetI>()

  console.log("NFT Instances Data", data)
  return (
    <div>
      <div className="my-[42px] flex justify-between items-center">
        <H4>All NFTs</H4>
        <GridFilter {...{ setGrid, grid }} />
      </div>

      {isLoading && <NFTSkeletonLoader />}

      <Grid nItems={grid} className="mb-[40px]">
        {data?.data.map((nft, index) => (
          <>
            <NFTCard
              {...nft}
              size={grid === 4 ? "small" : "large"}
              key={index}
              ButtonText={"View"}
              onButtonClick={() => {
                setOpen(true)
                setNftData(nft)
              }}
            />
          </>
        ))}
      </Grid>

      <MintModal {...{ open, setOpen, nft: nftData!! }} />
      {/* <div className="flex justify-center">
        <Button sufficIcon={<ArrowDownIcon />}>show more</Button>
      </div> */}
    </div>
  )
}
