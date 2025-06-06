import React from "react"
import { CancelIconAltSmall } from "../Icons"

interface props {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "tertiary"
}

export const Tag = ({ children, variant }: props) => {
  return (
    <div className="inline-flex gap-1 rounded-[50px] border-[0.625px] border-grey-300 px-[6px] py-[3px]">
      <CancelIconAltSmall />
      <small className="text-[11px]">{children}</small>
    </div>
  )
}
