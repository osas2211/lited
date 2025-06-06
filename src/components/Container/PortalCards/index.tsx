import React, { FC } from "react"
import { Typography } from "@/components"

interface Props {
  title: string
  subtitle: string
  children: React.ReactNode
}

const { H4, Subtitle1Regular } = Typography

export const PortalCards: FC<Props> = ({ ...props }) => {
  return (
    <div className="md:pl-[80px] pl-[1rem]">
      <div>
        <H4 className="mb-[1rem]">{props.title}</H4>
        <Subtitle1Regular>{props.subtitle}</Subtitle1Regular>
      </div>
      <div>{props.children}</div>
    </div>
  )
}
