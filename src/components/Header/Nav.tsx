"use client"
import React, { FC } from "react"
import { NavItem } from "./NavItem"

interface NavI extends React.HTMLAttributes<HTMLDivElement> {
  items: { name: string; route: string }[]

  active: string
}

export const Nav: FC<NavI> = ({ items, active, ...props }) => {
  return (
    <nav {...props}>
      <ul className="transition-all">
        {items?.map((item) => (
          <NavItem
            active={active}
            route={item.route}
            key={item.name}
            name={item.name}
          />
        ))}
      </ul>
    </nav>
  )
}
