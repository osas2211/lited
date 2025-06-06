"use client"
import React, { useState } from "react"
import { ControlButton } from "./ControlButton"
import { VideoIcon, VideoSlashIcon } from "../Icons"

export const ShowVideo = () => {
  const [active, setActive] = useState(false)
  const icon = active ? <VideoIcon /> : <VideoSlashIcon />
  const toggleVideo = () => setActive(!active)
  return <ControlButton icon={icon} onClick={toggleVideo} active={active} />
}
