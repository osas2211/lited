"use client"
import React from "react"
import Link from "next/link"
import { Typography } from "@/components"
import {
  ProfileCircleIcon,
  ArrowUpIcon,
  ImageIcon,
  NotificationIcon,
} from "@/components/Icons"

export const MobileSettingsNav = () => {
  const { Subtitle3Medium } = Typography
  const [active, setActive] = React.useState(false)
  return (
    <div className="md:hidden inline-block max-w-[216px]">
      <div
        className={`transition-all ${
          active ? "rotate-[180deg]" : "rotate-[0deg]"
        }`}
        onClick={() => setActive(!active)}
      >
        <ArrowUpIcon />
      </div>

      {active && (
        <div className="transition-all duration-300 absolute top-[48px] rounded-[12px] left-0 bg-grey-800 p-[12px] w-[216px] z-[100]">
          <Link
            href={"/settings"}
            className="flex gap-[12px] items-center p-[12px]"
          >
            <ProfileCircleIcon />
            <Subtitle3Medium className="text-grey-0 text-[16px]">
              Profile Details
            </Subtitle3Medium>
          </Link>

          <Link
            href={"/settings/profile-picture"}
            className="flex gap-[12px] items-center p-[12px]"
          >
            <ImageIcon />
            <Subtitle3Medium className="text-grey-0 text-[16px]">
              Profile Picture
            </Subtitle3Medium>
          </Link>

          <Link
            href={"/settings/notifications"}
            className="flex gap-[12px] items-center p-[12px]"
          >
            <NotificationIcon />
            <Subtitle3Medium className="text-grey-0 text-[16px]">
              Notifications
            </Subtitle3Medium>
          </Link>
        </div>
      )}
    </div>
  )
}
