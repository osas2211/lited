"use client"
import React, { Dispatch, FC, SetStateAction } from "react"
import { Box, Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy"
import { UserIcon } from "./UserIcon"
import Link from "next/link"
import { Typography } from ".."
import {
  ElementIcon,
  Heart2Icon,
  LogoutIcon,
  ProfileCircleIcon,
  SettingsIcon,
} from "../Icons"
import { useAccount, useDisconnect } from "wagmi"

export const ProfileNav = ({ profile_img = "" }: { profile_img?: string }) => {
  const { Subtitle3Medium } = Typography
  const { disconnect } = useDisconnect()
  const { isConnected } = useAccount()
  return (
    <div className="hidden md:block">
      <Dropdown>
        <MenuButton slots={{ root: Box }}>
          <UserIcon imageSrc={profile_img} />
        </MenuButton>
        <Menu className="bg-grey-800 p-[12px] w-full md:w-auto">
          <MenuItem>
            <Link
              href={"/profile"}
              className="md:flex gap-[12px] items-center hidden"
            >
              <ProfileCircleIcon />
              <Subtitle3Medium className="text-grey-0">Profile</Subtitle3Medium>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/profile"} className="flex gap-[12px] items-center">
              <Heart2Icon />
              <Subtitle3Medium className="text-grey-0">
                Favourites
              </Subtitle3Medium>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/profile"} className="flex gap-[12px] items-center">
              <ElementIcon />
              <Subtitle3Medium className="text-grey-0">
                My Collections
              </Subtitle3Medium>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/settings"} className="flex gap-[12px] items-center">
              <SettingsIcon />
              <Subtitle3Medium className="text-grey-0">
                Settings
              </Subtitle3Medium>
            </Link>
          </MenuItem>
          {isConnected && (
            <MenuItem>
              <div
                className="flex gap-[12px] items-center"
                onClick={() => disconnect()}
              >
                <LogoutIcon />
                <Subtitle3Medium className="text-grey-0">
                  Disconnect Wallet
                </Subtitle3Medium>
              </div>
            </MenuItem>
          )}
        </Menu>
      </Dropdown>
    </div>
  )
}
