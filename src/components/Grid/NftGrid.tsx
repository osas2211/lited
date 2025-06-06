"use client"
import React, { useState } from "react"
import Grid from "."
import { Cards } from ".."
import { MintModal } from "../Modal/MintNFT"

interface NftGridI {
  grid?: number
  setGrid?: React.Dispatch<React.SetStateAction<number>>
  nfts: any[]
}

export const NftGrid: React.FC<NftGridI> = ({ grid, nfts }) => {
  const { NFTCard } = Cards
  const [open, setOpen] = useState(false)

  return (
    <>
      <Grid nItems={grid || 4} className="mb-[40px]">
        {[...nfts, ...nfts.reverse(), ...nfts.reverse()].map((nft) => (
          <>
            <NFTCard
              {...nft}
              size={grid === 3 ? "large" : "small"}
              key={nft.name}
              ButtonText={"Mint"}
              onButtonClick={() => setOpen(true)}
            />
          </>
        ))}
      </Grid>
      <MintModal {...{ open, setOpen }} />
    </>
  )
}
