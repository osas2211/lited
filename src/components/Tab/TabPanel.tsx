import React, { ReactNode } from "react"
import { Typography } from ".."

interface TabI {
  items: { heading: ReactNode; element: ReactNode }[]
  setActivePanel: React.Dispatch<React.SetStateAction<string | number>>
  activePanel: number | string
}

export const TabPanel: React.FC<TabI> = ({
  items,
  activePanel,
  setActivePanel,
}) => {
  const { Button1 } = Typography
  const activeClass = "button border-b-[3px]"
  return (
    <div className="flex gap-[32px] md:w-auto w-[180vw] no-scrollbar">
      {items?.map((item, index) => (
        <Button1
          onClick={() => setActivePanel(index)}
          key={index}
          className={`capitalize ${
            activePanel === index ? activeClass : ""
          } pb-[5px] border-primary-default cursor-pointer`}
        >
          {item.heading}
        </Button1>
      ))}
    </div>
  )
}
