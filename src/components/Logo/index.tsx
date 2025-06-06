import React, { FC } from "react"
import Image from "next/image"

export const Logo: FC<{ width?: number; height?: number }> = ({ ...props }) => {
  return (
    <Image
      src={"/assets/logo.svg"}
      alt="logo"
      width={props.width || 80}
      height={props.height || 32}
    />
  )
}
