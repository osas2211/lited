"use client"
import classNames from "classnames"
import React, { FC } from "react"

interface Props {
  icon: React.ReactNode
  className?: string
  onClick?: () => void
  active?: boolean
  setActive?: (active: boolean) => void
}

export const ControlButton: FC<Props> = ({
  icon,
  className,
  onClick,
  active,
  setActive,
}) => {
  const isActiveBg = active ? "bg-gradient-linear-2" : "bg-gradient-linear"
  return (
    <div
      onClick={onClick}
      className={classNames(
        `${isActiveBg} border-[1px] border-grey-700 md:p-[15px] p-[8px] rounded-full cursor-pointer transition-all duration-200`,
        className
      )}
    >
      {icon}
    </div>
  )
}
