import "./portal.css"
import { PortalMetaCard } from "@/components/Card/PortalMetaCard"
import {
  ExportPrimaryIcon,
  LinearStar,
  Profile2UserIcon,
} from "@/components/Icons"
import Image from "next/image"
import React from "react"
import { Typography } from "@/components"
import Link from "next/link"
import { PortalDetails } from "../../components/portal/PortalDetails"

const { Subtitle1Regular, Subtitle2Regular, Subtitle2Bold } = Typography

export const MetaData = () => {
  return (
    <div className="py-[44px] md:px-[80px] px-[1rem]">
      <div className="grid md:grid-cols-2 md:gap-[48px] gap-[20px]">
        <PortalMetaCard
          icon={<Profile2UserIcon />}
          head="200"
          subhead="You have 200 active subscribers "
        />
        <PortalMetaCard
          icon={<LinearStar />}
          head="1,000"
          subhead="You are following 1000, active portals"
        />
      </div>
      {/* <PortalDetails /> */}
    </div>
  )
}
