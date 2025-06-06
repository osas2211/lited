import React from "react"
import { Typography } from ".."
import { Inter } from "next/font/google"
import classNames from "classnames"
import { CaretDownIcon } from "../Icons"

const inter = Inter({ subsets: ["latin"] })

const { H3, Subtitle2Regular } = Typography
interface PortalMetaCardProps {
  icon: React.ReactNode
  head: string
  subhead: string
  className?: string
  variant?: "default" | "small"
  showArrow?: boolean
  onClick?: () => void
}

export const PortalMetaCard: React.FC<PortalMetaCardProps> = ({ ...props }) => {
  return (
    <div
      onClick={props.onClick}
      className={classNames(
        "portal_meta-card md:h-[176px] h-[100px] flex items-center",
        props.className
      )}
    >
      <div className="relative w-[194px] h-[194px] md:ml-[-56px] ml-[-40px]">
        <div className="portal_meta-circle1 relative"></div>
        <div className="portal_meta-circle2"></div>
        <div className="portal_meta-circle3 flex justify-center items-center">
          {props.icon}
        </div>
      </div>
      <div>
        {props.variant === "small" ? (
          <div className="md:ml-[-54px] ml-[-32px]">
            <h3 className={`${inter.className} text-[16px]`}>{props.head}</h3>
            <small className={`${inter.className} text-[12px] text-grey-300`}>
              {props.subhead}
            </small>
          </div>
        ) : (
          <div className="md:ml-[-44px] ml-[-22px]">
            <H3 className={inter.className}>{props.head}</H3>
            <Subtitle2Regular className={inter.className}>
              {props.subhead}
            </Subtitle2Regular>
          </div>
        )}
      </div>
      {props.showArrow && (
        <div className="rotate-[-90deg] md:ml-[2.3rem] ml-[0rem]">
          <CaretDownIcon />
        </div>
      )}
    </div>
  )
}
