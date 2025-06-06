"use client"
import React from "react"
import { Button } from ".."

export const MarketTab = () => {
  const [active, setActive] = React.useState("market")
  return (
    <div className="flex p-[10px] rounded-[40px] bg-grey-800 gap-[12px] mt-[32px] md:mt-[0px]">
      <Button
        size="small"
        variant={active === "market" ? "primary" : "text"}
        onClick={() => setActive("market")}
        className="w-full md:w-auto"
      >
        NFT Market
      </Button>
      <Button
        variant={active === "collections" ? "primary" : "text"}
        size="small"
        onClick={() => setActive("collections")}
        className="w-full md:w-auto"
      >
        NFT Collections Market
      </Button>
    </div>
  )
}
