"use client"
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
    <div>
      <header
        {...props}
        className={`
    md:px-[80px] w-screen fixed top-0 left-0 z-[1000] px-[16px] py-[6px] bg-grey-900/50 backdrop-blur-[20px]
     ${className ? className : ""}`}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-[24px] items-center">
            <Link href={"/"}>
              <Logo />
            </Link>
            <div className="!hidden md:block">
              <Input
                className="w-[244px]"
                placeholder="Search by title, collec..."
                prefixicon={<SearchIcon />}
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
      <div className="mb-24"></div>
    </div>
  )
}

export default Header
