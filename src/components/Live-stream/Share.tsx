"use client"
import React, { useState } from "react"
import { ControlButton } from "./ControlButton"
import { CopyOutlinedIcon, LinkIconAlt, ShareIcon } from "../Icons"
import { Input } from ".."

const inputStyle = `md:w-[400px] lg:w-[615px] w-full bg-grey-800 active:border-grey-700 hover:border-grey-700 
  border-[1px] border-grey-700 placeholder:text-[#5C3D44] py-[10px] px-[20px] rounded-[12px] 
  flex justify-between items-center`

export const Share = () => {
  const [active, setActive] = useState(false)
  const toggleShare = () => setActive(!active)
  const link = "portal.songstoradio.com"
  const [copyTEXT, setCopyTEXT] = useState("Copy")

  const copyLink = () => {
    navigator.clipboard.writeText(link)
    setCopyTEXT("Copied!✅")
    setTimeout(() => {
      setCopyTEXT("Copy")
    }, 2000)
  }

  return (
    <>
      <ControlButton
        icon={<ShareIcon />}
        active={active}
        onClick={toggleShare}
      />

      {active && (
        <div className="absolute bottom-[6.5rem] left-[50%] translate-x-[-50%] md:w-auto w-full">
          <div className={inputStyle}>
            <div className="flex gap-2 items-center">
              <LinkIconAlt />
              <p>{link} </p>
            </div>
            <button
              className="border-[1px] border-grey-700 py-[8px] px-[14px] rounded-[6px] bg-gradient-linear flex gap-2 items-center"
              onClick={copyLink}
            >
              <small className="text-[14px]">{copyTEXT}</small>
              <CopyOutlinedIcon />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
