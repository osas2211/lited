"use client"
import React from "react"
import { Typography } from "@/components"
import Link from "next/link"
import { usePathname } from "next/navigation"
import classNames from "classnames"

export const SettingsNav = () => {
  const { Subtitle2Bold, Subtitle2Medium } = Typography
  const paths = [
    {
      name: "Profile Details",
      route: "/settings",
    },
    {
      name: "Profile Picture",
      route: "/settings/profile-picture",
    },
    {
      name: "Notifications",
      route: "/settings/notifications",
    },
  ]
  const pathname = usePathname()

  return (
    <div className="w-[220px] h-[65vh] mt-[20px] pt-[32px] bg-grey-900 hidden md:block">
      <div className="settings-nav flex flex-col gap-[12px]">
        {paths.map(({ name, route }) => {
          const active = pathname === route
          const activeClass = active ? "settings-nav-active" : ""
          const activeTextClass = active ? "settings-nav-active_text" : ""

          return (
            <div
              className={classNames("settings-nav-item", activeClass)}
              key={route}
            >
              <Link href={route}>
                {active ? (
                  <Subtitle2Bold className={activeTextClass}>
                    {name}
                  </Subtitle2Bold>
                ) : (
                  <Subtitle2Medium className={activeTextClass}>
                    {name}
                  </Subtitle2Medium>
                )}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
