"use client"
import React, { FC, useEffect, useState } from "react"

interface GridI extends React.HTMLAttributes<HTMLDivElement> {
  nItems?: string | number
}

const Grid: FC<GridI> = ({ className, nItems, ...props }) => {
  const columns: Record<string, string> = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3 grid-cols-1",
    4: "md:grid-cols-4 grid-cols-2",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
  }

  return (
    <div
      {...props}
      className={`grid ${
        nItems ? columns[nItems] : "md:grid-cols-4"
      } md:gap-[40px] gap-x-[15px] gap-y-[24px] ${className ? className : ""}`}
    ></div>
  )
}

export default Grid
