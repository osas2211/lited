"use client"
import React from "react"
import { ArrowUpIcon, CancelIcon, HamburgerIcon, SearchIcon } from "../Icons"
import { Avatar, Input, Nav, Typography } from ".."
import {
  ElementIcon,
  Heart2Icon,
  LogoutIcon,
  ProfileCircleIcon,
  SettingsIcon,
} from "../Icons"
import Link from "next/link"
import { TomoSocialConnect } from "../ConnectWallet/TomoSocialConnect"

export const MobileNav = () => {
  const [showNavItems, setShowNavItems] = React.useState(false)
  return (
    <div className="md:hidden flex gap-[8px] items-center justify-between">
      <Input
        className="py-[8px]"
        placeholder="Search by title, collec..."
        prefixicon={<SearchIcon />}
      />
      <Avatar src="/nft.png" className="h-[32px] min-w-[32px]" />

      {showNavItems ? (
        <div onClick={() => setShowNavItems(false)}>
          <CancelIcon />
        </div>
      ) : (
        <div onClick={() => setShowNavItems(true)}>
          <HamburgerIcon />
        </div>
      )}
      <div className="">{showNavItems && <MobileNavItems />}</div>
    </div>
  )
}

const MobileNavItems = () => {
  const { Subtitle2Medium, Subtitle3Medium } = Typography
  const [showProfileNav, setShowProfileNav] = React.useState(false)
  return (
    <>
      <div
        className="absolute top-[5rem] left-0 w-full bg-grey-1000 px-[16px] py-[9px] flex flex-col gap-[32px] pb-[64px]"
        style={{ zIndex: "1000" }}
      >
        <div className="p-[20px] bg-grey-900 rounded-[8px] overflow-hidden">
          <div className="flex justify-between items-center bg-grey-900">
            <div className="flex gap-[8px] items-center">
              <Avatar src="/nft.png" className="h-[32px] min-w-[32px]" />
              <Subtitle2Medium>Account</Subtitle2Medium>
            </div>
            <div
              onClick={() => setShowProfileNav(!showProfileNav)}
              className={`${
                showProfileNav ? "rotate-[180deg]" : "rotate-[0deg]"
              } transition-all`}
            >
              <ArrowUpIcon />
            </div>
          </div>

          {showProfileNav && (
            <div
              className="py-[12px] transition-all duration-300 mt-[12px]"
              style={{
                boxShadow: "0px 1px 100px 0px rgba(0, 0, 0, 0.20) inset",
              }}
            >
              <Link
                href={"/profile"}
                className="flex gap-[12px] items-center p-[12px]"
              >
                <ProfileCircleIcon />
                <Subtitle3Medium className="text-grey-0 text-[16px]">
                  Profile
                </Subtitle3Medium>
              </Link>

              <Link
                href={"/profile"}
                className="flex gap-[12px] items-center p-[12px]"
              >
                <Heart2Icon />
                <Subtitle3Medium className="text-grey-0 text-[16px]">
                  Favourites
                </Subtitle3Medium>
              </Link>

              <Link
                href={"/profile"}
                className="flex gap-[12px] items-center p-[12px]"
              >
                <ElementIcon />
                <Subtitle3Medium className="text-grey-0 text-[16px]">
                  My Collections
                </Subtitle3Medium>
              </Link>

              <Link
                href={"/settings"}
                className="flex gap-[12px] items-center p-[12px]"
              >
                <SettingsIcon />
                <Subtitle3Medium className="text-grey-0 text-[16px]">
                  Settings
                </Subtitle3Medium>
              </Link>

              <div className="flex gap-[12px] items-center p-[12px]">
                <LogoutIcon />
                <Subtitle3Medium className="text-grey-0">
                  Disconnect Wallet
                </Subtitle3Medium>
              </div>
            </div>
          )}
        </div>

        <div>
          <Nav
            items={[
              {
                name: "market",
                route: "/",
              },
              {
                name: "stack",
                route: "/",
              },
              {
                name: "launchpad",
                route: "/launchpad",
              },
            ]}
            active="market"
          />
        </div>

        <div className="flex items-center justify-center">
          <TomoSocialConnect />
        </div>
      </div>
    </>
  )
}
