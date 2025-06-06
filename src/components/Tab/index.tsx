"use client"
import React, { ReactNode, useState } from "react"
import { TabPanel } from "./TabPanel"

interface TabI {
  items: { heading: ReactNode; element: ReactNode }[]
  defaultIndex?: number | string
}

export const Tab: React.FC<TabI> = ({ items, defaultIndex }) => {
  const defaultPanel = defaultIndex || 0
  const [activePanel, setActivePanel] = useState(defaultPanel)
  return (
    <div className="my-[18px]">
      <TabPanel items={items} {...{ activePanel, setActivePanel }} />
      <div className="py-[16px]">{items[Number(activePanel)].element}</div>
    </div>
  )
}
