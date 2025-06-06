"use client"
import React, { useState } from "react"
import { ArrowDownIcon } from "@/components/Icons"
import { Grid, Button, Cards, Typography } from "@/components"
import { MintModal } from "../Modal/MintNFT"
import { nfts } from "./nftsDummyData"
import { GridFilter } from "./GridFilter"

interface MarketGridI {
  showSearch?: boolean
  showPanel?: boolean
}

export const MarketGrid = () => {
  const { H4 } = Typography
  const { NFTCard } = Cards
  const [open, setOpen] = useState(false)
  const [grid, setGrid] = useState(4)
  return (
    <div>
      <div className="my-[42px] flex justify-between items-center">
        <H4>Music NFTs</H4>
        <GridFilter {...{ setGrid, grid }} />
      </div>

      <Grid nItems={grid} className="mb-[40px]">
        {[...nfts, ...nfts.reverse(), ...nfts.reverse()].map((nft) => (
          <>
            <NFTCard
              {...nft}
              size={grid === 4 ? "small" : "large"}
              key={nft.name}
              ButtonText={"Mint"}
              onButtonClick={() => setOpen(true)}
            />
          </>
        ))}
      </Grid>

      <MintModal {...{ open, setOpen }} />

      <div className="flex justify-center">
        <Button sufficIcon={<ArrowDownIcon />}>show more</Button>
      </div>
    </div>
  )
}
