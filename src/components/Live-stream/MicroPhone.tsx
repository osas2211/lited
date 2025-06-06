"use client"
import React, { useState } from "react"
import { ControlButton } from "./ControlButton"
import { MicroPhone2Icon, MicroPhoneSlashIcon } from "../Icons"

export const MicroPhone = () => {
  const [active, setActive] = useState(false)
  const icon = active ? <MicroPhone2Icon /> : <MicroPhoneSlashIcon />
  const toggleMic = () => setActive(!active)
  return <ControlButton icon={icon} active={active} onClick={toggleMic} />
}
