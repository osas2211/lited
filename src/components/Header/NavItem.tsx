import Link from "next/link"
import React, { FC } from "react"
import { Typography } from ".."
import { gradient } from "@/utils/colors"

interface NavItem {
  active: string
  route: string
  name: string
}

export const NavItem: FC<NavItem> = ({ active, route, name }) => {
  const { Subtitle2Medium } = Typography
  return (
    <Link href={route}>
      <li
        className={`block px-[16px] py-[9px] capitalize md:inline-block ${
          active === name ? "border-b-[2px] border-b-primary-active" : ""
        }`}
        style={{
          background: active == name ? gradient.background_gradient : "",
        }}
      >
        <Subtitle2Medium
          className={active === name ? "button text-center" : " text-center"}
        >
          {name}
        </Subtitle2Medium>
      </li>
    </Link>
  )
}
