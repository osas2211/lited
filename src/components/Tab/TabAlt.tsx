"use client"
import React, { FC } from "react"
import { Button } from ".."

interface TabI {
  items: { heading: string; element: React.ReactNode }[]
}

export const TabAlt: FC<TabI> = ({ items }) => {
  const [active, setActive] = React.useState(0)
  const tabChild = items[active].element
  const tabHead = Object.values(items).map((item) => item.heading)
  return (
    <div>
      <div className="flex p-[5px] rounded-[40px] bg-grey-800 gap-[12px] mt-[32px] md:mt-[0px]">
        {tabHead.map((item, index) => (
          <Button
            key={index}
            size="small"
            variant={active === index ? "primary" : "text"}
            onClick={() => setActive(index)}
            className="w-full md:w-full"
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="mt-[24px]">{tabChild}</div>
    </div>
  )
}
