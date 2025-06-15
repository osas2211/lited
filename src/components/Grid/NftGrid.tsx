"use client"
import React, { useState } from "react"
import Grid from "."
import { Cards } from ".."
import { MintModal } from "../Modal/MintNFT"
import { IpAssetI, NFTInstanceI } from "@/types/story.api"
import { useGetNFTInstance } from "@/hooks/useStoryAPI"
import { spg_contract } from "@/constants/contract_addresses"

interface NftGridI {
  grid?: number
  setGrid?: React.Dispatch<React.SetStateAction<number>>
  nfts: IpAssetI[]
}

export const NftGrid: React.FC<NftGridI> = ({ grid, nfts }) => {
  const { NFTCard } = Cards
  const [open, setOpen] = useState(false)
  const [nftData, setNftData] = useState<IpAssetI>()

  return (
    <>
      <Grid nItems={grid || 4} className="mb-[40px]">
        {nfts?.map((nft, index) => (
          <>
            <NFTCard
              {...nft}
              size={grid === 3 ? "large" : "small"}
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
    </>
  )
}
