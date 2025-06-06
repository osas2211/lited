import React, { FC } from "react"
import { Logo, Input, Button, Typography, Nav } from ".."
import { SearchIcon } from "../Icons"
import Link from "next/link"
import { ConnectWallet } from "../ConnectWallet"
import { MobileNav } from "./MobileNav"
interface HeaderI extends React.HTMLAttributes<HTMLDivElement> {
  navItems: { name: string; route: string }[]
  active: string
}

const Header: FC<HeaderI> = ({ className, navItems, active, ...props }) => {
  return (
    <header
      {...props}
      className={`
    md:px-[80px] relative px-[16px] py-[16px] bg-grey-900
     ${className ? className : ""}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-[24px]">
          <Logo />
          <div className="hidden md:block">
            <Input
              className="w-[244px]"
              placeholder="Search by title, collec..."
              prefixIcon={<SearchIcon />}
            />
          </div>
        </div>

        <div className="md:flex md:items-center md:gap-[24px] hidden">
          <Nav items={navItems} active={active} />
          <ConnectWallet />
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
