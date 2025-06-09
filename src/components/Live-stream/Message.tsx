"use client"
import React, { useState } from "react"
import { ControlButton } from "./ControlButton"
import { HappyEmoji, Messages3Icon, Send2Icon } from "../Icons"
import { Input } from ".."
import Picker from "@emoji-mart/react"
import data from "@emoji-mart/data"

const inputStyle =
  "md:w-[400px] lg:w-[615px] w-full bg-grey-800 active:border-grey-700 hover:border-grey-700 border-[1px] border-grey-700 placeholder:text-[#5C3D44]"

export const Message = () => {
  const [active, setActive] = useState(false)
  const toggleMsg = () => setActive(!active)
  const [showPicker, setShowPicker] = useState(false)
  const [message, setMessage] = useState("")

  const toggleEmojiPicker = (emoji: any) => {
    setShowPicker(!showPicker)
  }

  return (
    <>
      <ControlButton
        icon={<Messages3Icon />}
        active={active}
        onClick={toggleMsg}
      />
      {active && (
        <div className="absolute bottom-[6.5rem] left-[50%] translate-x-[-50%] md:w-auto w-full">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            prefixicon={<Send2Icon />}
            className={inputStyle}
            placeholder="Send a message"
            suffixIcon={
              <span className="cursor-pointer" onClick={toggleEmojiPicker}>
                <HappyEmoji />
              </span>
            }
          />
          {showPicker && (
            <div className="absolute bottom-[3.5rem] right-[0]">
              <Picker
                data={data}
                onEmojiSelect={(e: any) =>
                  setMessage((prev) => prev + e.native)
                }
              />
            </div>
          )}
        </div>
      )}
    </>
  )
}
