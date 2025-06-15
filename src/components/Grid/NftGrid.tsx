"use client"
import React, { useState } from "react"
import Grid from "."
import { Cards } from ".."
import { MintModal } from "../Modal/MintNFT"
import { NFTInstanceI } from "@/types/story.api"

interface NftGridI {
  grid?: number
  setGrid?: React.Dispatch<React.SetStateAction<number>>
  nfts: NFTInstanceI[]
}

export const NftGrid: React.FC<NftGridI> = ({ grid, nfts }) => {
  const { NFTCard } = Cards
  const [open, setOpen] = useState(false)
  const [nftData, setNftData] = useState<NFTInstanceI>()

  return (
    <>
      <Grid nItems={grid || 4} className="mb-[40px]">
        {nfts?.map((nft, index) => (
          <>
            <NFTCard
              {...nft}
              size={grid === 3 ? "large" : "small"}
              key={index}
              ButtonText={"Mint"}
              onButtonClick={() => {
                setOpen(true)
                setNftData(nft as NFTInstanceI)
              }}
            />
          </>
        ))}
      </Grid>
      <MintModal {...{ open, setOpen, nft: nftData!! }} />
    </>
  )
}
