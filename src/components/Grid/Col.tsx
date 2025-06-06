import React, { FC } from "react"

type spanType = "6" | "8" | "12" | "24"

interface ColI extends React.HTMLAttributes<HTMLDivElement> {
  span?: spanType
  xs?: spanType
  md?: spanType
  lg?: spanType
}

export const Col: FC<ColI> = ({ className, ...props }) => {
  return <div>Col</div>
}
