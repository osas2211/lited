"use client"
import React from "react"
import { Button } from ".."

export const MarketTab = () => {
  const [active, setActive] = React.useState("music")
  return (
    <div className="flex p-[7px] rounded-[40px] bg-grey-800 gap-[12px] mt-[32px] md:mt-[0px]">
      <Button
        size="small"
        variant={active === "music" ? "primary" : "text"}
        onClick={() => setActive("music")}
        className="w-full md:w-auto"
      >
        Music
      </Button>
      <Button
        variant={active === "videos" ? "primary" : "text"}
        size="small"
        onClick={() => setActive("videos")}
        className="w-full md:w-auto"
      >
        Videos
      </Button>
      <Button
        variant={active === "photos" ? "primary" : "text"}
        size="small"
        onClick={() => setActive("photos")}
        className="w-full md:w-auto"
      >
        Photos
      </Button>
      <Button
        variant={active === "comics" ? "primary" : "text"}
        size="small"
        onClick={() => setActive("comics")}
        className="w-full md:w-auto"
      >
        Comics
      </Button>
    </div>
  )
}
